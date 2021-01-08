"use strict";

// Button

const btn = document.querySelector(".btnMy");

// Tip Amount count

const tipCount = function () {
  //Satisfaction input
  const satisfaction = document.querySelector("#serviceSatisfaction").value;

  //Price input
  const price = document.querySelector("#billPrice").value;

  //Number of people input
  const numOfPeople = document.querySelector("#numOfPeople").value;

  let price2 = Number(price);

  //Total tip count
  let tipTotal = 0;

  if (price === NaN) {
    alert("Enter correct inputs");
  }

  // great, good, bad
  if (satisfaction === "Great") {
    tipTotal = price2 * 0.2;
  } else if (satisfaction === "Good") {
    tipTotal = price2 * 0.1;
  } else if (satisfaction === "Bad") {
    tipTotal = price2 * 0.02;
  }
  //Price + tip = total
  let priceAndTip = tipTotal + price2;

  //How much each person owes
  let eachPerson = priceAndTip / numOfPeople;
  if (eachPerson === Infinity || eachPerson === NaN) {
    eachPerson = "/";
  }
  document.querySelector(".tipAmount").innerText = parseFloat(tipTotal).toFixed(
    2
  );
  document.querySelector(".totalAmount").innerText = priceAndTip;
  document.querySelector(".eachPersonOwes").innerText = eachPerson;

  document.querySelector(".final").classList.remove("noneDisplay");
};

btn.addEventListener("click", tipCount);
