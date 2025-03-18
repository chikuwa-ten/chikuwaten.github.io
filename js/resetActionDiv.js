document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".actions").contains(e.target)) resetActions();
  });
});

function saveNamespace(event) {
  document.querySelector("#editor").dataset.namespace = event.target.value;
}

function resetActions() {
  namespace = document.querySelector("#editor").dataset.namespace || "testForm";
  let actionsDiv = document.querySelector(".actions");

  actionsDiv.innerHTML = `
      <p id="namespace_header">Namespace:</p>
      <input id="namespace" placeholder="Namespace" value="${namespace}" />
      <button onclick="resetEditor()" id="reset">Reset</button>
      <button onclick="generateCode()" id="generateCode">Generate Code</button>
    `;
  actionsDiv.style.overflowY = "hidden";
  actionsDiv.style.justifyContent = "center";
}
