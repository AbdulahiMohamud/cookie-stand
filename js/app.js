'use strict';

let openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let storeSection = document.getElementById('Stores-cookies');
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


// cookies.prototype.render = function() {
//   let locationName = document.createElement('h1');
//   locationName.innerText = this.name;
//   storeSection.appendChild(locationName);

//   let ulElem = document.createElement('ul');
//   storeSection.appendChild(ulElem);

//   for (let i = 0; i < openHours.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }
//   let liTotal = document.createElement('li');
//   liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//   ulElem.appendChild(liTotal);

// };
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

displayTop();
displayCookies();


// let seattleStore = {
//   name : 'Seattle',
//   minCus : 23,
//   maxCus : 65,
//   avgCookie : 6.3,
//   cookieHours : [],
//   totalCookies : 0,
//   getCookies : function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
//       this.totalCookies = this.totalCookies + this.cookieHours[i];
//     }
//   },

//   render : function () {
//     let locationName = document.createElement('h1');
//     locationName.innerText = this.name;
//     storeSection.appendChild(locationName);

//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);

//     for (let i = 0; i < openHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };

// seattleStore.getCookies();
// seattleStore.render();

// let tokyoStore = {
//   name : 'Tokyo',
//   minCus : 3,
//   maxCus : 24,
//   avgCookie : 1.2,
//   cookieHours : [],
//   totalCookies : 0,
//   getCookies : function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
//       this.totalCookies = this.totalCookies + this.cookieHours[i];
//     }
//   },

//   render : function () {
//     let locationName = document.createElement('h1');
//     locationName.innerText = this.name;
//     storeSection.appendChild(locationName);

//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);

//     for (let i = 0; i < openHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };

// tokyoStore.getCookies();
// tokyoStore.render();

// let dubaiStore = {
//   name : 'Dubai',
//   minCus : 11,
//   maxCus : 38,
//   avgCookie : 3.7,
//   cookieHours : [],
//   totalCookies : 0,
//   getCookies : function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
//       this.totalCookies = this.totalCookies + this.cookieHours[i];
//     }
//   },

//   render : function () {
//     let locationName = document.createElement('h1');
//     locationName.innerText = this.name;
//     storeSection.appendChild(locationName);

//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);

//     for (let i = 0; i < openHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };

// dubaiStore.getCookies();
// dubaiStore.render();

// let parisStore = {
//   name : 'Paris',
//   minCus : 20,
//   maxCus : 38,
//   avgCookie : 2.3,
//   cookieHours : [],
//   totalCookies : 0,
//   getCookies : function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
//       this.totalCookies = this.totalCookies + this.cookieHours[i];
//     }
//   },

//   render : function () {
//     let locationName = document.createElement('h1');
//     locationName.innerText = this.name;
//     storeSection.appendChild(locationName);

//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);

//     for (let i = 0; i < openHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };

// parisStore.getCookies();
// parisStore.render();

// let limaStore = {
//   name : 'Lima',
//   minCus : 2,
//   maxCus : 16,
//   avgCookie : 4.6,
//   cookieHours : [],
//   totalCookies : 0,
//   getCookies : function () {
//     for (let i = 0; i < openHours.length; i++) {
//       this.cookieHours.push(Math.floor(randomCustomer (this.minCus, this.maxCus) * this.avgCookie));
//       this.totalCookies = this.totalCookies + this.cookieHours[i];
//     }
//   },

//   render : function () {
//     let locationName = document.createElement('h1');
//     locationName.innerText = this.name;
//     storeSection.appendChild(locationName);

//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);

//     for (let i = 0; i < openHours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.innerText = `${openHours[i]}: ${this.cookieHours[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.innerText = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liTotal);
//   }
// };

// limaStore.getCookies();
// limaStore.render();


