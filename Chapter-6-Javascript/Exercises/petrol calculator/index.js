// Getting the element with the id of "litre" and assigning it a variable named litre
let litre = document.getElementById('litre');
// Getting the element with the id of "purchased" and assigning it a variable named purchased
let purchased = document.getElementById('purchased');
// Declaring a function with the name calc
function calc() {
    // Multiplying the value of variable litre and the variable purchased
    let cost = litre.value * purchased.value;
    // Changing the content in the element with id of "cost" to "Your cost is ,the value stored in the variable cost"
    document.getElementById("cost").innerHTML = `Your total cost is ${cost}`;
    // This does not let the form be refreshed after clicking the button for submit
    return false;
}

