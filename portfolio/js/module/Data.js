let data = [
  [
    2019,
    [
      {
        name: "Верстка landingPage",
        menuName: "LogoType",
        tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "scss"],
        text: "Адаптивная верстка PSD шаблона. Верстка выполнена по методологии БЭМ. Проект написан с применением jQuary. Была использована библиотека Slick.js для создания слайдера. Подключены иконки библиотеки Font Awesome.",
        imgSrc: ["img/1.jpg", "img/2.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/landingPage1",
        showProject: "https://sarylov.github.io/landingPage1/",
      },
      {
        name: "Верстка GoSurf",
        menuName: "GoSurf",
        tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "scss"],
        text: "Верстка с применением SVG анимации и абсолютно позиционированных элементов",
        imgSrc: ["img/7.jpg", "img/8.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/landingPage2",
        showProject: "https://sarylov.github.io/landingPage2/",
      },
    ],
  ],
  [
    2020,
    [
      {
        name: "Приложение для тестирования",
        menuName: "Tester",
        tools: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        text: "Пример коммерческого заказа. Содержимое страниц создаётся с помощью javaScript. Есть возможность добавлять тесты разных типов. Например, если необходимо выяснить темперамент, используется система, позволяющая в зависимости от ответа добавить балл определенному темпераменту, в итоге результатом будет тот вариант, который набрал больше всего баллов. Так же есть возможность добавить стандартные тесты, где за правильный вариант ответа дается балл, по итогу будет проанализировано на сколько хорошо был сдан тест. Был защищен в качестве дипломного проекта.",
        imgSrc: ["img/5.jpg", "img/6.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/tester",
        showProject: "https://sarylov.github.io/tester/",
      },
      {
        name: "Веб-приложение для изучения информатики ",
        menuName: "Информатика",
        tools: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        text: "Еще один пример коммерческого заказа. Проект подразумевался как учебно-методический комплекс для изучения информатики. Необходимо было вывести pdf книгу и сделать к ней навигацию. Pdf подгружался через гугл диск со встоенным ридером. Веб приложение адаптивно для смартфонов и планшетов. Был защищен в качестве дипломного проекта.",
        imgSrc: ["img/9.jpg", "img/10.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/Informatics",
        showProject: "https://sarylov.github.io/Informatics/",
      },
      {
        name: "Веб-приложение webLesson 1.0",
        menuName: "WebLesson 1.0",
        tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Gulp", "scss"],
        text: "Учебно-методический комплекс для изучения WordPress. Создан в качестве практического задания. Был применен Gulp для конечной сборки проекта. Оптимизированы все картинки. Файлы js и css объединены и минифицированы.",
        imgSrc: ["img/3.jpg", "img/4.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/srcWebLesson",
        showProject: "https://sarylov.github.io/srcWebLesson/",
      },
    ],
  ],
  [
    2021,
    [
      {
        name: "webLesson 2.0",
        menuName: "WebLesson app",
        tools: ["JavaScript", "Node.js", "React", "Redux", "Electron"],
        text: "Desktop приложение для изучения основ html, css, js. Приложение выполнено с помощью стандартного пакета create-react-app с использованием библиотеки redux. С помощью фреймворка Electron был скомпилирован как полноценное приложение, которое можно открыть через exe файл. Приложение было защищено в качестве дипломного проекта.",
        imgSrc: ["img/11.jpg", "img/12.jpg"],
        showCode:
          "https://github.com/Sarylov/sarylov.github.io/tree/master/srcWebLesson",
        showProject:
          "https://drive.google.com/file/d/1x8moGho0wuHxPhKeLq9Fm0cn4eZvOxAn/view?usp=sharing",
      },
    ],
  ],
  [
    2022,
    [
      {
        name: "Журнал пропусков",
        menuName: "Jurnal",
        tools: [
          "TypeScript",
          "Node.js",
          "Next.js",
          "MongoDB",
          "Express",
          "Heroku",
          "Vercel",
        ],
        text: "Коммерческий проект от ВУЗ а. Веб приложение для старост. Проект подразумевает: регистрацию старост, ввод группы, создание и удаление записей с отсутствующими студентами. Клиентская часть приложения написана на фреймворке Next.JS. Впервые был применен язык TypeScript. API был создан с помощью библиотеки express и подключается к документной базе данных mongoDB.",
        imgSrc: ["img/15.jpg", "img/16.jpg"],
        // showCode:
        //   "https://github.com/Sarylov/sarylov.github.io/tree/master/srcWebLesson",
        // showProject:
        //   "https://drive.google.com/file/d/1x8moGho0wuHxPhKeLq9Fm0cn4eZvOxAn/view?usp=sharing",
      },
      {
        name: "Блокнот",
        menuName: "Notepad",
        tools: [
          "JavaScript",
          "Node.js",
          "Next.js",
          "PostgreSQL",
          "Heroku",
          "Vercel",
        ],
        text: "Приложение разработано в качестве практического задания. В приложении можно создавать, удалять, редактировать записи. В первые была использована реляционная база данных PostgreSQl. Клиентская часть выполнена на Next.JS. Api написано с применение библиотеки Express. Приложение реализует в себе полный CRUD цикл.",
        imgSrc: ["img/13.jpg", "img/14.jpg"],
        showCode: "https://github.com/Sarylov/nodepad",
        showProject: "https://nodepad.vercel.app/",
      },
    ],
  ],
];

export default data;
