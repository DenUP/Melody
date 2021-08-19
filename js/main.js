$(document).ready(function () { /* функция готовности DOM */
  var currentFloor = 2; /* переменная, где хранится текущий этаж */
  var floorPath = $(".home-image path"); /* каждый  Отдельный этаж в SVG */
  var counterUp = $(".counter-arrow-up") /*   КнопкаУвеличение этажа*/
var counterDown = $(".counter-arrow-down") /*   Кнопка Уменьшение этажа*/
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor") /* Удаляем активный класс у этажей */
    currentFloor = $(this).attr("data-floor") /* Получаем значение текущего этажа */
    $(".counter").text(currentFloor); /* записываем значение этажа в счетчик */
});

/* отслеживаем клик по кнопке вверх */
counterUp.on("click", function() {
  /* проверяем значение у этажа, оно не должно быть больше 18  */
if (currentFloor <18) { 
   currentFloor++; /* Прибавляем один этаж */
  usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
  useGrouping: false}); /* форматируем переменную этажа, чтобы было 01 а не 1 */

  $(".counter").text(usCurrentFloor); /* Записываем значение этажа в счетчик справа */
  floorPath.removeClass("current-floor") /* удаляем активный класс у этажа */
   $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсвечиваем  текущий этаж */

}
  });

  /* отслеживаем клик по кнопке вниз */
  if (currentFloor >2) 
  /* проверяем значение у этажа, оно не должно быть меньше 18  */
  counterDown.on("click", function() {
 {  currentFloor--; /* Отнимаем один этаж */
  
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
  useGrouping: false});
  $(".counter").text(usCurrentFloor);  /* записываем значение этажа в счетчик */
  floorPath.removeClass("current-floor") /* удаляем активный класс у этажа */
   $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсвечиваем  текущий этаж */

    }
  })
});
