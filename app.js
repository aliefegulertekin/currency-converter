const initialSelection = document.getElementById('currency-selection');
const finalSelection = document.getElementById('exchange-selection');

const calculateBtn = document.getElementById('calculate-button');
const api_key = '526369d65eb4d58e7b114e5366677f69';
let responseObjects = {};


async function getData() {

const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${api_key}`);
const data = await response.json();
const {rates} = data
for(const rate in rates) {
      const initialCurrency = document.createElement('option');
      const finalCurrency = document.createElement('option');
      
      initialCurrency.textContent = rate;
      finalCurrency.textContent = rate;

      initialSelection.append(initialCurrency);
      finalSelection.append(finalCurrency);
    }
    responseObjects = rates;
};


const calculateCurrency = (initialInput,exchangeInput) => {

  
  const x = responseObjects[initialSelection.value];
  const y = responseObjects[finalSelection.value];
  
  exchangeInput.value= ((initialInput * y)/x).toFixed(2);
};

window.addEventListener('load', getData);
calculateBtn.addEventListener('click',() => {
  const initialInput = document.getElementById('currency-input').value;
  const exchangeInput = document.getElementById('exchange-input');
  if(initialInput === "" || exchangeInput === "") {
    return;
  }
  calculateCurrency(initialInput,exchangeInput);
});  
