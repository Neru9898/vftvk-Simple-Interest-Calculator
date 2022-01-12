function getRate() {
  const rate = document.getElementById("rate");
  const rateValue = document.getElementById("rateVale");
  rate.addEventListener(
    "input",
    () => (rateValue.innerHTML = `${rate.value}%`),
    false
  );
}

function compute() {
    const output = document.querySelector(".output")
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  const futureYear = new Date().getFullYear() + years;
  if (principal > 0) {
    const interest = principal * years * (rate / 100);
    const finalValue = principal + interest;

    output.innerHTML = `
    If you deposit <mark>${principal}</mark>, <br> 
    at an interest rate of  <mark>${rate}%</mark>. <br> 
    You will recieve an amount of <mark>${finalValue}</mark>, <br> 
    in the year <mark>${futureYear}</mark>, <br> 
    `
  } else if (principal < 0) {
    alert("Enter a positive number!");
  } else {
    alert("Enter a number!");
  }
}
