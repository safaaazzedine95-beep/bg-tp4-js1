const nom = "John";         
const prenom = "Doe";       
const age = 30;             
const note = 15;           
const pi = 3.14;          


function f1() {
    document.getElementById("resultat").textContent = nom ;  
}

function f2() {
   document.getElementById("resultat").textContent = prenom ;
}
function f3() {
    
    document.getElementById("resultat").textContent = nom + prenom ;
}

function f4() {
   document.getElementById("resultat").textContent = age ;
}

function f5() {
    document.getElementById("resultat").textContent = note;
}

function f6() {
    document.getElementById("resultat").textContent = pi ;
}
