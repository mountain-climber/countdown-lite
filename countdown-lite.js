'use strict';

if (document.querySelector('.countdown')) {

  var endtime = document.querySelector('.countdown').getAttribute('data-time');

  // Convert to standard 09, 08, ... 03 instead of 9, 8, ... 3
  function makeCorrectDate(uncorrectDate) {
    let correctDate = uncorrectDate;
    if (uncorrectDate < 10) {
      correctDate = '0' + uncorrectDate;
    }
    return correctDate;
  }

  // How much time is left
  function getDateRemaining(endtime) {
    // total = the remaining time
    var total = Date.parse(endtime) - Date.now();
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    // return objects
    return {
      'total': total,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }


  // Timer initialization
  function countdownLite() {
    let timer = document.querySelector('.countdown');
    let days = timer.querySelector('.countdown__days'),
      hours = timer.querySelector('.countdown__hours'),
      minutes = timer.querySelector('.countdown__minutes'),
      seconds = timer.querySelector('.countdown__seconds');

    // timer update every 1000 ms
    let timeInterval = setInterval(update, 1000);

    function update() {
      // getDateRemaining function's result
      let total = getDateRemaining(endtime);
      // zero check
      var nowdate = Date.now();
      if (nowdate <= Date.parse(endtime)) {
        var nowdate = Date.now();
        days.textContent = makeCorrectDate(total.days);
        hours.textContent = makeCorrectDate(total.hours);
        minutes.textContent = makeCorrectDate(total.minutes);
        seconds.textContent = makeCorrectDate(total.seconds);
      } else {
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
      }

      // Endings of days
      switch (total.days) {
        case 1:
          correctHours = "Day";
          break;
        default:
          correctHours = "Days";
      }
      document.querySelector('.countdown__days-text').textContent = correctHours;


      // Endings of hours
      switch (total.hours) {
        case 1:
          correctHours = "Hour";
          break;
        default:
          correctHours = "Hours";
      }
      document.querySelector('.countdown__hours-text').textContent = correctHours;

      // Endings of minutes
      switch (total.minutes) {
        case 1:
          correctMinutes = "Minute";
          break;
        default:
          correctMinutes = "Minutes";
      }
      document.querySelector('.countdown__minutes-text').textContent = correctMinutes;

      // Endings of seconds
      switch (total.seconds) {
        case 1:
          correctSeconds = "Second";
          break;
        default:
          correctSeconds = "Seconds";
      }
      document.querySelector('.countdown__seconds-text').textContent = correctSeconds;
    }
  }

}