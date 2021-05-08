const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  body: document.body,
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};
const INTERVAL_TIME = 1000;
let handleInterval = null;
let intervalIsActive = false;

refs.start.addEventListener("click", onButtonStartClick);
refs.stop.addEventListener("click", onButtonStopClick);

function onButtonStartClick() {
  if (intervalIsActive) {
    return;
  }
  intervalIsActive = true;
  handleInterval = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[index];
  }, INTERVAL_TIME);
}
function onButtonStopClick() {
  intervalIsActive = false;
  clearInterval(handleInterval);
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
