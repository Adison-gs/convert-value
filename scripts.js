//grabbing the input.
const form = document.querySelector("form");
const input = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//Retrieving value from select.
const USD = 5.15;
const EUR = 5.94;
const GBP = 6.86;

input.addEventListener("input", () => {
  //Validation variable.
  const hasCharactersRegex = /\D+/g
  //Applying to the input.
  input.value = input.value.replace(hasCharactersRegex, "")
});

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£ ")
      break
  }
};

//Function to convert the currency.
const convertCurrency = function (amount, price, symbol) {

  try {
    //Displaying the exchange rate for the selected currency/
    description.textContent = `${symbol} 1 = ${formatCurrencyBRl(price)}`
    //Calculating the total/
    let total = String(amount * price).replace(".", ",")
    //Showing the total result.
    result.textContent = `${total} Reais`

    //Applying the class that displays the footer.
    footer.classList.add("show-result")

  } catch (error) {
    //Removing the class that displays the footer.
    footer.classList.remove("show-result")

    alert("Unable to convert. Please try again later")
    console.log(error)

  }
};


function formatCurrencyBRl(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
};