import './styles.scss';

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
    stopBtnEl: document.querySelector("button[data-action='stop']")
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};