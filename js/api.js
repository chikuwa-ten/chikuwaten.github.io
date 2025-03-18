let elementCreateData = [
  {
    name: "Form Body",
    createType: "main",
    height: "fill",
    width: "fill",
    parentAbility: true,
    actions: ["delete", "anchor", "offsetX", "offsetY", "height", "width", "keepRatio", "backgroundImage", "nineslice"],
  },
  {
    name: "Form Title",
    createType: "label",
    text: "#title_text",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "offsetX",
      "offsetY",
      "height",
      "width",
      "fontSize",
      "fontType",
      "color",
      "textAlignment",
      "shadow",
    ],
  },
  {
    name: "Form Content",
    createType: "label",
    text: "#form_text",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "offsetX",
      "offsetY",
      "height",
      "width",
      "fontSize",
      "fontType",
      "color",
      "textAlignment",
      "shadow",
    ],
  },
  {
    name: "Close Button",
    createType: "button",
    height: "50px",
    width: "50px",
    actions: ["delete", "parent", "height", "width", "anchor", "offsetX", "offsetY", "backgroundImage", "hoverBackgroundImage", "nineslice"],
  },
  {
    name: "Scroll Panel",
    standalone: true,
    createType: "div",
    height: "fill",
    width: "fill",
    backgroundColor: "gray",
    parentAbility: true,
    actions: ["delete", "jsonName", "parent", "anchor", "offsetX", "offsetY", "height", "width"],
  },
  {
    name: "Button Factory",
    standalone: true,
    createType: "div",
    height: "fill",
    width: "fill",
    resize: true,
    backgroundColor: "orange",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "height",
      "width",
      "offsetX",
      "offsetY",
      "orientation",
      "buttonAmount",
      "buttonFlag",
      "buttonBackgroundImage",
      "buttonHoverBackgroundImage",
      "nineslice",
      "fontSize",
      "fontType",
      "buttonTextAnchor",
      "ignoreButtonClick",
      "borderVisible",
      "buttonWidth",
      "buttonHeight",
      "buttonIcon",
      "buttonIconWidth",
      "buttonIconHeight",
      "buttonIconAnchor",
    ],
  },
  {
    name: "Button Grid",
    standalone: true,
    createType: "div",
    height: "fill",
    width: "fill",
    resize: true,
    backgroundColor: "orange",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "height",
      "width",
      "offsetX",
      "offsetY",
      "buttonAmount",
      "buttonBackgroundImage",
      "buttonHoverBackgroundImage",
      "nineslice",
      "fontSize",
      "fontType",
      "buttonTextAnchor",
      "ignoreButtonClick",
      "borderVisible",
      "buttonWidth",
      "buttonHeight",
      "buttonIcon",
      "buttonIconWidth",
      "buttonIconHeight",
      "buttonIconAnchor",
    ],
  },
  {
    name: "Panel",
    standalone: true,
    createType: "div",
    height: "fill",
    width: "fill",
    backgroundColor: "green",
    parentAbility: true,
    actions: ["delete", "jsonName", "parent", "anchor", "offsetX", "offsetY", "height", "width"],
  },
  {
    name: "Stack Panel",
    standalone: true,
    createType: "div",
    height: "fill",
    width: "fill",
    backgroundColor: "green",
    parentAbility: true,
    actions: ["delete", "jsonName", "parent", "anchor", "offsetX", "offsetY", "orientation", "height", "width"],
  },
  {
    name: "Label",
    createType: "label",
    text: "Text",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "offsetX",
      "offsetY",
      "height",
      "width",
      "fontSize",
      "fontType",
      "color",
      "textAlignment",
      "shadow",
    ],
  },
  {
    name: "Image",
    createType: "div",
    height: "fill",
    width: "fill",
    backgroundColor: "yellow",
    actions: [
      "delete",
      "jsonName",
      "parent",
      "anchor",
      "offsetX",
      "offsetY",
      "height",
      "width",
      "keepRatio",
      "backgroundImageName",
      "backgroundImage",
      "nineslice",
    ],
  },
];

let actionDropdownData = [
  {
    name: "anchor",
    values: ["top_left", "top_middle", "top_right", "middle_left", "center", "middle_right", "bottom_left", "bottom_middle", "bottom_right"],
  },
  {
    name: "buttonTextAnchor",
    values: ["top_left", "top_middle", "top_right", "middle_left", "center", "middle_right", "bottom_left", "bottom_middle", "bottom_right"],
  },
  {
    name: "buttonIconAnchor",
    values: ["top_left", "top_middle", "top_right", "middle_left", "center", "middle_right", "bottom_left", "bottom_middle", "bottom_right"],
  },
  {
    name: "parent",
    values: ["screen"],
  },
  {
    name: "color",
    values: [
      "black",
      "dark_blue",
      "dark_green",
      "dark_aqua",
      "dark_red",
      "dark_purple",
      "gold",
      "gray",
      "dark_gray",
      "blue",
      "green",
      "aqua",
      "red",
      "light_purple",
      "yellow",
      "white",
    ],
  },
  {
    name: "orientation",
    values: ["vertical", "horizontal"],
  },
  {
    name: "fontType",
    values: ["MineCraftTen", "Minecraftia"],
  },
  {
    name: "textAlignment",
    values: ["left", "center", "right"],
  },
];

