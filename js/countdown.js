let countDownDate = new Date("Feb 28, 2022 14:55:00").getTime();

let x = setInterval(function () {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = (days > 0 ? days + " Jours " : "") + (hours > 0 ? hours + ":" : "") + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ";
  if (minutes == 0 && hours == 0) {
    document.getElementById("demo").style.color = "red";
  }

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    window.location.href = "https://smartgov.ga"
  }
}, 1000);