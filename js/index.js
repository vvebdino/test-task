// select-menu и scrollbar

$(function() {
  $('.personal-info__form__select').selectmenu();
});

$( ".personal-info__form__select" ).selectmenu({
  open: function( event, ui ) {}
});

$( ".personal-info__form__select" ).selectmenu({
  close: function( event, ui ) {}
});
$( ".personal-info__form__select" ).on( "selectmenuopen", function( event, ui ) {
  $('.ui-selectmenu-menu').customScrollbar({
      skin: "selected-skin", 
      hScroll: false
    });
    $( ".personal-info__form__select" ).selectmenu("refresh");
  $(".ui-button .ui-icon").css({
    '-webkit-transform': 'rotate(180deg)',
    '-moz-transform': 'rotate(180deg)',
    '-ms-transform': 'rotate(180deg)',
    '-o-transform': 'rotate(180deg)',
    'transform': 'rotate(180deg)'
  });
});
$( ".personal-info__form__select" ).on( "selectmenuclose", function( event, ui ) {
  $(".ui-button .ui-icon").css({
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    '-ms-transform': 'rotate(0deg)',
    '-o-transform': 'rotate(0deg)',
    'transform': 'rotate(0deg)'
  })
});

// проверка браузера для слайдера

const browserCheck = function(){
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
      return 'Opera';
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
      return 'Chrome';
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
      return 'Safari';
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
      return 'Firefox';
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      return 'IE';
    }  
    else 
    {
      return 'unknown';
    }
};

// слайдер js

let sheet = document.createElement('style');
let slider = document.querySelector(".js__form__scale__input");
let sliderText = document.querySelectorAll(".js__form__scale__list__item");

const ticks = function() {
  if(slider.value <=12.5){
    slider.value = 0;

    if(browserCheck() == 'Chrome'){
    sheet.innerHTML = `
    .js__form__scale__input::-webkit-slider-runnable-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), rgb(232, 232, 232) 100%; }
    .js__form__scale__input::-webkit-slider-thumb { transform: translateX(-12px); }`;
    document.body.appendChild(sheet);
    } 
    else if(browserCheck() == 'Firefox'){ 
    sheet.innerHTML = `
    .js__form__scale__input::-moz-range-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), rgb(232, 232, 232) 100%; }
    .js__form__scale__input::-moz-range-thumb { -moz-transform: translate(-12px, 25px); }`;
    document.body.appendChild(sheet);
    }
    
        
  }
  else if(slider.value >12.5 && slider.value <=37.5){
    slider.value = 25;
    if(browserCheck() == 'Chrome'){
      sheet.innerHTML = `
      .js__form__scale__input::-webkit-slider-runnable-track {background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(178, 160, 223) 25%, rgb(232, 232, 232) 25%, rgb(232, 232, 232) 100%); }
      .js__form__scale__input::-webkit-slider-thumb {transform: translateX(-6px); }`;
      document.body.appendChild(sheet);
    }
    else if(browserCheck() == 'Firefox'){ 
      sheet.innerHTML = `
      .js__form__scale__input::-moz-range-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(178, 160, 223) 25%, rgb(232, 232, 232) 25%, rgb(232, 232, 232) 100%); }
      .js__form__scale__input::-moz-range-thumb { -moz-transform: translate(-6px, 25px); }`;
      document.body.appendChild(sheet);
    }
    
  }
  else if(slider.value >37.5 && slider.value <75){
    slider.value = 50;
    if(browserCheck() == 'Chrome'){
      sheet.innerHTML = `
      .js__form__scale__input::-webkit-slider-runnable-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(136, 134, 195) 50%, rgb(232, 232, 232) 50%, rgb(232, 232, 232) 100%); }
      .js__form__scale__input::-webkit-slider-thumb { transform: translateX(0px); }`;
      document.body.appendChild(sheet);
    }
    else if(browserCheck() == 'Firefox'){ 
    sheet.innerHTML = `
      .js__form__scale__input::-moz-range-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(136, 134, 195) 50%, rgb(232, 232, 232) 50%, rgb(232, 232, 232) 100%); }
      .js__form__scale__input::-moz-range-thumb { -moz-transform: translate(0px, 25px); }`;
      document.body.appendChild(sheet);
    }
  }
  else if(slider.value>=75 && slider.value <=100){
    slider.value = 100;
    if(browserCheck() == 'Chrome'){
      sheet.innerHTML = `
      .js__form__scale__input::-webkit-slider-runnable-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(67, 89, 147) 100%); }
      .js__form__scale__input::-webkit-slider-thumb { transform: translateX(12px); }`;
      document.body.appendChild(sheet);
    }
    else if(browserCheck() == 'Firefox'){ 
      sheet.innerHTML = `
      .js__form__scale__input::-moz-range-track { background: linear-gradient(-0.70deg, transparent 14px, white 63%), linear-gradient(to right, rgb(204, 177, 241) 0%, rgb(67, 89, 147) 100%); }
      .js__form__scale__input::-moz-range-thumb { -moz-transform: translate(12px, 25px); }`;
      document.body.appendChild(sheet);
    }
  }
}
slider.oninput = ticks;
ticks();
sliderText.forEach(function(element){
  element.addEventListener("click", () => {
    slider.value = element.value*25;
    ticks();
  })
})

// анимация текста в инпутах

let inputs = document.querySelectorAll('.personal-info__form__field');
let placeholders = document.querySelectorAll('.placeholder');

inputs.forEach(function(element, i){
  element.addEventListener('focusin', () => {
    placeholders[i].style.setProperty("--trans","scale(0.59) translateY(-24px)")
  })
  element.addEventListener('focusout', () => {
    if(!inputs[i].value){
      placeholders[i].style.setProperty("--trans","scale(1) translateY(0px)")
    }
  })
});

function checkInputs(){
  inputs.forEach(function(element, i){
    if(inputs[i].value)
    {
      placeholders[i].style.setProperty("--trans","scale(0.59) translateY(-24px)")
    }
    else {
      placeholders[i].style.setProperty("--trans","scale(1) translateY(0px)")
    }
  })
};




// заполнение анкеты

inputs[0].value = 'Славич Ева Сергеевна';
$('.personal-info__form__select').val('1999').selectmenu("refresh");
inputs[1].value = 'г. Феодосия';
inputs[2].value = 'ewa.slx';
inputs[3].value = 'ewa.slx@yandex.ru';
document.querySelector('.about__form__field').value = "Понравилась условиями работы. От вашей компании хотелось бы получить опыт работы как в команде, так и вообще.";

checkInputs();

// дебаг selectmenu

$( ".personal-info__form__select" ).selectmenu( "open" );
$( ".personal-info__form__select" ).selectmenu( "close" );

// бургер-меню 

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

let headerLinks = document.querySelectorAll('.header__nav__list__link');
const headerNav = document.querySelector('.header__nav');
const navToggle = document.querySelector('.nav-toggle');

headerLinks.forEach(function (link) {
  link.addEventListener('click', () => {
    headerNav.classList.remove('active');
    navToggle.classList.remove('active');
  })
})
