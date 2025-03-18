async function generateCode() {
  let namespace = document.getElementById("namespace").value == "" ? "testForm" : document.getElementById("namespace").value;
  let zip = new JSZip();

  jsonData = JSON.parse(generateCodeForElements(zip, namespace));
  //console.log(JSON.stringify(jsonData, null, 4));
  //return;
  // Create folder structure
  zip.folder("textures/ui/forms/" + namespace);
  zip.folder("ui/forms/" + namespace);

  // Pack Icon
  const imageResponse = await fetch("template/pack_icon.png");
  const imageBlob = await imageResponse.blob();
  zip.file("pack_icon.png", imageBlob);

  // Manifest.json
  let manifestData = {
    format_version: 2,
    header: {
      description: "§7Made with JsonUI-Maker",
      name: "§l§cCustom Form pack",
      uuid: generateUUID(),
      version: [1, 0, 0],
      min_engine_version: [1, 16, 2],
    },
    modules: [
      {
        description: "§7Made with JsonUI-Maker",
        type: "resources",
        uuid: generateUUID(),
        version: [1, 0, 0],
      },
    ],
  };
  zip.file("manifest.json", JSON.stringify(manifestData, null, 4));

  // _ui_defs.json
  let uiDefsData = {
    ui_defs: ["ui/forms/" + namespace + "/" + namespace + ".json"],
  };
  zip.file("ui/_ui_defs.json", JSON.stringify(uiDefsData, null, 4));

  // Form.json
  zip.file("ui/forms/" + namespace + "/" + namespace + ".json", JSON.stringify(jsonData, null, 4));

  // server_form.json
  let serverForm = await fetch("template/server_form.json");
  serverForm = await serverForm.text();
  serverForm = serverForm.replace(/NAMESPACE/g, `${namespace}`);
  zip.file("ui/server_form.json", serverForm);

  downloadFile(zip);
}

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

async function downloadFile(zip) {
  let file = await zip.generateAsync({ type: "blob" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.target = "_blank";
  link.download = "JsonUIMaker.mcpack";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function generateCodeForElements(zip, namespace) {
  let elements = document.querySelectorAll(".editorElement");

  let code = {
    namespace: "" + namespace,
    [`jsonuimaker_${namespace}`]: {},
  };

  for (let element of elements) {
    if (element.dataset.name == "Form Body") {
      // Generate code for the main element
      let headControls = [];
      // Add the child elements
      headControls = generateCodeForElement(element, namespace, zip, code);

      // Add the backgroundImage control and save the image
      let backgroundImage = element.style.backgroundImage.slice(5, -2);
      if (backgroundImage != "") {
        if (backgroundImage.startsWith("data:image/")) backgroundImage = backgroundImage.split(",")[1];
        backgroundImage = atob(backgroundImage);
        let byteNumbers = new Array(backgroundImage.length);
        for (let i = 0; i < backgroundImage.length; i++) {
          byteNumbers[i] = backgroundImage.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        zip.file("textures/ui/forms/" + namespace + "/form_background.png", byteArray, { binary: true });

        let nineslice = {
          nineslice_size: 1,
          base_size: [3, 3],
        };
        if (element.dataset.nineslice != "false") {
          nineslice = JSON.parse(element.dataset.nineslice);
        }
        zip.file("textures/ui/forms/" + namespace + "/form_background.json", JSON.stringify(nineslice, null, 4));
      }
      headControls.push({
        content: {
          type: "image",
          layer: -1,
          texture: "textures/ui/" + (backgroundImage != "" ? "forms/" + namespace + "/form_background" : "dialog_background_hollow_3"),
          keep_ratio: element.dataset.keepRatio === "true",
        },
      });

      // Create main panel code
      code[`jsonuimaker_${namespace}`] = {
        type: "panel",
        size: [element.style.width, element.style.height],
        max_size: [element.style.width, element.style.height],
        offset: [element.dataset.offsetX, element.dataset.offsetY],
        anchor_from: getAnchorNameFromIndex(element.dataset["anchor"]),
        anchor_to: getAnchorNameFromIndex(element.dataset["anchor"]),
        controls: headControls,
      };
    } else if (element.dataset.standalone) {
      // Generate code for the standalone element
      let controls = [];
      controls = generateCodeForElement(element, namespace, zip, code);

      let rawCode = getCodeOfElement(zip, element, namespace, code);

      if (rawCode !== null) {
        // If element is scroll panel the child panel has to be set into $scrolling_content
        if (element.dataset.name == "Scroll Panel") {
          let childName = "";
          for (let child of element.childrenElements) {
            childName = child.dataset.jsonName;
          }
          rawCode[getJsonElementName(element)].controls[0]["scroll_panel@common.scrolling_panel"]["$scrolling_content"] =
            "" + namespace + "." + childName;
        } else rawCode[getJsonElementName(element)].controls = controls;
        Object.assign(code, rawCode);
      }
    }
  }
  return JSON.stringify(code, null, 4);
}

function generateCodeForElement(element, namespace, zip, code) {
  let controls = [];

  if (element.childrenElements) {
    for (let child of element.childrenElements) {
      if (!child.dataset.standalone) {
        // For elements in controls array
        childControls = generateCodeForElement(child, namespace, zip);
        let rawCode = getCodeOfElement(zip, child, namespace, code);
        if (rawCode !== null) controls.push(rawCode);
      } else {
        // Creates a link to the standalone element
        childControls = generateCodeForElement(child, namespace, zip);
        controls.push({
          ["" + child.dataset.jsonName + "@" + namespace + "." + child.dataset.jsonName]: {},
        });
      }
    }
  }
  return controls;
}
