"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#colorbox").style.backgroundColor = "black";
  document.querySelector("#hex").textContent = "HEX: #CCCCCC";

  document.querySelector("#color_wheel").addEventListener("change", changeColor);
}

function changeColor() {
  //const hex = event.target.value;
  document.querySelector("#colorbox").style.backgroundColor = event.target.value;
  document.querySelector("#hex").textContent = "HEX: " + event.target.value.toUpperCase();

  console.log(hex);

  const selectedColor = event.target.value;
  hex2rgb(selectedColor);

  document.querySelector("#rgb").textContent = hex2rgb();
}

function hex2rgb(selectedColor) {
  const hex1 = selectedColor.substring(1, 3);
  const hex2 = selectedColor.substring(3, 5);
  const hex3 = selectedColor.substring(5, 7);
  console.log(hex1, hex2, hex3);

  const r = parseInt(hex1, 16);
  const g = parseInt(hex2, 16);
  const b = parseInt(hex3, 16);
  console.log(r, g, b);

  const rgb = { r, g, b };
  return rgb;
}

function rgb2hsl() {}
