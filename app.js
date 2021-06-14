const currencySelection = document.getElementById('currency-selection');
const exchangeSelection = document.getElementById('exchange-selection');

const calculateBtn = document.getElementById('calculate-button');
const api_key = '526369d65eb4d58e7b114e5366677f69';
let objects = {}

// fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${api_key}`)
// .then(response => {
// response.json().then(data => {
//   const {rates} = data; 
//   for(const a in rates) {
//     const b = document.createElement('option');
//     const c = document.createElement('option');
//     b.textContent = a;
//     c.textContent = a;
//     currencySelection.append(b);
//     exchangeSelection.append(c);
//   }
//   objects = rates;
// })  
// })
// currencySelection.addEventListener('change', () => {

// })

async function getData() {

const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${api_key}`);
const data = await response.json();
const {rates} = data
rates.forEach(d => console.log(d));
}



// const calculateCurrency = (num) => {
//   (inputValue * inputValue) / num;
// }

calculateBtn.addEventListener('click', () => {
  const currencyInput = document.getElementById('currency-input').value;
  const exchangeInput = document.getElementById('exchange-input');

  const x = objects[currencySelection.value];
  const y = objects[exchangeSelection.value];
  exchangeInput.value= ((currencyInput * y)/x).toFixed(2);

})


getData();