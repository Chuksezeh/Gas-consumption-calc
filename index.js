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
const totalS = {result:result,kilo:kilo,totalgas: total}

                 
// localStorage.setItem('All', JSON.stringify(totalS));
// console.log(totalS)
let retrieved = localStorage.getItem('All');
console.log('retrieved->>', retrieved);
// retrieved = retrieved ? retrieved.split(',') : [];
const oldData = JSON.parse(retrieved);
console.log('jData', oldData, oldData.length);

// retrieved.push(retrieved)
// localStorage.setItem('All', retrieved.toString());

if (oldData.length > 0) {
  let newArr;
  const newData = [totalS]
  // const tResult = retrieved.push(...totalS);
  console.log('jData o oldData', newData, oldData);
  newArr = [...oldData, ...newData];
  // newArr.push(...retrieved, totalS)
  console.log('totalS.......', newArr);
  localStorage.setItem('All',JSON.stringify(newArr))
  // retrieved.push(newArray);
  // newArray =localStorage.setItem( 'Kind',JSON.stringify(newArray));
  
  // console.log('i enter the first one');
  //  localStorage.setItem('All', newArray);
}else{
  console.log('i enter the second one', totalS);
  localStorage.setItem('All', JSON.stringify([totalS]));
}
console.log(typeof retrieved)
//localStorage.setItem("result",'');
//const converted = JSON.parse(retrieved)
days.innerHTML = `<div>${retrieved}</div>`

});


// function appendValueToStorage(key, value) {
//   var values = JSON.parse(localStorage.getItem(key));
//   if (values === null) {
//     values = [];
//   }

//   values.push(value);
//   localStorage.setItem(key, JSON.stringify(values));
//   console.log(localStorage.getItem(key));
// }

// appendValueToStorage('todays-values', document.getElementById("sample").value);

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