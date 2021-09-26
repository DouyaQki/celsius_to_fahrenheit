let fahrenheit = document.getElementById("paragraph");
fahrenheit.style.fontSize = "60px";

function calculator() {
  let inputTemp = parseFloat(document.getElementById("grad").value);
  let celFahr = inputTemp * (9 / 5) + 32 || "0";

  fahrenheit.textContent = celFahr + "℉";
}
