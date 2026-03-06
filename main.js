const generateBtn = document.getElementById('generate-btn');
const container = document.getElementById('numbers-container');
const themeBtn = document.getElementById('theme-btn');

// Theme Logic
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Lotto Logic
function getRangeClass(num) {
  if (num <= 10) return 'range-1';
  if (num <= 20) return 'range-2';
  if (num <= 30) return 'range-3';
  if (num <= 40) return 'range-4';
  return 'range-5';
}

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const r = Math.floor(Math.random() * 45) + 1;
    if (numbers.indexOf(r) === -1) numbers.push(r);
  }
  return numbers.sort((a, b) => a - b);
}

async function displayNumbers() {
  generateBtn.disabled = true;
  container.innerHTML = '';
  
  const numbers = generateLottoNumbers();
  
  for (let i = 0; i < numbers.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const ball = document.createElement('div');
    ball.className = `ball ${getRangeClass(numbers[i])}`;
    ball.textContent = numbers[i];
    container.appendChild(ball);
  }
  
  generateBtn.disabled = false;
}

generateBtn.addEventListener('click', displayNumbers);

// Initialize
initTheme();