const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
  reset() {
    this.value = 0;
  },
};

//делаем объект счетчика + методы объекта (+1 и -1)

const valueEl = document.querySelector("#value");
// делаем переменную => єлемент отображения значений (табло)

const btnDecrementEl = document.querySelector("[data-action = decrement]");
// делаем переменную => єлемент кнопка +1

const btnIncrementEl = document.querySelector("[data-action = increment]");
// делаем переменную => єлемент кнопка -1
const resetBtn = document.querySelector(".reset");

btnDecrementEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
// при выполнении клика => value в counterValue с помощью метода объекта будет становиться -1
btnIncrementEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
// при выполнении клика => value в counterValue с помощью метода объекта будет становиться +1
resetBtn.addEventListener("click", () => {
  counterValue.reset();
  valueEl.textContent = counterValue.value;
});
// при выполнении клика => value в counterValue с помощью метода объекта будет становиться 0
