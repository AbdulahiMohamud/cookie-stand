'use strict';

let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let storeForm = document.getElementById('store-form');
let table = document.getElementById('table');
function randomCustomer (min, max) {
  //  pulled from mozilla
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let displayCookiesArr = [];

function cookies (name, minCus, maxCus, avgCookie) {
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookie = avgCookie;
  this.cookieHours = [];
  this.totalCookies = 0; 

  displayCookiesArr.push(this);
}

cookies.prototype.getCookies = function() {
  for (let i = 0; i < openHours.length; i++) {
    this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
    this.totalCookies = this.totalCookies + this.cookieHours[i];
  }
};

function displayTop() {
  
  let row = document.createElement('tr');
  let blank = document.createElement('th');
  blank.innerText = ' ';
  row.appendChild(blank);

  for(let i = 0; i < openHours.length; i++) {
    let time = document.createElement('th');
    time.innerText = openHours[i];
    row.appendChild(time);
  }

  let totalstr = document.createElement('th');
  totalstr.innerText = 'Daily Location Total';
  row.appendChild(totalstr);
  table.appendChild(row);

}

function grandpopTotal() {
  let row = document.createElement('tr');
  let grandTotal = document.createElement('th');
  grandTotal.innerText = 'Total';
  table.appendChild(row);
  row.appendChild(grandTotal);

  let allTotal = 0;

  for(let i = 0; i < openHours.length; i++) {
    let amount = 0;

    for (let j = 0; j < displayCookiesArr.length; j++ ) {
      amount += displayCookiesArr[j].cookieHours[i];
      allTotal += displayCookiesArr[j].cookieHours[i];

    }
    let dailyTotal = document.createElement('td');
    dailyTotal.innerText = amount;
    row.appendChild(dailyTotal);

  }
  let totalofTotal = document.createElement('td');
  totalofTotal.innerText = allTotal;
  row.appendChild(totalofTotal);
} 


cookies.prototype.render = function() {

  let row2 = document.createElement ('tr');
  let name = document.createElement('td');
  name.innerText = this.name;
  row2.appendChild(name);

  for(let i = 0; i < openHours.length; i++) {
    let numCookies = document.createElement('td');
    numCookies.innerText = this.cookieHours[i];
    row2.appendChild(numCookies);

  }

  let total = document.createElement('td');
  total.innerText = this.totalCookies;

  row2.appendChild(total);
  table.appendChild(row2);

};

new cookies('seattle',23,65,6.3);
new cookies('tokyo',3,24,1.2);
new cookies('dubai',11,28,3.7);
new cookies('lima',2,16,4.6);

function displayCookies(){
  for(let i = 0; i < displayCookiesArr.length; i++){
    displayCookiesArr[i].getCookies();
    displayCookiesArr[i].render();
  }
}

function handleSubmit (event) {
  event.preventDefault();

  let name = event.target.Name.value;
  let min = ~~event.target.minimum.value;
  let max = ~~event.target.maximum.value;
  let avg = ~~event.target.average.value;

  let newStore = new cookies(name,min,max,avg);
  newStore.getCookies();
  newStore.render();


  let el = document.getElementById('table');
  // pulled from stackover flow
  el.removeChild(el.childNodes[el.childElementCount] );
  render(newStore);
  grandpopTotal();
  storeForm.reset();
}


storeForm.addEventListener('submit',handleSubmit);


displayTop();
displayCookies();
grandpopTotal();

