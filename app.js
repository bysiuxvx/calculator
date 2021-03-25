let output = document.getElementById('output');
light = document.querySelector('.statusLight');

const clearScreen = () => {
  document.getElementById('output').innerHTML = 0;
  turnOnLight();
};

const removeZero = () => {
  let value = document.getElementById('output').innerHTML;
  if (value == 0) {
    document.getElementById('output').innerHTML = '';
  }
  turnOnLight();
};

const percentage = () => {
  let value = document.getElementById('output').innerHTML;
  value = value / 100;
  document.getElementById('output').innerHTML = value;
};

function CheckLastChar() {
  if (['×', '+', '-', '÷', '%', '.'].includes(output.innerText.slice(-1))) {
    output.innerText = output.innerText.slice(0, -1);
  }
}

function forDisplay(value) {
  removeZero();
  document.getElementById('output').innerHTML += value;
}

const keyboardPress = (event) => {
  removeZero();
  key = String.fromCharCode(event.keyCode);
  if (event.shiftKey) {
    if (key == '8') {
      CheckLastChar();
      output.innerText += '×';
    } else if (key == '6') {
      CheckLastChar();
      output.innerText += '^';
    } else if (event.keyCode == 187) {
      CheckLastChar();
      output.innerText += '+';
    }
  } else {
    if ([...Array(10).keys()].map((el) => el.toString()).includes(key)) {
      output.innerText += key;
    } else if (event.keyCode == 106) {
      CheckLastChar();
      output.innerText += '×';
    } else if (event.keyCode == 107) {
      CheckLastChar();
      output.innerText += '+';
    } else if (event.keyCode == 189 || event.keyCode == 109) {
      CheckLastChar();
      output.innerText += '-';
    } else if (event.keyCode == 191 || event.keyCode == 111) {
      CheckLastChar();
      event.preventDefault();
      output.innerText += '÷';
    } else if (event.keyCode == 190) {
      CheckLastChar();
      output.innerText += '.';
    } else if (event.keyCode == 8) {
      // backspace
      output.innerText = output.innerText.slice(0, -1);
    } else if (event.keyCode == 13) {
      // enter
      solve();
    } else if (event.keyCode == 187) {
      // equal sign
      solve();
    }
  }
};

const solve = () => {
  removeZero();
  stringToEvaluate = output.innerText
    .replace('×', '*')
    .replace('÷', '/')
    .replace('^', '**');
  let equation = stringToEvaluate;
  let solution = eval(equation);
  output.innerHTML = solution;
};

const moveInput = () => {
  let input = document.getElementById('output').innerHTML;
  document.querySelector('.previousInput').innerHTML += input;
  value = document.getElementById('output').innerHTML = '';
};

const turnOnLight = () => {
  let light = document.querySelector('.statusLight');
  light.classList.add('lighton');
};

const linkNewTab = () => {
  window.open('https://github.com/bysiuxvx/calculator.git', '_blank');
};

document.getElementById('github').addEventListener('click', linkNewTab);

// if(output.innerHTML === 0){
//   let time = 0
//   let intervalCounter = setInterval(() =>{
//     time++
//     console.log(time)
//     if(time == 3){
//     output.innerHTML = ''
//     light.classList.remove('lighton')
//     clearInterval(intervalCounter)
//     }
//   } , 1000)
// }

document.addEventListener('keydown', keyboardPress);
