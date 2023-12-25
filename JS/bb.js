let logo = document.getElementById('logo');

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

function changeColorPeriodically() {

  setInterval(function () {
    let randomColor = getRandomColor();
    logo.style.color = randomColor;
  }, 1000);
}


changeColorPeriodically();

