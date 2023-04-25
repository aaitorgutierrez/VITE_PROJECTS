import './style.css'

const COLOR_PALETTE = {
  "#544B3D": "walnutBrown",
  "#4E6E58": "hookerGreen",
  "#4C8577": "viridian",
  "#A6ECE0": "tiffanyBlue",
  "#7ADFBB": "aquamarine",
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
    
  })
} 
addOptionsToColorPicker()

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();



