const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 350000;
    const libraToday = 6.1;
    const realToday = 1;

    // Verificação de valor inválido
    if (isNaN(inputCurrencyValue) || inputCurrencyValue < 0) {
        currencyValueToConvert.innerHTML = "Valor inválido";
        currencyValueConverted.innerHTML = "";
        return; // Adicionando return para interromper a execução
    }

    // Conversão
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    } else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    } else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    } else if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(6) + " BTC";
    } else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    // Atualizando o valor a ser convertido
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    // Atualizando o nome e a imagem com base na seleção
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/Dolar.png";
    } else if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/Euro.png";
    } else if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/Libra.png";
    } else if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/Bitcoin.png";
    } else if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/Real.png";
    }

    // Chama a função de conversão a cada mudança de moeda
    convertValues();
}

// Adicionando os eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);