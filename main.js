let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
};

let saveEl = document.getElementById("save-el");;

function save() {
  let countStr = count + " -  " + "\n";
  saveEl.innerText += countStr;
};