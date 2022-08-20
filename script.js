
`use strict`;

// Selecting elements
const billInput = document.querySelector(`.bill-input`);
const tipBtns = document.querySelectorAll(`.tip-btn`);
const customBtn = document.querySelector(`.custom`);
const personInput = document.querySelector(`.person-input`);
const tipBtn = document.querySelector(`.tip-value`);
const totalValue = document.querySelector(`.total-value`);
const restrict = document.querySelector(`.restrict`);
const btnReset = document.querySelector(`.btn-reset`);
const btnCalc = document.querySelector(`.btn-calc`);

// Reaching data
let bill, person, tipBtnValue;

billInput.addEventListener(`change`, (e) => {
  bill = Number(e.target.value);
});
personInput.addEventListener(`change`,(e) => {
  person = Number(e.target.value);
});
customBtn.addEventListener(`change`,(e) => {
  tipBtnValue = Number(e.target.value);
});

tipBtns.forEach((tip) => {
  tip.addEventListener(`click`, function () {
    tipBtnValue = tip.textContent.replace(`%`, ``) * 1;
  });
});

// Init starter function
const init = function () {
  bill = 0;
  person = 0;
  tipBtnValue = 0;
  tipBtn.textContent = `$0`;
  totalValue.textContent = `$0`;
  billInput.value = ``;
  customBtn.value = ``;
  personInput.value = ``;
};

// Calc function to calculate
btnCalc.addEventListener(`click`, function () {
  if (!person || person <= 0) {
    restrict.classList.remove(`hidden`);
    personInput.style.border = `2px solid rgba(225, 116, 87, 1)`;
    btnCalc.classList.add(`hidden`);
    btnReset.classList.remove(`hidden`);
  } else {
    const tipValue = Number((tipBtnValue / bill) * 100);
    tipBtn.textContent = `$${(tipValue / person).toFixed(2)}`;
    totalValue.textContent = `$${((bill + tipValue) / person).toFixed(2)}`;
    btnCalc.classList.add(`hidden`);
    btnReset.classList.remove(`hidden`);
  }
});

// Reset btn to re start

btnReset.addEventListener(`click`, function () {
  init();
  btnReset.classList.add(`hidden`);
  btnCalc.classList.remove(`hidden`);
  restrict.classList.add(`hidden`);
  personInput.style.border = `2px solid transparent`;
});
