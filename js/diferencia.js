let edad1 = parseInt(prompt("¿Cual es tu edad?."));
let edad2 = parseInt(prompt("¿Cual es la edad e tu hermanx?:"));

if (edad1 > edad2)
{
    let diferencia1= edad1-edad2;
    alert("Se llevan "+ diferencia1 + "años.Tu eres mayor");
}

else if (edad2 > edad1)
{
    let diferencia2=edad2-edad1;
    alert("Se llevan "+ diferencia2 + "años. Tu eres menor");
}
else if (edad1===edad2)
{
    alert("Tienen la misma edad.")
}