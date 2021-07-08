const currency_one = document.getElementById("currency-one")
const currency_two = document.getElementById("currency-two")
const amount_one = document.getElementById("amount-one")
const amount_two = document.getElementById("amount-two")
const rate = document.getElementById("rate")
const swap = document.getElementById("swap")


// fetch exchange rate

const calculate = () => {
    const currency_one_value = currency_one.value;
    const currency_two_value = currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/fea5dac240d823af30a4fa49/latest/${currency_one_value}`)
        .then(res => res.json())
        .then(data => {
            let rateData = data.conversion_rates[currency_two_value]
            rate.innerText = `1 ${currency_one_value} = ${rateData} ${currency_two_value}`
            amount_two.value = (amount_one.value * rateData).toFixed(2)
        })
}

currency_one.addEventListener("change", calculate)
amount_one.addEventListener("input", calculate)
currency_two.addEventListener("change", calculate)
amount_two.addEventListener("input", calculate)

// swapping for currency
swap.addEventListener("click", ()=> {
    const temp = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = temp
    calculate()
})

calculate()