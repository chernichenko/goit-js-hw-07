function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // очищення значення інпуту після створення
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // очищаємо попередні елементи перед створенням нових
  const boxes = [];
  let size = 30; // початковий розмір для першого div

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '10px';
    boxes.push(box);
    size += 10; // збільшуємо розмір кожного наступного div на 10px
  }

  boxesContainer.append(...boxes); // додавання всіх елементів одним разом
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // очищення контейнера від елементів
}