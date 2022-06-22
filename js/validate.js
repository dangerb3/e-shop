$(".development-form").validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "Name must be at least 2 letters long",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Phone is required",
      minlength: "The phone number must be 10 digits",
    },
  },
});
$("#dev-number").mask("+7(999)999-99-99", {
  translation: { 9: { pattern: /[0-9]/, optional: false } },
});

const forms = document.querySelectorAll("form");
const inputFile = document.querySelectorAll(".upload-file__input");

/////////// Кнопка «Прикрепить файл» ///////////
inputFile.forEach(function (el) {
  let textSelector = document.querySelector(".upload-file__text");
  let fileList;

  // Событие выбора файла(ов)
  el.addEventListener("change", function (e) {
    // создаём массив файлов
    fileList = [];
    for (let i = 0; i < el.files.length; i++) {
      fileList.push(el.files[i]);
    }

    // вызов функции для каждого файла
    fileList.forEach((file) => {
      uploadFile(file);
    });
  });

  // Проверяем размер файлов и выводим название
  const uploadFile = (file) => {
    // файла <5 Мб
    if (file.size > 5 * 1024 * 1024) {
      alert("Файл должен быть не более 5 МБ.");
      return;
    }

      textSelector.textContent = file.name;
  };
});
