const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(clear){
    display.value = "";
    
}

function calculate(){
    display.value = eval(display.value);
}

function deleteDisplay(){
    display.value = display.value.slice(0, -1);
}