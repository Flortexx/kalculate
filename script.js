const display = document.getElementById("display");
const displayPower = document.getElementById("displayPower");
function appendToDisplay(input){
    display.value += input ;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}



function root(){
    display.value = Math.sqrt(display.value);
}

function power(){
    display.value = Math.pow(display.value, displayPower.value );
}

function plus(){
    display.value = +Math.abs(display.value);
}

function minus(){
    display.value = -Math.abs(display.value);
}