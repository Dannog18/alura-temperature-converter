function Converter() {
  var valor = document.getElementById("valor").value;
  var fromTemp = document.getElementById("from-temp").value;
  var toTemp = document.getElementById("to-temp").value;
  var resultado = 0;

  if (fromTemp === toTemp) {
    resultado = valor;
  }

  // from celsius
  if (fromTemp === "celsius" && toTemp === "fahrenheit") {
    resultado = (9 / 5) * valor + 32;
  }

  if (fromTemp === "celsius" && toTemp === "kelvin") resultado = valor + 273.15;

  // from fahrenheit
  if (fromTemp === "fahrenheit" && toTemp === "celsius")
    resultado = ((valor - 32) * 5) / 9;

  if (fromTemp === "fahrenheit" && toTemp === "kelvin")
    resultado = ((valor + 459.67) * 5) / 9;

  // from kelvin
  if (fromTemp === "kelvin" && toTemp === "celsius") resultado = valor - 273.15;

  if (fromTemp === "kelvin" && toTemp === "fahrenheit ")
    resultado = (valor * 1, 8) - 459.67;

  resultado = parseFloat(resultado).toFixed(2);

  if (toTemp === "celsius") resultado += " °C";
  if (toTemp === "fahrenheit") resultado += " °F";
  if (toTemp === "kelvin") resultado += " K";

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado é " + resultado;
  elementoValorConvertido.innerHTML = valorConvertido;
}
