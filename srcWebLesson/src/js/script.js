$(document).ready(function () {
  // выключение прелоудера
  $('#container').imagesLoaded( function() {
    offPreloader();
  });
  
  // включает запоминенную тему
  if (localStorage.getItem('darkThemeOn') == "true") darkThemeOn();

  //  включает запоминенный размер шрифта
  $('#range_size').attr('value', localStorage.getItem('fontSize'));
  resizeText();

  let colPage = $(".content--text__item").length;
  let stepNamesU = new Array();
  let stepNamesL = new Array();
  
  // создание глав
  createNav()
  
  // текущее положение при загрузке
  markerStep();

  $(window).scroll(function() {
    markerStep();
  });

   // поиск по главам
   $(".search").keyup(function searchStep(){
    let val =   $(".search").val().trim();
    console.log(val);
    if (val != ""){
      for (let i = 0; i < colPage; i++) {
        if (stepNamesU[i].search(val) == -1 && stepNamesL[i].search(val) == -1){
          $(".step__link:eq("+i+")").addClass("step__item--hide");
        }
        else{
          $(".step__link:eq("+i+")").removeClass("step__item--hide");
        }
      }
    }
    else{
      for (let i = 0; i < colPage; i++) {
          $(".step__link:eq("+i+")").removeClass("step__item--hide");
      }
    }
  })

  // переключатель темной темы
  $(".switch").click(function themeSwitchOn() {
    darkThemeOn();
  });

  // вскрыть меню
  $(".btn__hide").click(function menuHide() {
    $(".step").toggleClass("step--hide");
    $(".arrow-scroll").toggleClass("arrow-scroll--hide");

    if ($(".step").hasClass("step--hide")) {
      $(":root").css({
        "--whContainer": "1500px",
      });    
    } else {
      $(":root").css({
        "--whContainer": "1234px",
      });
    }
  });

  // плавный скролл
  $("body").on("click", '[href*="#"]', function lazyScroll (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
    e.preventDefault();
  });


// функции 
function createNav() {
  for (let i = 0; i < colPage; i++) {
    let nameStep = (i+1) + '. ' + $('.content--text__item:eq('+i+') h2').text()

    $(".step__chapter").append($('<a href = "#'+i+'" class = "step__link">'+nameStep+'</a>'));
    //запоминание названии нужно для поиска
    stepNamesU[i] = nameStep;
    stepNamesL[i] = nameStep.toLowerCase();
    console.log(stepNamesU[i]);
  }  
}

function offPreloader(){
  let preloader = $(".holder");
  setTimeout(() => {
    preloader.css("opacity","0");
    // удаление после прогрузки страницы
    setTimeout(() => {
      if($(".holder").css('opacity') == "0"){
        preloader.remove();
      }
    }, 500);
  }, 500);
 }

function darkThemeOn() {
  $(".switch").toggleClass("switch--active");

  if ($(".switch").hasClass("switch--active")) {
    // запоинатор включения темной темы
    localStorage.setItem('darkThemeOn', 'true');
    $(":root").css({
      "--mainColor": "#B9BBBE",
      "--bgMain": "#36393F",
      "--bgMenu": "#2F3136",
      "--bgTopPanel": "#202225",
      // "--extraColor": "#EB850E",
      "--colorShadow": "#23252c",
    });
  } else {
    // запоинатор выключения темной темы
    localStorage.setItem('darkThemeOn', 'false');
    $(":root").css({
      "--mainColor": "#202225",
      "--bgMain": "#ebebeb",
      "--bgMenu": " #d2d2d2",
      "--bgTopPanel": "#b5b5b5",
      // "--extraColor": "#AF0000",
      "--colorShadow": "#606265",
    });
  }
}

function markerStep() {
  // вперед/назад кнопки
  let prev = $(".prev");
  let next = $(".next");

  for (let i = 0; i < colPage; i++) {
    if ($(window).scrollTop() + $(".pop-box").height() >= $(".content__title:eq("+i+")").offset().top){
      //  $(".top-panel__title").text(namePage[i]);

       $(".step__link").removeClass("step__link--focus");
       $('.step__link:eq('+i+')').addClass("step__link--focus");
      // вперед/назад кнопки
        prev.attr("href","#"+(i-1))
        next.attr("href","#"+(i+1))
    }    
  }
}
// end
});

function resizeText(){
  let sizeText = (document).getElementById('range_size').value;
  $('.content__text').css('font-size', sizeText+'px');
  localStorage.setItem('fontSize', sizeText);
} 
