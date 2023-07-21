import React, { useState } from "react";

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("Celsius");
  const [targetUnit, setTargetUnit] = useState("Fahrenheit");
  const [result, setResult] = useState("");

  // Fonction de conversion de température
  const convertTemperature = (value, source, target) => {
    if (isNaN(value)) return "";

    const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
    const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

    if (source === "Celsius" && target === "Fahrenheit") {
      return celsiusToFahrenheit(value).toFixed(2);
    } else if (source === "Fahrenheit" && target === "Celsius") {
      return fahrenheitToCelsius(value).toFixed(2);
    } else {
      return value;
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSourceUnitChange = (e) => {
    setSourceUnit(e.target.value);
  };

  const handleTargetUnitChange = (e) => {
    setTargetUnit(e.target.value);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const convertedValue = convertTemperature(
      parseFloat(inputValue),
      sourceUnit,
      targetUnit
    );
    setResult(convertedValue);
  };

  return (
    <div>
      <h2>Convertisseur de température</h2>
      <form onSubmit={handleConvert}>
        <label>
          Température :
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <label>
          Unité de départ :
          <select value={sourceUnit} onChange={handleSourceUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
        <label>
          Unité de destination :
          <select value={targetUnit} onChange={handleTargetUnitChange}>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </label>
        <button type="submit">Convertir</button>
      </form>
      <div>Résultat : {result}</div>
    </div>
  );
};

export default TemperatureConverter;
