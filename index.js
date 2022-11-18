const totalDisplay = document.querySelector('.gas-total');

const KiloDisplay = document.querySelector('.kilo');
const literConsum =document.querySelector('.liter-consum');

const buttonOne = document.querySelector('.btn1');
const buttonTwo = document.querySelector('.btn1');

const inputLiter =document.querySelector('.input-liter');
const inputSpeed = document.querySelector('.input-speed');
const formOne = document.querySelector('.formone');

const feedOne = document.querySelector('.feedone');
const feedTwo = document.querySelector('.feedTwo');
const days = document.querySelector('.days')


formOne.addEventListener('submit',(e) =>{
  e.preventDefault();
console.log(inputLiter.value);
const formTestOne = inputLiter.value;
const formTestTwo = inputSpeed.value;
let hasError = false;

if(!formTestOne.match(/^\d+/)) {
  feedOne.textContent = 'Please only enter numeric characters(from 0-9)';
  hasError = true;
}
  

 
if (!formTestTwo.match(/^\d+/)) {
   feedTwo.textContent = 'Please only enter numeric characters(from 0-9)';
   hasError = true;
   
}
if(hasError) return;
  


totalDisplay.innerHTML = `<h1 class="gas-total">${inputLiter.value}liter(s)</h1>`;

KiloDisplay.innerHTML = ` <h2 class="kilo">${inputSpeed.value} km</h2>`;
const result = inputLiter.value / inputSpeed.value;
const kilo = inputLiter.value;
const total = inputSpeed.value;

literConsum.innerHTML = `<h2 class="liter-consum">${result} km</h2>`;
const totalS = [{result:result,kilo:kilo,totalgas: total}]
console.log(totalS)
                 
localStorage.setItem('All', JSON.stringify(totalS));

const retrieved = localStorage.getItem('All');

if (retrieved.length > 0) {
   localStorage.setItem('All', JSON.stringify(totalS));
}else{
  localStorage.setItem('All', JSON.stringify(totalS));
}
console.log(typeof retrieved)
//localStorage.setItem("result",'');
const converted = JSON.parse(retrieved)
days.innerHTML = `<div>${retrieved}</div>`

});

//var retrievedObject = localStorage.getItem('testObject');
// formOne.addEventListener('submit',(e) =>{
//   e.preventDefault();
 
// })

// formTwo.addEventListener('submit',(e) =>{inputSpeed.value
//     e.preventDefault();
//   console.log(inputSpeed.value);
  
//   });



//   const killoCalc = function(calc) {
//     let liter = (inputSpeed.value/inputLiter.value);
//     let kilo = 100;
//     console.log(kilo *calc**liter)
//     return kilo *calc**liter;
//   }


 
// 