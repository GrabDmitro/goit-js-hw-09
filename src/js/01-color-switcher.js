refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
var intervalId = null;
refs.stop.disabled = true;

refs.start.addEventListener('click', e => {
  refs.body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  refs.start.disabled = true;
  refs.stop.disabled = false;
});

refs.stop.addEventListener('click', e => {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
