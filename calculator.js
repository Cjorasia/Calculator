
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

// removing a mistyped value
var a=1
function back(){
    display.value=display.value.substring(0,display.value.length-1)
}

// clearing whole display
function clean(){
    display.value='enter'
}