let defaultActionData = {
  color: "black",
  textAlignment: "center",
  buttonTextAnchor: 4,
  buttonIconAnchor: 3,
  buttonIconWidth: "16px",
  buttonIconHeight: "16px",
  parent: "screen",
  buttonAmount: 0,
  buttonFlag: "",
  buttonWidth: "150px",
  buttonHeight: "50px",
  shadow: false,
  keepRatio: false,
  ignoreButtonClick: false,
  borderVisible: false,
  buttonIcon: true,
  orientation: "vertical",
  jsonName: "Default",
  fontType: 1,
  nineslice: false,
  backgroundImageName: "default",
  offsetX: "0px",
  offsetY: "0px",
};

function createElement(elementName, anchorIndex, parent) {
  const elementData = elementCreateData.find((element) => element.name === elementName);
  if (!elementData) return;

  const newElement = createElementType(elementData);
  newElement.classList.add("editorElement");
  newElement.dataset.createType = elementData.createType;
  newElement.dataset.name = elementData.name;
  newElement.style.position = "absolute";

  // set height/width
  setupElement(newElement, elementData, anchorIndex);
  newElement.addEventListener("click", (e) => {
    e.stopPropagation();
    displayActions(newElement, elementData, parent);
  });
  return newElement;
}

function createElementType(elementData) {
  switch (elementData.createType) {
    case "label":
      const element = document.createElement("textarea");
      element.value = elementData.text;
      return element;
    case "main":
      return document.createElement("div");
    default:
      return document.createElement(elementData.createType);
  }
}

function setupElement(newElement, elementData, anchorIndex) {
  setDefaultActionData(newElement, elementData, anchorIndex);
  switch (elementData.createType) {
    case "label":
      newElement.style.fontFamily = elementData.name === "Form Title" ? "MinecraftTen" : "Minecraftia-Regular";
      newElement.dataset.fontType = elementData.name === "Form Title" ? 0 : 1;
      newElement.style.width = "150px";
      newElement.style.height = "30px";
      break;
    default:
      if (elementData.standalone) newElement.dataset.standalone = true;
      if (elementData.resize) newElement.dataset.resize = true;
      if (elementData.name === "Form Body") newElement.dataset.jsonName = "Main Form";
      // Parent element
      if (elementData.parentAbility) {
        actionDropdownData
          .find((item) => item.name === "parent")
          .values.push(newElement.dataset.jsonName ? newElement.dataset.jsonName : elementData.jsonName);
        newElement.childrenElements = [];
      }
      // Set width and height
      const anchorSquare = document.querySelectorAll(".square")[anchorIndex].getBoundingClientRect();
      newElement.style.width = elementData.width === "fill" ? `${anchorSquare.width}px` : elementData.width;
      newElement.style.height = elementData.height === "fill" ? `${anchorSquare.height}px` : elementData.height;

      // set background color
      if (elementData.backgroundColor && elementData.name !== "Image") newElement.style.border = `2px solid ${elementData.backgroundColor}`;
      else if (elementData.name === "Image") newElement.style.backgroundColor = "yellow";
      else newElement.style.backgroundColor = "white";

      // set overflow on scroll panel
      if (elementData.name === "Scroll Panel") newElement.style.overflowY = "auto";

      // set grid for Button Grid
      if (elementData.name === "Button Grid") {
        newElement.style.display = "grid";
        newElement.style.gridTemplateColumns = "repeat(3, 33.3%)";
        newElement.style.gap = "1px";
      }

      // set basic structure for orientation in stack panel/button factory
      if (elementData.name === "Stack Panel" || elementData.name === "Button Factory") {
        newElement.style.display = "flex";
        newElement.style.flexDirection = "column";
        if (elementData.name == "Button Factory") newElement.style.gap = "10px";
      }
      break;
  }
}

