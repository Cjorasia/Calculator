
// not mathematical addition but to add values in display
function add(x){
    if(display.value=='enter'){
        display.value="";
    }
    display.value+=x;
}

// will calculate using inbuilt eval() function
function calc(){
    display.value=eval(display.value)
}



