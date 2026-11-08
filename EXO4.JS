// 1-représentation d'un produit
let produit = {
  nom: prompt("Entrez le nom du produit :"),
  prix: parseFloat(prompt("Entrez le prix du produit :")),
  quantite: parseInt(prompt("Entrez la quantité du produit :"))
};

let valeurStock = produit.prix * produit.quantite;
console.log("Q1 - Valeur du stock de " + produit.nom + " : " + valeurStock + " DA");


// 2-représentation d'un catalogue de produits
let catalogue = [];

for (let i = 1; i <= 5; i++) {
  let p = {
    nom: prompt("Produit " + i + " - Entrez le nom :"),
    prix: parseFloat(prompt("Produit " + i + " - Entrez le prix :")),
    quantite: parseInt(prompt("Produit " + i + " - Entrez la quantité :"))
  };
  catalogue.push(p);
}

// 2-2 calcul du prix moyen
let somme = 0;
for (let i = 0; i < catalogue.length; i++) {
  somme = somme + catalogue[i].prix;
}
let prixMoyen = somme / catalogue.length;
console.log("Q2 - Prix moyen du catalogue : " + prixMoyen + " DA");

// 2-3 produits dont le prix dépasse le prix moyen
console.log("Q2 - Produits dont le prix dépasse le prix moyen :");
for (let i = 0; i < catalogue.length; i++) {
  if (catalogue[i].prix > prixMoyen) {
    console.log(" - " + catalogue[i].nom + " : " + catalogue[i].prix + " DA");
  }
}


// 3-nombre total d'articles et valeur globale du stock
let totalArticles = catalogue.reduce(function (total, p) {
  return total + p.quantite;
}, 0);

let valeurGlobale = catalogue.reduce(function (total, p) {
  return total + p.prix * p.quantite;
}, 0);

console.log("Q3 - Nombre total d'articles : " + totalArticles);
console.log("Q3 - Valeur globale du stock : " + valeurGlobale + " DA");


// 4- fonction pour calculer la valeur du stock d'un produit
function valeurStockProduit(p) {
  return p.prix * p.quantite;
}

for (let i = 0; i < catalogue.length; i++) {
  console.log("Q4 - Valeur du stock de " + catalogue[i].nom + " : " + valeurStockProduit(catalogue[i]) + " DA");
}


// 5- fonction pour traiter le catalogue avec un callback
function traiterCatalogue(cat, callback) {
  for (let i = 0; i < cat.length; i++) {
    callback(cat[i]);
  }
}

function afficherNom(p) {
  console.log(" - " + p.nom);
}

function afficherPrix(p) {
  console.log(" - " + p.nom + " : " + p.prix + " DA");
}

console.log("Q5 - Noms des produits :");
traiterCatalogue(catalogue, afficherNom);

console.log("Q5 - Prix des produits :");
traiterCatalogue(catalogue, afficherPrix);