function moveToAnchorPosition(element, parent, withoutAnchor) {
  if (withoutAnchor) element.style.position = "unset";
  else {
    if (element.dataset.name !== "Scroll Panel") element.style.overflow = "hidden";
    element.style.position = "absolute";
    element.style.height = element.dataset.height;
    element.style.width = element.dataset.width;
  }
  const x = getCoordsOfAnchor(element, parent, "left");
  const y = getCoordsOfAnchor(element, parent, "top");

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function getCoordsOfAnchor(element, parent, direction) {
  const parentRect = parent.getBoundingClientRect();
  let x, y;
  const offsets = {
    top_left: [0, 0],
    top_middle: [parentRect.width / 2 - element.offsetWidth / 2, 0],
    top_right: [parentRect.width - element.offsetWidth, 0],
    middle_left: [0, parentRect.height / 2 - element.offsetHeight / 2],
    center: [parentRect.width / 2 - element.offsetWidth / 2, parentRect.height / 2 - element.offsetHeight / 2],
    middle_right: [parentRect.width - element.offsetWidth, parentRect.height / 2 - element.offsetHeight / 2],
    bottom_left: [0, parentRect.height - element.offsetHeight],
    bottom_middle: [parentRect.width / 2 - element.offsetWidth / 2, parentRect.height - element.offsetHeight],
    bottom_right: [parentRect.width - element.offsetWidth, parentRect.height - element.offsetHeight],
  };

  [x, y] = offsets[getAnchorNameFromIndex(element.dataset.anchor)] || [0, 0];
  return direction === "left" ? x : y;
}

function getAnchorNameFromIndex(index) {
  const anchors = ["top_left", "top_middle", "top_right", "middle_left", "center", "middle_right", "bottom_left", "bottom_middle", "bottom_right"];
  return anchors[index];
}

function displayActions(newElement, elementData, parent) {
  const editor = document.querySelector("#editor");
  editor.dataset.namespace = document.querySelector("#namespace")?.value || editor.dataset.namespace;

  let actionsDiv = document.querySelector(".actions");
  actionsDiv.style.overflowY = "auto";
  actionsDiv.style.justifyContent = "unset";
  actionsDiv.innerHTML = "";

  elementData.actions.forEach((actionName) => {
    const label = document.createElement("label");
    label.innerText = actionName;
    actionsDiv.appendChild(label);

    const action = createActionElement(actionName, newElement);
    if (action) {
      applyListener(newElement, action, actionName, parent);
      actionsDiv.appendChild(action);
    }
  });
}

function createActionElement(actionName, newElement) {
  let action;

  switch (actionName) {
    case "delete":
      action = document.createElement("button");
      action.innerText = "Delete";
      break;
    case "anchor":
    case "buttonTextAnchor":
    case "buttonIconAnchor":
    case "parent":
    case "color":
    case "orientation":
    case "fontType":
    case "textAlignment":
      action = document.createElement("select");
      const values = actionDropdownData.find((key) => key.name === actionName)?.values || [];

      values.forEach((value) => {
        if (actionName === "parent" && value === newElement.dataset.jsonName) return; // Avoid selecting itself
        const option = document.createElement("option");
        option.value = value;
        option.innerText = value;
        action.appendChild(option);
      });

      if (actionName === "parent" || actionName === "orientation") {
        action.value = newElement.dataset[actionName];
      } else if (actionName === "textAlignment") {
        action.selectedIndex = newElement.dataset.textAlignment === "center" ? 1 : newElement.dataset.textAlignment;
      } else {
        action.selectedIndex = newElement.dataset[actionName];
      }
      break;
    case "height":
    case "width":
    case "fontSize":
    case "shadow":
    case "ignoreButtonClick":
    case "buttonIcon":
    case "borderVisible":
    case "buttonAmount":
    case "buttonFlag":
    case "buttonWidth":
    case "buttonHeight":
    case "buttonIconWidth":
    case "buttonIconHeight":
    case "jsonName":
    case "keepRatio":
    case "backgroundImageName":
    case "offsetX":
    case "offsetY":
      action = document.createElement("input");

      if (["shadow", "keepRatio", "ignoreButtonClick", "borderVisible", "buttonIcon"].includes(actionName)) {
        action.type = "checkbox";
        action.checked = newElement.dataset[actionName] === "true";
      } else {
        action.placeholder = actionName;
        action.value =
          actionName === "height"
            ? newElement.style.height
            : actionName === "width"
            ? newElement.style.width
            : actionName === "fontSize"
            ? (parseInt(window.getComputedStyle(newElement).fontSize) - 10) / 10
            : newElement.dataset[actionName] || "";
      }
      break;
    case "backgroundImage":
    case "hoverBackgroundImage":
    case "buttonBackgroundImage":
    case "buttonHoverBackgroundImage":
    case "nineslice":
      action = document.createElement("input");
      action.type = "file";
      action.accept = actionName === "nineslice" ? "application/json" : "image/*";
      break;
    default:
      action = document.createElement("label"); // Handle unsupported actions
      break;
  }
  return action;
}

function applyListener(newElement, action, actionName, parent) {
  switch (actionName) {
    case "delete":
      action.addEventListener("click", () => {
        if (newElement.childrenElements) {
          newElement.childrenElements.forEach((child) => {
            child.dataset.parent = "screen";
            document.querySelector("#editor").appendChild(child);
            moveToAnchorPosition(child, document.querySelector("#editor"), false);
          });
          // remove parents name from parentDropwdownList
          let dropdownData = actionDropdownData.find((item) => item.name === "parent");
          let parentIndex = dropdownData.values.indexOf(newElement.dataset.jsonName || "Main Form");
          dropdownData.values.splice(parentIndex, 1);
        }
        newElement.remove();
        resetActions();
      });
      break;
    case "anchor":
    case "buttonTextAnchor":
    case "buttonIconAnchor":
    case "parent":
    case "color":
    case "orientation":
    case "fontType":
    case "textAlignment":
      action.addEventListener("change", (e) => {
        const oldParent = getParentElement(newElement.dataset.parent) || document.getElementById("editor");
        const selectedValue = actionName === "parent" || actionName === "orientation" ? e.target.value : e.target.selectedIndex;
        updateElementsData(newElement, actionName, selectedValue);

        if (handleSpecificChangeActions(newElement, actionName, selectedValue, e.target.value)) return;

        if (newElement.dataset.parent) {
          const parentData = newElement.dataset.parent;
          parent = parentData === "screen" ? document.getElementById("editor") : getParentElement(parentData);
        }
        if (oldParent !== parent) {
          if (actionName === "parent") {
            if (newElement.dataset.resize) {
              if (parent.style.overflowY === "auto") {
                newElement.dataset.width = newElement.style.width;
                newElement.dataset.height = newElement.style.height;
                newElement.style.width = parent.style.width;
                newElement.style.height = parent.style.height;
              }
            }
          }
          if (oldParent.childrenElements) {
            const index = oldParent.childrenElements.indexOf(newElement);
            if (index !== -1) oldParent.childrenElements.splice(index, 1);
          }
        }
        parent.appendChild(newElement);

        if (parent !== oldParent && parent.childrenElements) {
          parent.childrenElements.push(newElement);
          if (parent.dataset.name === "Scroll Panel") {
            if (!newElement.dataset.resize) {
              newElement.dataset.width = newElement.style.width;
              newElement.dataset.height = newElement.style.height;
            }
            newElement.style.overflow = "visible";
            newElement.style.height = "auto";

            console.log(parent);
            moveToAnchorPosition(newElement, parent, true);
            applyOffset(newElement, "offsetX");
            applyOffset(newElement, "offsetY");
            return;
          }
        }
        moveToAnchorPosition(newElement, parent, parent.dataset.name === "Stack Panel");
        applyOffset(newElement, "offsetX");
        applyOffset(newElement, "offsetY");
      });
      break;
    case "height":
    case "width":
    case "fontSize":
    case "shadow":
    case "buttonIcon":
    case "ignoreButtonClick":
    case "borderVisible":
    case "buttonAmount":
    case "buttonFlag":
    case "buttonWidth":
    case "buttonHeight":
    case "buttonIconWidth":
    case "buttonIconHeight":
    case "jsonName":
    case "keepRatio":
    case "backgroundImageName":
    case "offsetX":
    case "offsetY":
      action.addEventListener("input", (e) => {
        if (handleInputActionSpecifics(newElement, actionName, e.target)) return;
        newElement.style[actionName] = actionName === "fontSize" ? `${e.target.value * 10 + 10}px` : e.target.value;
      });
      break;
    case "backgroundImage":
    case "hoverBackgroundImage":
    case "buttonBackgroundImage":
    case "buttonHoverBackgroundImage":
    case "nineslice":
      action.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
          if (actionName == "backgroundImage" || actionName == "buttonBackgroundImage") {
            newElement.dataset.backgroundImage = event.target.result;

            if (actionName == "backgroundImage") {
              newElement.style.backgroundImage = `url(${event.target.result})`;
              newElement.style.backgroundColor = "transparent";
            } else {
              children = newElement.querySelectorAll("button");
              children.forEach((child) => {
                child.style.backgroundImage = `url(${event.target.result})`;
                child.style.backgroundColor = "transparent";
              });
            }
          } else if (actionName == "hoverBackgroundImage" || actionName == "buttonHoverBackgroundImage") {
            newElement.dataset.backgroundHoverImage = event.target.result;

            if (actionName == "hoverBackgroundImage") {
              newElement.addEventListener("mouseover", function () {
                newElement.style.backgroundImage = `url(${newElement.dataset.backgroundHoverImage})`;
              });
              newElement.addEventListener("mouseout", function () {
                newElement.style.backgroundImage = `url(${newElement.dataset.backgroundImage})`;
              });
            } else {
              children = newElement.querySelectorAll("button");
              children.forEach((child) => {
                child.addEventListener("mouseover", function () {
                  child.style.backgroundImage = `url(${newElement.dataset.backgroundHoverImage})`;
                });
                child.addEventListener("mouseout", function () {
                  child.style.backgroundImage = `url(${newElement.dataset.backgroundImage})`;
                });
              });
            }
          } else {
            const data = JSON.parse(atob(event.target.result.split(",")[1]));
            newElement.dataset.nineslice = JSON.stringify(data);
          }
        };
        reader.readAsDataURL(file);
      });
      break;
    default:
      break;
  }
}

