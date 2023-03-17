let litre = document.getElementById('litre');
let purchased = document.getElementById('purchased');

function calc() {
    let cost = litre.value * purchased.value;
    document.getElementById("cost").innerHTML = `Your total cost is ${cost}`;
    return false;
}

