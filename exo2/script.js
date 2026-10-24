
let tableauEtudiants = [
    "Etudiant1",
    "Etudiant2",
    "Etudiant3"
];

let objetEtudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

let tableauObjetsEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    document.getElementById("resultat").textContent = tableauEtudiants.join(", ");
}


function f2() {
    document.getElementById("resultat").textContent =   objetEtudiant.nom + " - " + objetEtudiant.prenom + " - " + objetEtudiant.age;
}

function f3() {
    let texte = "";
    for (let i = 0; i < tableauObjetsEtudiants.length; i++) { texte += tableauObjetsEtudiants[i].nom + " - " +
        tableauObjetsEtudiants[i].prenom + " - " +  tableauObjetsEtudiants[i].age + " | ";
    }
    document.getElementById("resultat").textContent = texte;
}