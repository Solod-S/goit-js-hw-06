const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const valueEl = document.querySelector("#value");

const btnDecrementEl = document.querySelector("[data-action = decrement]");

const btnIncrementEl = document.querySelector("[data-action = increment]");
const resetBtn = document.querySelector(".reset");

btnDecrementEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

btnIncrementEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});

resetBtn.addEventListener("click", () => {
  counterValue.value = 0;
  valueEl.textContent = counterValue.value;
});
