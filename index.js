let count = 0;

const increment = document.getElementById('increase');
const decrement = document.getElementById('decrease');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter');



increment.onclick = function() {
  count++;
  counter.innerHTML = count;
}

decrement.onclick = function() {
  count--;
  counter.innerHTML = count;
}

reset.onclick = function() {
  count = 0;
  counter.innerHTML = count;
}