const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyEl: document.querySelector("body"),
    startBtnEl: document.querySelector("button[data-action='start']"),
    stopBtnEl: document.querySelector("button[data-action='stop']"),
};

let intervalId = null;
let isStarted = false;

refs.startBtnEl.addEventListener('click', () => {

    if (isStarted) {
        return;
    }

    switchColor(colors);
    isStarted = true;
    refs.startBtnEl.setAttribute("disabled", "disabled"); // Деактивация кнопки через атрибут "disabled" (необязательно)
});

refs.stopBtnEl.addEventListener("click", () => {
    isStarted = false;
    refs.startBtnEl.removeAttribute("disabled");
    clearInterval(intervalId);
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColor(colorSet) {
    intervalId = setInterval(() => {
        const index = randomIntegerFromInterval(0, colorSet.length -1);
        refs.bodyEl.style.backgroundColor = colorSet[index];
    }, 1000);
}



