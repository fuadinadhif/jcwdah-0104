const eraseBtnTitle = document.querySelector("#erase-title");
const enlargeBtnParagraph = document.querySelector("#enlarge-paragraph");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

eraseBtnTitle.addEventListener("click", () => {
  title.style.display = "none";
});

let fontSize = 16;
enlargeBtnParagraph.addEventListener("click", () => {
  fontSize = fontSize + 10;
  paragraph.style.fontSize = `${fontSize}px`;
});
