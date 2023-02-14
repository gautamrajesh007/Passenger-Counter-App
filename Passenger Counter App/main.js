let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
  console.log("Incremented");
};

function save() {
  console.log("Saved");
}

// document.getElementById("increment-btn").addEventListener("click", increment());