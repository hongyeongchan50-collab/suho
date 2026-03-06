const generateButton = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');

generateButton.addEventListener('click', () => {
  numbersDiv.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  for (const number of numbers) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = number;
    numbersDiv.appendChild(numberDiv);
  }
});