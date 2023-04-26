// Get the count element and set its initial value
let count = document.getElementById("count");
let countValue = parseInt(localStorage.getItem("count")) || 0;
count.textContent = countValue;

// Function to increment the count
function incrementCount() {
  countValue++;
  count.textContent = countValue;
  localStorage.setItem("count", countValue);
}

// Function to reset the count
function resetCount() {
  countValue = 0;
  count.textContent = countValue;
  localStorage.setItem("count", countValue);
}
