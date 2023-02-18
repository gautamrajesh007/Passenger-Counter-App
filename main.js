let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
};

let saveEl = document.getElementById("save-el");;

function save() {
  let countStr = count + " -  ";
  saveEl.textContent += countStr;
};

function reset() {
  count = 0;
  document.getElementById("count-el").innerText = count;
};