function handleSpecificChangeActions(newElement, actionName, selectedValue, stringValue) {
  switch (actionName) {
    case "buttonTextAnchor":
    case "buttonIconAnchor":
      return true; // No further action required
    case "orientation":
      newElement.style.flexDirection = stringValue === "vertical" ? "column" : "row";
      return true;
    case "color":
      newElement.style.color = colorNameToHex(stringValue);
      return true;
    case "fontType":
      const fontFamily = selectedValue === 0 ? "MinecraftTen" : "Minecraftia-Regular";
      newElement.querySelectorAll("button").forEach((button) => {
        button.style.fontFamily = fontFamily;
      });
      newElement.style.fontFamily = fontFamily;
      return true;
    case "textAlignment":
      newElement.style.textAlign = ["left", "center", "right"][selectedValue];
      return true;
    default:
      return false;
  }
}

function handleInputActionSpecifics(newElement, actionName, target) {
  switch (actionName) {
    case "shadow":
    case "buttonIcon":
    case "ignoreButtonClick":
    case "borderVisible":
    case "buttonAmount":
    case "buttonFlag":
    case "buttonWidth":
    case "buttonIconWidth":
    case "buttonIconHeight":
    case "jsonName":
    case "keepRatio":
    case "backgroundImageName":
    case "buttonHeight":
      if (actionName === "jsonName" && newElement.childrenElements) {
        const dropdownData = actionDropdownData.find((item) => item.name === "parent");
        const parentIndex = dropdownData.values.indexOf(newElement.dataset.jsonName);
        dropdownData.values[parentIndex] = target.value;
        newElement.childrenElements.forEach((child) => (child.dataset.parent = target.value));
      }
      updateElementsData(newElement, actionName, target.type === "checkbox" ? target.checked : target.value);
      if (actionName === "buttonAmount") spawnButtons(newElement, target.value);
      if (actionName === "buttonWidth" || actionName === "buttonHeight") changeButtons(newElement);
      return true;
    case "fontSize":
      newElement.querySelectorAll("button").forEach((button) => {
        button.style.fontSize = `${target.value * 10 + 10}px`;
      });
      return false;
    case "offsetX":
    case "offsetY":
      updateElementsData(newElement, actionName, target.value);
      applyOffset(newElement, actionName);
      return true;
    default:
      return false;
  }
}

