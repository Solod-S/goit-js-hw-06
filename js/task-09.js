const refs = {
  body: document.querySelector("body"),
  display: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  changeColorFn() {
    refs.body.style.backgroundColor = refs.getRandomHexColor();
    refs.display.textContent = refs.body.style.backgroundColor;
  },
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
};

// refs.body.style.backgroundColor = refs.getRandomHexColor();
refs.changeColorBtn.addEventListener("click", refs.changeColorFn);
