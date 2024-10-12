const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  outputEl.textContent = inputValue ? inputValue : "Anonymous";
});