function updateElementsData(newElement, actionName, value) {
  newElement.dataset[actionName] = value;
}

function applyOffset(newElement, offsetType) {
  if (offsetType === "offsetY") {
    const originalTop = getCoordsOfAnchor(
      newElement,
      newElement.dataset.parent ? getParentElement(newElement.dataset.parent) : document.querySelector("#editor"),
      "top"
    );
    newElement.style.top = (parseInt(originalTop) || 0) + parseInt(newElement.dataset.offsetY, 10) + "px";
  } else {
    const originalLeft = getCoordsOfAnchor(
      newElement,
      newElement.dataset.parent ? getParentElement(newElement.dataset.parent) : document.querySelector("#editor"),
      "left"
    );
    newElement.style.left = (parseInt(originalLeft) || 0) + parseInt(newElement.dataset.offsetX, 10) + "px";
  }
}

function setDefaultActionData(newElement, elementData, anchorIndex) {
  elementData.actions.forEach((actionName) => {
    switch (actionName) {
      case "anchor":
        newElement.dataset[actionName] = anchorIndex;
        break;
      default:
        newElement.dataset[actionName] = defaultActionData[actionName];
        break;
    }
  });
}

function getParentElement(elementName) {
  const foundElement = Array.from(document.querySelectorAll(".editorElement")).find((element) => element.dataset.jsonName === elementName);
  return foundElement || document.querySelector("#editor");
}

function colorNameToHex(colorName) {
  const minecraftColors = {
    black: "#000000",
    dark_blue: "#0000AA",
    dark_green: "#00AA00",
    dark_aqua: "#00AAAA",
    dark_red: "#AA0000",
    dark_purple: "#AA00AA",
    gold: "#FFAA00",
    gray: "#AAAAAA",
    dark_gray: "#555555",
    blue: "#5555FF",
    green: "#55FF55",
    aqua: "#55FFFF",
    red: "#FF5555",
    light_purple: "#FF55FF",
    yellow: "#FFFF55",
    white: "#FFFFFF",
  };
  return minecraftColors[colorName];
}

