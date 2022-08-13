const refs = {
  form: document.querySelector(".login-form"),
  inpuEmail: document.querySelector('[name="email"]'),
  inputPassword: document.querySelector('[name="email"]'),
  button: document.querySelector('[type="submit"]'),
  cachingData(event) {
    event.preventDefault();
    //При отправке формы страница не делает перезагрузку.
    const formData = new FormData(event.currentTarget);
    // собирает всю дату из полей и под капотом делает огромный итератор который жанглирует этими данными (интерфейс для данных которе там лежат)
    const saveData = {};
    // делаем переменную с пустым объектом для данных которые получим от пользователя
    formData.forEach((password, email) => {
      saveData[email] = password;
      //  собираем данные в объект
    });
    if (
      event.currentTarget.elements.email.value === "" ||
      //если поле с почтой пустое или
      event.currentTarget.elements.password.value === ""
      //если поле с паролем пустое
    ) {
      return alert("Внимание! Все поля должны быть заполнены =)");
      // выводим строку о проблеме
    }
    console.log("Мы собрали данные ==>", saveData);
    // выводим собранные данные
    event.currentTarget.reset();
    //делаем сброс
  },
};

refs.form.addEventListener("submit", refs.cachingData);
// делаем <form class="login-form"> слушателем событий и при отправке формы (действие "submit")  + выполняем колбек функцию из объекта
