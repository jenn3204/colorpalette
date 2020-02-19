"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#color_wheel").addEventListener("change", changeColor);
}

function changeColor() {
  let selectedColor = event.target.value;

  document.querySelector("#colorbox").style.backgroundColor = selectedColor;
  document.querySelector("#colorbox1").style.backgroundColor = selectedColor;
  document.querySelector("#colorbox2").style.backgroundColor = selectedColor;
  document.querySelector("#colorbox3").style.backgroundColor = selectedColor;
  document.querySelector("#colorbox4").style.backgroundColor = selectedColor;

  document.querySelector("#hex").value = selectedColor.toUpperCase();
  document.querySelector("#hex1").value = selectedColor.toUpperCase();
  document.querySelector("#hex2").value = selectedColor.toUpperCase();
  document.querySelector("#hex3").value = selectedColor.toUpperCase();
  document.querySelector("#hex4").value = selectedColor.toUpperCase();

  document.querySelector("#rgb").value = hex2rgb();
  document.querySelector("#rgb1").value = hex2rgb();
  document.querySelector("#rgb2").value = hex2rgb();
  document.querySelector("#rgb3").value = hex2rgb();
  document.querySelector("#rgb4").value = hex2rgb();

  document.querySelector("#hsl").value = rgb2hsl();
  document.querySelector("#hsl1").value = rgb2hsl();
  document.querySelector("#hsl2").value = rgb2hsl();
  document.querySelector("#hsl3").value = rgb2hsl();
  document.querySelector("#hsl4").value = rgb2hsl();

  // document.querySelector("#analogues").addEventListener("change", anaPicked);
  if (document.querySelector("#analogues").checked == true) {
    anaPicked();
  }

  //document.querySelector("#analogues").addEventListener("click", anaPicked);

  console.log(hex);
}

function hex2rgb() {
  let selectedColor = event.target.value;

  const hex1 = selectedColor.substring(1, 3);
  const hex2 = selectedColor.substring(3, 5);
  const hex3 = selectedColor.substring(5, 7);
  console.log(hex1, hex2, hex3);

  const r = parseInt(hex1, 16);
  const g = parseInt(hex2, 16);
  const b = parseInt(hex3, 16);
  console.log(r, g, b);

  return `${r} ${g} ${b}`;
}

function rgb2hsl() {
  let rgbColors = hex2rgb();
  const firstSpace = rgbColors.indexOf(" ");
  const lastSpace = rgbColors.lastIndexOf(" ");

  let r = rgbColors.substring(0, firstSpace);
  let g = rgbColors.substring(firstSpace, lastSpace);
  let b = rgbColors.substring(lastSpace, rgbColors.length);

  console.log("hej" + r, g, b);

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  s *= 100;
  l *= 100;

  h = Math.floor(h);
  s = Math.floor(s);
  l = Math.floor(l);
  console.log(h, s, l);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function hslNumbers() {
  let hsl = rgb2hsl();
}

function anaPicked() {
  console.log("hej med dig");
  let selectedColor = event.target.value;
  console.log(selectedColor);
  console.log(rgb2hsl());

  // selectedHSL = rgb2hsl();
  // console.log("hej " + selectedHSL);
  // h = selectedHSL[5];

  document.querySelector("#colorbox1").style.backgroundColor = selectedColor;
  document.querySelector("#colorbox2").style.backgroundColor = rgb2hsl();
}
