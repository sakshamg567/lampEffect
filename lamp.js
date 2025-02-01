const colorInput = document.getElementById("color-selector");
colorInput.addEventListener("input", () => {
   const colorvalue = colorInput.value;
   document.documentElement.style.setProperty("--light-color", colorvalue)
})