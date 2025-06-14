// The JavaScript calculator code


//This was used to get the id="dispay" on the html file using the DOM. 
const display = document.getElementById("display")


//This function appends the input that was clicked on the button to the display
function appendToDisplay(input){
    display.value += input;
}

//This function is used to delete one input or value/the last value on the display whenever the button is being clicked
function deleteOneOnDisplay(){
    display.value = display.value.slice(0, -1);
}

//This function clears everything on the display
function wipeDisplay(){
    display.value = ""
}


//This function evaluates the result of the input passed and displays the result
function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error"
    }

}
