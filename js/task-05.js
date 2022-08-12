const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
  onInputWhenInput(event) {
    refs.output.textContent = event.currentTarget.value;
    // то что вбиваю в инпут (ключ - input), будет в спане (ключ - output)
    if (refs.output.textContent === "") {
      // если в output пустая строка
      refs.output.textContent = "Anonymous";
      // пустая строка будет = Anonymous
    }
  },
};
// делаю объект «Объект ссылок»
// в нем делаю ключи = элементы
// делаю метод объекта

refs.input.addEventListener("input", refs.onInputWhenInput);
// делаем input слушателем события и при вводе (действие "input")  + выполняем колбек функцию из обьекта
