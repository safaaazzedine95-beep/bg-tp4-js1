let Students = [
    { matricule: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
    { matricule: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
    { matricule: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

function B(note) {
    return note >= 10;
}

function deliberation() {
    let resultat = "";

    for (let i = 0; i < Students.length; i++) {
        let moyenne = (Students[i].note1 + Students[i].note2) / 2;

        if (B(moyenne)) {
            resultat += Students[i].matricule + ": ADMIS<br>";
        } else {
            resultat += Students[i].matricule + ": AJOURNÉ<br>";
        }
    }

    document.getElementById("resultat").innerHTML = resultat;
}