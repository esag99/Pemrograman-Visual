function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5/9
    document.getElementById('celcius').value = celcius;
}

function celciusToKelvin(){
    let cecius = document.getElementById('cecius').value
    let kelvin = (1*cecius + 273.15)   
    document.getElementById('kelvin').value = kelvin;
}

function kelvinToCelcius(){
    let kelvin = document.getElementById('kelvin').value
    let cecius = (kelvin - 273.15)
    document.getElementById('cecius').value = cecius;
}

function celciusToReamur(){
    let celcius = document.getElementById('c').value
    let reamur = (4/5*celcius)
    document.getElementById('reamur').value = reamur;
}

function reamurToCelcius(){
    let reamur = document.getElementById('reamur').value
    let celcius = (5/4*reamur)
    document.getElementById('c').value = celcius;
}