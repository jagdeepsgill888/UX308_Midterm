/* Write a function that converts temperatures in fahrenheit to celsius. Test at least boiling, freezing water temperatures and room temperature (70).*/

function convertFahrenheit2Celsius(fahrenheit){
    let celsius = ( fahrenheit - 32) * 5/9;
    return celsius;
}

// console.log(`It is ${convertFahrenheit2Celsius(40)} Celsius degree`);

export { convertFahrenheit2Celsius }