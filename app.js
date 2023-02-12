function solution() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    document.getElementById('sum').innerText = +a + +b;
}

function mul() {
    let a = document.getElementById('a1').value;
    let b = document.getElementById('b1').value;
    document.getElementById('mul').innerText = +a * +b;
}

function dif() {
    let a = document.getElementById('a2').value;
    let b = document.getElementById('b2').value;
    document.getElementById('dif').innerText = +a - +b;
}

function priv() {
    let a = document.getElementById('a3').value;
    let b = document.getElementById('b3').value;
    document.getElementById('priv').innerText = +a / +b;
}