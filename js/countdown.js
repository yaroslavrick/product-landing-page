(function () {
  const startTime = new Date();
  let opacity = 0;
  function countdown() {
    if (opacity < 1) opacity += 0.1;

    document.body.style.backgroundColor = `rgba(0,0,0,${opacity})`;

    // const currentTime = new Date();
    // const pastTimeSecs = (currentTime - startTime) / 1000;
    // if (pastTimeSecs > 5) {
    //   document.body.innerHTML = 'Заплатіть за розробку сайту';
    // }
  }

  // call countdown 1 time in 1 second:
  setInterval(countdown, 1000);
})();
