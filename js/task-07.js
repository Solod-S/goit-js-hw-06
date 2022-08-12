const refs = {
  sizeControl: document.querySelector("#font-size-control"),
  textDisplay: document.querySelector("#text"),
  changeSize(event) {
    console.log("🚀event", event.target.value);
    refs.textDisplay.style.fontSize = `${event.target.value}px`;
  },
  //функция берет значения value ползунка (event.target.value) и передает их инлайн css <span id="text">Abracadabra!</span> (refs.textDisplay.style.fontSize)
};
// делаю объект «Объект ссылок»
// в нем делаю ключи = элементы
// делаю метод объекта

refs.sizeControl.addEventListener("input", refs.changeSize);
// делаем <input id="font-size-control" type="range" min="16" max="96" /> слушателем событий и при сдвиге (действие "input")  + выполняем колбек функцию из обьекта
