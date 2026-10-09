let count = 0;
const value = document.getElementById("counter-value");

document.getElementById("counter-inc").addEventListener("click", () => {
  count++;
  value.textContent = count;
});

document.getElementById("counter-dec").addEventListener("click", () => {
  count--;
  value.textContent = count;
});

document.getElementById("counter-reset").addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});