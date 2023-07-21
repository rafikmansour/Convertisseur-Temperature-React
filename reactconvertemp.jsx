import React, { useState } from "react";

const TemperatureConverter = () => {
  // Les hooks d'état pour gérer les valeurs du formulaire et le résultat
  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("Celsius");
  const [targetUnit, setTargetUnit] = useState("Fahrenheit");
  const [result, setResult] = useState("");

  // Fonction de conversion de température
  const convertTemperature = (value, source, target) => {
    // Vérifier si la valeur saisie est un nombre
    if (isNaN(value)) return "";

    // Définition des fonctions de conversion pour Celsius vers Fahrenheit et vice versa
    const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
    const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

    // Appliquer la conversion en fonction de l'unité source et de l'unité cible
    if (source === "Celsius" && target === "Fahrenheit") {
      return celsiusToFahrenheit(value).toFixed(2); // Arrondir le résultat à deux décimales
    } else if (source === "Fahrenheit" && target === "Celsius") {
      return fahrenheitToCelsius(value).toFixed(2);
    } else {
      return value; // Si les unités sont identiques, retourner la valeur inchangée
    }
  };

  // Gérer le changement de la valeur saisie
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Gérer le changement de l'unité source
  const handleSourceUnitChange = (e) => {
    setSourceUnit(e.target.value);
  };

  // Gérer le changement de l'unité cible
  const handleTargetUnitChange = (e) => {
    setTargetUnit(e.target.value);
  };

  // Gérer la soumission du formulaire de conversion
  const handleConvert = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    const convertedValue = convertTemperature(
      parseFloat(inputValue), // Convertir la valeur saisie en nombre
      sourceUnit,
      targetUnit
    );
    setResult(convertedValue); // Mettre à jour le résultat de la conversion
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
