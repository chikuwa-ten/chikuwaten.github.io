function resetEditor() {
  // Remove all elements with the class 'editorElement'
  document.querySelectorAll(".editorElement").forEach((element) => element.remove());

  // Reset 'parent' values to the default 'screen' in actionDropdownData
  const parentItem = actionDropdownData.find((item) => item.name === "parent");
  if (parentItem) {
    parentItem.values = ["screen"];
  }
}