function getColorNameFromIndex(index) {
  const colors = [
    "black",
    "dark_blue",
    "dark_green",
    "dark_aqua",
    "dark_red",
    "dark_purple",
    "gold",
    "gray",
    "dark_gray",
    "blue",
    "green",
    "aqua",
    "red",
    "light_purple",
    "yellow",
    "white",
  ];
  return colors[index];
}

function spawnButtons(element, amount) {
  while (element.firstChild) element.removeChild(element.firstChild);
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let button = document.createElement("button");
    button.innerText = "Dummy Text";
    button.style.marginInline = "auto";
    button.style.width = element.dataset.buttonWidth;
    button.style.height = element.dataset.buttonHeight;
    button.style.flex = "0 0 auto";
    fragment.appendChild(button);
  }
  element.appendChild(fragment);
}

function changeButtons(element) {
  const buttons = element.querySelectorAll("button");
  const width = element.dataset.buttonWidth;
  const height = element.dataset.buttonHeight;
  for (const button of buttons) {
    button.style.width = width;
    button.style.height = height;
  }
}

function getCodeOfElement(zip, element, namespace, code) {
  console.log(element.dataset.fontType);
  const elementName = element.dataset.name;
  let rawCode = {};

  // declaring multiple used variables
  const backgroundImage = element.dataset.backgroundImage ? element.dataset.backgroundImage.slice(5, -2) : "";
  const backgroundHoverImage = element.dataset.backgroundHoverImage ? element.dataset.backgroundHoverImage.slice(5, -2) : "";

  // declaring multiple used json variables
  const width = element.style.width === "auto" ? "default" : element.style.width;
  const height = element.style.height === "auto" ? "20px" : element.style.height;
  const anchor = getAnchorNameFromIndex(element.dataset.anchor) || "center";
  const offsetX = "" + element.dataset.offsetX || "0";
  const offsetY = "" + element.dataset.offsetY || "0";

  switch (elementName) {
    case "Form Title":
    case "Form Content":
    case "Label":
      rawCode = {
        type: "label",
        size: [width, height],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
        text: element.value ? element.value.replace(/\n/g, "\\n") : "",
        text_alignment: element.dataset.textAlignment === 0 ? "left" : element.dataset.textAlignment === 1 ? "center" : "right",
        font_scale_factor: "" + (parseInt(window.getComputedStyle(element).fontSize) - 10) / 10,
        font_type: element.dataset.fontType === "0" ? "MinecraftTen" : "default",
        shadow: "" + element.dataset.shadow,
        color: getColorNameFromIndex(element.dataset.color) || "black",
      };
      break;
    case "Close Button":
      rawCode = {
        anchor_from: anchor,
        anchor_to: anchor,
        size: [width, height],
        offset: [offsetX, offsetY],
      };

      // Save backgroundImage and backgroundHoverImage
      if (backgroundImage !== "" && backgroundHoverImage !== "") {
        uploadImage(backgroundImage, "textures/ui/forms/" + namespace + "/close_button_default", zip);
        uploadImage(backgroundHoverImage, "textures/ui/forms/" + namespace + "/close_button_hover", zip);
        rawCode.controls = [
          {
            "default@common.close_button_panel": {
              $close_button_texture: "textures/ui/forms/" + namespace + "/close_button_default",
            },
          },
          {
            "hover@common.close_button_panel": {
              $close_button_texture: "textures/ui/forms/" + namespace + "/close_button_hover",
            },
          },
          {
            "pressed@common.close_button_panel": {
              $close_button_texture: "textures/ui/forms/" + namespace + "/close_button_hover",
            },
          },
        ];
      }

      // Save nineslice file
      if (element.dataset.nineslice !== "false") {
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/close_button_default");
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/close_button_hover");
      }
      break;
    case "Scroll Panel":
      rawCode = {
        type: "stack_panel",
        size: [width, height],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
        orientation: "vertical",
        controls: [
          {
            "scroll_panel@common.scrolling_panel": {
              $show_background: false,
              $scrolling_content: "",
              $scroll_size: [5, "100% - 4px"],
              $scrolling_pane_size: ["100%", "100%"],
              $scrolling_pane_offset: [0, 0],
              $scroll_bar_right_padding_size: [1, 0],
            },
          },
        ],
      };
      break;
    case "Stack Panel":
    case "Panel":
      rawCode = {
        type: elementName === "Stack Panel" ? "stack_panel" : "panel",
        size: [width, height],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
      };
      if (elementName === "Stack Panel") rawCode.orientation = element.dataset.orientation;
      break;
    case "Image":
      // Save Image
      uploadImage(backgroundImage, "textures/ui/forms/" + namespace + "/" + element.dataset.backgroundImageName, zip);
      // Save Nineslice
      if (element.dataset.nineslice !== "false") {
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/" + element.dataset.backgroundImageName);
      }

      rawCode = {
        type: "image",
        size: [width, height],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
        texture: "textures/ui/forms/" + namespace + "/" + element.dataset.backgroundImageName,
        keep_ratio: element.dataset.keepRatio === "true",
      };
      break;
    case "Button Factory":
      // Depending on the orientation of the button factory we need to set width/height to a 100%c value
      // Factory Generation
      const orientation = element.dataset.orientation;
      rawCode = {
        type: "stack_panel",
        size: [orientation === "horizontal" ? "100%c" : width, orientation === "vertical" ? "100%c" : height],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
        orientation: orientation,
        factory: {
          name: "buttons",
          control_name: "" + namespace + "." + getJsonElementName(element) + (element.dataset.buttonFlag === "" ? "_button" : "_button_panel"),
        },
        collection_name: "form_buttons",
        bindings: [
          {
            binding_name: "#form_button_length",
            binding_name_override: "#collection_length",
          },
        ],
      };
      Object.assign(code, { [getJsonElementName(element)]: rawCode });

      // Panel Generation
      if (element.dataset.buttonFlag !== "") {
        rawCode = {
          type: "panel",
          size: [orientation === "horizontal" ? "100%c" : "100%", orientation === "vertical" ? "100%c" : "100%"],
          $flag: element.dataset.buttonFlag,
          controls: [
            {
              ["" + getJsonElementName(element) + "_button@" + namespace + "." + getJsonElementName(element) + "_button"]: {
                $source_property_flag: "(not (#form_button_text - $flag = #form_button_text))",
              },
            },
          ],
        };
        Object.assign(code, { [getJsonElementName(element) + "_button_panel"]: rawCode });
      }

      // Button Generation
      rawCode = {
        type: "panel",
        size: ["" + element.dataset.buttonWidth, "" + element.dataset.buttonHeight],
        controls: [
          {
            "button@common_buttons.light_text_button": {
              $pressed_button_name: "button." + (element.dataset.ignoreButtonClick === "true" ? "ignore" : "form_button_click"),
              $default_button_texture:
                "textures/ui/" +
                (backgroundImage !== "" ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_default" : "button_borderless_light"),
              $hover_button_texture:
                "textures/ui/" +
                (backgroundHoverImage !== ""
                  ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover"
                  : "button_borderless_lighthover"),
              $pressed_button_texture:
                "textures/ui/" +
                (backgroundHoverImage !== ""
                  ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover"
                  : "button_borderless_lightpressed"),
              $border_visible: element.dataset.borderVisible == "true",
              $button_text: "#form_button_text",
              $button_text_size: ["100%", "default"],
              $button_text_max_size: ["100%", "default"],
              $button_text_binding_type: "collection",
              $button_text_grid_collection_name: "form_buttons",
              $button_text_font_scale_factor: "" + (parseInt(window.getComputedStyle(element).fontSize) - 10) / 10,
              $anchor: getAnchorNameFromIndex(element.dataset.buttonTextAnchor),
              $font_type: element.dataset.fontType === "0" ? "MinecraftTen" : "default",
              bindings: [
                {
                  binding_type: "collection_details",
                  binding_collection_name: "form_buttons",
                },
              ],
            },
          },
        ],
      };
      if (element.dataset.buttonIcon === "true") {
        rawCode.controls.push({
          image: {
            type: "image",
            size: ["" + element.dataset.buttonIconWidth, "" + element.dataset.buttonIconHeight],
            anchor_from: getAnchorNameFromIndex(element.dataset.buttonIconAnchor),
            anchor_to: getAnchorNameFromIndex(element.dataset.buttonIconAnchor),
            layer: 98,
            bindings: [
              {
                binding_name: "#form_button_texture",
                binding_name_override: "#texture",
                binding_type: "collection",
                binding_collection_name: "form_buttons",
              },
              {
                binding_name: "#form_button_texture_file_system",
                binding_name_override: "#texture_file_system",
                binding_type: "collection",
                binding_collection_name: "form_buttons",
              },
              {
                binding_type: "view",
                source_property_name: "(not ((#texture = '') or (#texture = 'loading')))",
                target_property_name: "#visible",
              },
            ],
          },
        });
      }
      if (element.dataset.buttonFlag != "") {
        rawCode["$source_property_flag|default"] = "";
        rawCode.bindings = [
          {
            binding_name: "#form_button_text",
            binding_type: "collection",
            binding_collection_name: "form_buttons",
          },
          {
            binding_type: "view",
            source_property_name: "$source_property_flag",
            target_property_name: "#visible",
          },
        ];
      }
      Object.assign(code, { [getJsonElementName(element) + "_button"]: rawCode });

      // Save backgroundImage and backgroundHoverImage
      if (backgroundImage !== "" && backgroundHoverImage !== "") {
        uploadImage(backgroundImage, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_default", zip);
        uploadImage(backgroundHoverImage, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover", zip);
      }

      // Save Nineslice
      if (element.dataset.nineslice !== "false") {
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_default");
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover");
      }
      return null;
    case "Button Grid":
      // Factory Generation
      rawCode = {
        type: "grid",
        size: [width, "100%c"],
        offset: [offsetX, offsetY],
        anchor_from: anchor,
        anchor_to: anchor,
        grid_item_template: "" + namespace + "." + getJsonElementName(element) + "_button",
        grid_rescaling_type: "horizontal",
        collection_name: "form_buttons",
        bindings: [
          {
            binding_name: "#form_button_length",
            binding_name_override: "#maximum_grid_items",
          },
        ],
      };
      Object.assign(code, { [getJsonElementName(element)]: rawCode });

      // Button Generation
      rawCode = {
        type: "panel",
        size: ["" + element.dataset.buttonWidth, "" + element.dataset.buttonHeight],
        controls: [
          {
            "button@common_buttons.light_text_button": {
              $pressed_button_name: "button." + (element.dataset.ignoreButtonClick === "true" ? "ignore" : "form_button_click"),
              $default_button_texture:
                "textures/ui/" +
                (backgroundImage !== "" ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_default" : "button_borderless_light"),
              $hover_button_texture:
                "textures/ui/" +
                (backgroundHoverImage !== ""
                  ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover"
                  : "button_borderless_lighthover"),
              $pressed_button_texture:
                "textures/ui/" +
                (backgroundHoverImage !== ""
                  ? "forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover"
                  : "button_borderless_lightpressed"),
              $border_visible: element.dataset.borderVisible == "true",
              $button_text: "#form_button_text",
              $button_text_size: ["100%", "default"],
              $button_text_max_size: ["100%", "default"],
              $button_text_binding_type: "collection",
              $button_text_grid_collection_name: "form_buttons",
              $button_text_font_scale_factor: "" + (parseInt(window.getComputedStyle(element).fontSize) - 10) / 10,
              $anchor: getAnchorNameFromIndex(element.dataset.buttonTextAnchor),
              $font_type: element.dataset.fontType === "0" ? "MinecraftTen" : "default",
              bindings: [
                {
                  binding_type: "collection_details",
                  binding_collection_name: "form_buttons",
                },
              ],
            },
          },
        ],
      };
      if (element.dataset.buttonIcon === "true") {
        rawCode.controls.push({
          image: {
            type: "image",
            size: ["" + element.dataset.buttonIconWidth, "" + element.dataset.buttonIconHeight],
            anchor_from: getAnchorNameFromIndex(element.dataset.buttonIconAnchor),
            anchor_to: getAnchorNameFromIndex(element.dataset.buttonIconAnchor),
            layer: 98,
            bindings: [
              {
                binding_name: "#form_button_texture",
                binding_name_override: "#texture",
                binding_type: "collection",
                binding_collection_name: "form_buttons",
              },
              {
                binding_name: "#form_button_texture_file_system",
                binding_name_override: "#texture_file_system",
                binding_type: "collection",
                binding_collection_name: "form_buttons",
              },
              {
                binding_type: "view",
                source_property_name: "(not ((#texture = '') or (#texture = 'loading')))",
                target_property_name: "#visible",
              },
            ],
          },
        });
      }
      Object.assign(code, { [getJsonElementName(element) + "_button"]: rawCode });

      // Save backgroundImage and backgroundHoverImage
      if (backgroundImage !== "" && backgroundHoverImage !== "") {
        uploadImage(backgroundImage, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_default", zip);
        uploadImage(backgroundHoverImage, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover", zip);
      }

      // Save Nineslice
      if (element.dataset.nineslice !== "false") {
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_default");
        saveNineslice(element.dataset.nineslice, zip, "textures/ui/forms/" + namespace + "/" + getJsonElementName(element) + "_button_hover");
      }
      return null;
  }
  return { [getJsonElementName(element)]: rawCode };
}

function saveNineslice(data, zip, path) {
  zip.file(path + ".json", JSON.stringify(JSON.parse(data), null, 4));
}

function getJsonElementName(element) {
  switch (element.dataset.name) {
    case "Close Button":
      return "close_button@common.close_button";
    case "Scroll Panel":
      return element.dataset.jsonName + "@common.scroll_panel";
    default:
      return element.dataset.jsonName;
  }
}

function uploadImage(backgroundImage, path, zip) {
  if (backgroundImage.startsWith("data:image/") || backgroundImage.startsWith("image/png")) backgroundImage = backgroundImage.split(",")[1];
  backgroundImage = atob(backgroundImage);
  const byteArray = new Uint8Array(backgroundImage.length);
  for (let i = 0; i < backgroundImage.length; i++) byteArray[i] = backgroundImage.charCodeAt(i);
  zip.file(path + ".png", byteArray, { binary: true });
}
