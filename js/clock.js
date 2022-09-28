// querySelector - знаходить на сторінці певний елемент, який відповідає певному селектору джава скріпта
// воно тепер знайде перший елемент, який має клас clock і запише її у змінну clockContainer:
// querySelectorAll - знайде всі елементи і запише їх у масив.

// IIFE:
// Тепер змінна clockContainer і функція updateClock() - видимі за межами цієї "коробчки" (IIFE)
(function () {
  const clockContainer = document.querySelector('.clock');

  function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('en-US', {
      hour12: false,
    });
  }

  setInterval(updateClock, 1000);
})();
