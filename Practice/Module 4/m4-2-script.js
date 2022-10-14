// Function
function showmsg(match1, match2){
    alert(match1 + '-' + match2);
}

// Function with Parameters
function compute(value1, value2, value3){
    alert(value1 + value2 - value3);
}

// Function with Local Variables
function msg1(){
    let m = "Hello!"
    alert(m);
}

// Function with Outer Variables
let h ="Hi";

function msg2(){
    alert(h + ' World!');
}

// Boolean Value 
function compare(){
    let comp = 5 < 1;
    alert(comp);
}

// Prompt (Interaction)
function age_checked(){
    let age = prompt("How old are you?", 1);
    alert(`You are ${age} years old`);
}

// Confirm (Interaction)
function test_confirm(){
    let val = confirm("Are you sure you want to proceed?");
    alert(val);
}

// If statement (Conditional)
function condition(){
    let pass = prompt('Please enter a password', '');
    if(pass == 1234) alert('You are right!');
}

// If Else statement
function login(){
    let pass = prompt('Please enter a password', '');
    if(pass == 1234){
        alert('Login successful!');
    } else {
        alert('Incorrect password!');
    }
}
