
const clearScreen = () =>{
    document.getElementById('output').innerHTML = 0;
    turnOnLight()
}

const removeZero = () =>{
    let value = document.getElementById('output').innerHTML;
    if (value == 0){
        document.getElementById('output').innerHTML = ''
    }
    turnOnLight()
}

const percentage = () =>{
 let value = document.getElementById("output").innerHTML;
      value = value / 100;
      document.getElementById("output").innerHTML = value;
}   

const turnOnLight = () =>{
  let light = document.querySelector('.statusLight');
  light.classList.add('lighton')
}

function forDisplay(value) {
      removeZero()
      document.getElementById("output").innerHTML += value;
 
    }

const solve = () =>{
    removeZero()
    let equation = document.getElementById('output').innerHTML
    let solution = eval(equation)
    document.getElementById('output').innerHTML = solution
}



const moveInput = () =>{
   let input = document.getElementById('output').innerHTML
document.querySelector('.previousInput').innerHTML += input;
value = document.getElementById('output').innerHTML = ''
}


















// let display = document.getElementById('output')
// let active = false

// const turnOff = () => {
//   let time = 0;
//   if (active == true) {
//     let timePassed = setInterval(() => {
//       time++
//       console.log(time)
//       if (time == 3) {
//         removeZero();
//         document.querySelector('.statusLight').classList.remove('lighton')
//         clearInterval(timePassed)
//       }
//     }, 1000)


//   }
// }





// if (display.innerHTML == 0){
//    active = !active
//    turnOff()
// }

