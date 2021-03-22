
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


function forDisplay(value) {
      removeZero()
      document.getElementById("output").innerHTML += value;
 
    }

const keyboardPress = (event) => {
    removeZero();
    if(event.keyCode === 49 || event.keyCode === 97){
        document.getElementById("output").innerHTML += 1
    }
    if(event.keyCode === 50 || event.keyCode === 98){
        document.getElementById("output").innerHTML += 2
    }
    if(event.keyCode === 51 || event.keyCode === 99){
        document.getElementById("output").innerHTML += 3
    }
    if(event.keyCode === 52 || event.keyCode === 100){
        document.getElementById("output").innerHTML += 4
    }
    if(event.keyCode === 53 || event.keyCode === 101){
        document.getElementById("output").innerHTML += 5
    }
    if(event.keyCode === 54 || event.keyCode === 102){
        document.getElementById("output").innerHTML += 6
    }
    if(event.keyCode === 55 || event.keyCode === 103){
        document.getElementById("output").innerHTML += 7
    }
    if(event.keyCode === 57 || event.keyCode === 105){
        document.getElementById("output").innerHTML += 9
    }
    // if(event.keyCode === 88){
    //     forDisplay('*')
    // }
    // if(event.shiftKey && event.keyCode === 56){    
    //     console.log('*')
    //     forDisplay('*')
    // }
    
    if (event.shiftKey) {
        if (event.keyCode == 56) {
        forDisplay('*')
        } else if (event.keyCode == 187) {
        forDisplay("+");
        }
    }
     
    
    // if (event.keyCode === 56 || event.keyCode === 104) {
    //     if (event.shiftKey) document.getElementById("output").innerHTML += "*";
    //     else{
    //         document.getElementById("output").innerHTML += 8
    //     }
    // }



    if(event.keyCode === 49 || event.keyCode === 107){
        forDisplay('+')
    }
    if(event.keyCode === 189 || event.keyCode === 109){
        forDisplay('-')
    }
    if(event.keyCode === 190 || event.keyCode === 110){
        forDisplay('.')
    }
    if(event.keyCode === 191 || event.keyCode === 111){
        forDisplay('/')
    }
    if(event.keyCode === 16 && event.keyCode === 53){
        forDisplay('%')
    }
    if(event.keyCode === 27 || event.keyCode === 67){
        clearScreen()
    }
    if(event.keyCode === 13 || event.keyCode === 187){
        solve()
    }
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

const turnOnLight = () =>{
  let light = document.querySelector('.statusLight');
  light.classList.add('lighton')
}


document.addEventListener('keydown', keyboardPress)







document.addEventListener('keydown', ()=>{
 if(event.shiftKey && event.keyCode){    
        forDisplay('*')
    }
})







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

