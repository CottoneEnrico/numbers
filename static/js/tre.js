function gen() {
    return Math.floor(Math.random() * 9) + 1
}

let counter = 0;

let generatedNumber = gen()
console.log(generatedNumber)

function isNumberCorrect(n) {
    if (n === generatedNumber) {
        console.log("CORRECT ")
        window.location.replace("winner")
        return true
    } else {
        window.location.replace("loser")
        console.log("INCORRECT ")
        counter++
        localStorage.setItem("data", counter.toString())
        return false
    }
} 

window.onload = function() {
    
    let data = localStorage.setItem('data', counter);
    console.log(data);

    localStorage.getItem("data")
    const uno = document.getElementById("uno");
    const due = document.getElementById('due');
    const tre = document.getElementById('tre');
    const quattro = document.getElementById('quattro');
    const cinque = document.getElementById('cinque');
    const sei = document.getElementById('sei');
    const sette = document.getElementById('sette');
    const otto = document.getElementById('otto');
    const nove = document.getElementById('nove');

    uno.addEventListener("click", function() {
        if (isNumberCorrect(1)) {
            console.log("CORRECT ")
            
        }
    });

    due.addEventListener("click", (event) => {
        if (isNumberCorrect(2)) {
 
        }
    });
    
    tre.addEventListener("click", (event) => {
        if (isNumberCorrect(3)) {
    
        }
    });
    
    quattro.addEventListener("click", (event) => {
        if (isNumberCorrect(4)) {
    
        }
    });
    
    cinque.addEventListener("click", (event) => {
        if (isNumberCorrect(5)) {

        }
    });
    
    sei.addEventListener("click", (event) => {
        if (isNumberCorrect(6)) {

        }
    });
    
    sette.addEventListener("click", (event) => {
        if (isNumberCorrect(7)) {

        }
    });
    
    otto.addEventListener("click", (event) => {
        if (isNumberCorrect(8)) {

        }
    });
    
    nove.addEventListener("click", (event) => {
        if (isNumberCorrect(9)) {

        }
    });
}