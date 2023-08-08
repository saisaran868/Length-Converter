function convertLength() {
    var inputValue = document.getElementById("inputValue").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
  
    var convertedValue;
  
    // Convert to meters first
    switch (inputUnit) {
      case "cm":
        convertedValue = inputValue / 100;
        break;
      case "km":
        convertedValue = inputValue * 1000;
        break;
      default:
        convertedValue = inputValue;
    }
  
    // Convert to desired unit
    switch (outputUnit) {
      case "cm":
        convertedValue *= 100;
        break;
      case "km":
        convertedValue /= 1000;
        break;
    }
  
    // Update output field
    document.getElementById("outputValue").value = convertedValue;
  }
  