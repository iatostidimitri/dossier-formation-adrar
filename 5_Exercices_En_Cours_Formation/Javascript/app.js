/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 * peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 * Contrairement à async, l'ordre d'exécution des scripts est préservé,
 * en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 



/**
 * **************************************
 * 2-VARIABLES
 * **************************************
 */
//! On déclare une variable avec let ou const (ou var dans les anciennes versions de JS)
let maVariable;
//! On assigne une valeur à une variable avec le signe =
maVariable = 'Hello World';
console.log(maVariable);

//? Les types de variables (JS utilise un typage dynamique)
let uneString = 'MDR';
let unNombre = 11;
let unBooleen = true;
let unTableau = [1,2,3,'Hello'];
let unObjet = { 
    propriete1 :  22,
    propriete2:'LOL'
};
//! Spoiler : on déclare une fonction comme ceci 👇
function testFunction (){
    console.log('Fonction de Test ?');
}
//? Bonus 💡: on peut placer une fonction dans une variable
let uneFonction = function maFonction (){
    console.log('Fonction qui affiche HelloWorld');
}

console.log(uneString);
console.log(unNombre);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet);
//* Sans les ( ) on fait référence à la ƒ°
console.log(uneFonction);
//* là avec les () on éxecute la ƒ°
console.log(uneFonction());


/**
 * **************************************
 * 3-CALCULS
 * **************************************
 */
console.log(42*675);
let unChiffre = 9;
let unNombre1 = 33;
console.log(unChiffre*unNombre1);
//! Ne pas se faire troll par les nombre à ,
console.log(2,9+1,3);
//? La notation en point : 
console.log(2.9+1.3);
console.log((1+1)-(2*3)/2);
console.log(10%2);
let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);

/**
 * **************************************
 * 4-STRINGS
 * **************************************
 */
let bonjour = 'Bonjour';
let unMessage = "Bienvenue";
let welcome = `Bienvenue`;
console.log(bonjour,unMessage);
let unTexte = "Bonjour \"MR Gingle\"";
let unTxt = ' Aujourd\'hui';
console.log(unTexte,unTxt);
let concatenation = bonjour + " et " + unMessage +', il fait beau temps' + unTxt;
console.log(concatenation);
let uneTemplateString = `Hello ! ${bonjour} et ${unMessage}
on retourne à la "ligne" plus besoin des 'antislash'`;
console.log(uneTemplateString);

//* Exemple la "Pizzeria Rafinata"
let product = 'Pizza Hawaienne';
let nomUser = 'Jean Jack';
let date = '12-12-2012';
let nomPizzeria = `"La Pizzeria Rafinata"`
let SumUpOrderPhrase = `le ${date} Bonjour cher ${nomUser}, merci d'avoir passé commande chez ${nomPizzeria}, votre pizza :  ${product}, arrive sous 30 minutes

Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait 
des conseils ? "Suis ta pate et tout ira bien"`;

console.log(SumUpOrderPhrase);


let nom1='jean';
let age1=35;
let passions=['curling','bowling','pétanque'];

let tabUser=[nom1,age1,passions];

console.log(tabUser[2][1]);


/**
 * **************************************
 * 5-ARRAYS
 * **************************************
 */
let prenom = 'JoSé';
let age = 45;
// On déclare un tableau avec cette syntaxe : []
// On peut placer ce que l'on veut dans un tableau 
let unTableau2 = [12,'Salut ca va bien?',prenom,age];
console.log(unTableau2);
console.log(unTableau2[2]);
// Exemple avec un tableau dans un tableau 
let mesPassions = ["Boxe","Jonquilles"];
let monPerso = [prenom, age, mesPassions];
// Avec le système d'index / indice on peut accèder
// au contenu d'une case du tableau.
// La 1ère case du tableau est à l'indice 0.
console.log(monPerso[2]);
console.log(monPerso[2][1]);
//? On peut modifier les cases d'un tableau.
monPerso[0] = 23;
monPerso[1] = 'YOLO';
monPerso[2][1] = 'COOL';
console.log(monPerso);
// On peut utiliser la propriété length,
// .length sur le tableau en lui même 
// nous renvoi le nombre de case du tableau
console.log(monPerso.length);
// .length sur une case précise du tableau 
console.log(monPerso[2].length);

// On peut utiliser la propriété length,
// .length sur le tableau en lui même 
// nous renvoi le nombre de case du tableau
console.log(monPerso.length);
// .length sur une case précise du tableau 
console.log(monPerso[2].length);
let mesNombres = [100,200,300];
// La méthode push permet d'ajouter des éléments dans le tableau
mesNombres.push('Top Génial');
console.log(mesNombres);
// La méthode pop permet de supprimer le dernier élément dans le tableau
mesNombres.pop();
console.log(mesNombres);

let superTab = [];
let firstname = 'JOJO';
let lastname = 'La Menace';
// On peut utiliser le système d'indice sur des strings
let initiales = firstname[0] + lastname[0]

superTab.push(firstname,lastname,initiales);
console.log(superTab);

/**
 * **************************************
 * 6-FUNCTIONS
 * **************************************
 */
// Une fonction peut contenir plusieurs instructions
// ces intructions sont alors executées à chaque fois qu'on utilise la fonction
function maSuperFonction(){
    console.log('Hello World');
    console.log(22+33);
}
// Détailler la fonction OK, mais ne pas oublier
// d'executer au moins une fois dans le programme cette fonction
maSuperFonction();

//Certaines fonction ont besoin de prendre un paramètre ici num
// Pas besoin de déclarer le paramètre, il sera défini à l'utilisation de 
// la fonction
function fonctionAvecParametre(num){
    console.log('Hello World');
    console.log(22+num);
}

//** Bonne Pratique : paramètre par défaut
function fonctionAvecParametre(num=0){
    console.log(22+num);
}
// Ici notre paramètre num aura pour valeur 9
fonctionAvecParametre(9);

//! Dans certains cas une fonction doit pouvoir retourner quelquechose
//! le résultat d'un calcul par exemple
//! Ci-dessous on fait une fonction de calcul, notre fonction ne fait que ca
//! Elle se charge JUSTE de faire un calcul
//! L'affichage du résultat se fera en dehors de la fonction
function calculReturn(unNombre, unAutreNombre){
    return unNombre + unAutreNombre
}
//! Ici le calcul qui est return par la fonction est stocké dans une variable
//! resultat
let resultat = calculReturn(22,99);
console.log(resultat);
// ou executer la fonction quand on a besoin
console.log('Le résultat : ', calculReturn(22,99));


// EXO 5.1 : Quizz Function
// TODO : Pourquoi ca beug ?


let wtf = 9;
function buggyFunction() {
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf);

//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?


let something = 44;
let lesNews = `il est 99h67`
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews);
}


function functionBugEnfant() {
    let lesNews = `il est 99h67`;
};

    functionBugParent();
    console.log(something);

//! EXO 5.2 : La moyenne de 2 notes 
//TODO: Créer une fonction qui calcule la moyenne de 2 notes
//TODO: Afficher le résultat en console
let noteSport = 8;
let notePhilo = 2;
let resultatMoy = moyenne2notes(notePhilo,noteSport);
// On peut executer la ƒ° AVANT de la définir (pas d'ordre pour décrire les fonctions)
function moyenne2notes(a,b){
    return (a+b)/2;
};
console.log('La moyenne des 2 notes : ',resultatMoy);


document.addEventListener('click',(clickEvent)=>{
    console.log(clickEvent);
    console.log(`Tu as clické ici : 
    X : ${clickEvent.x} - Y : ${clickEvent.y}
    à ce moment : ${clickEvent.timeStamp}`);
});
/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
//! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
let a = 11;
let b = 99;
console.log("variable a:",a);
console.log("variable b:",b);
//! avec == on demande si a est égal à b
console.log("c'est égal ? :",a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? :",a != b);
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("Strictement suppérieur ? :",a > b);
//! ici on demande si a est strictement inférieur à b
console.log("Strictement inférieur ? :",a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("Inférieur ou égal ? :",a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("suppérieur ou égal ?:",a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" 🤔
console.log("le chiffre 2 = \"2\"?:",2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("égalité stricte ?:",2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !==
console.log("inégalité stricte ?:",2 !== "2");
//? il existe aussi des opérateurs Logiques qui nous permet de combiner des conditions
//? && pour dire ET
//? || pour dire OU
//? ! pour dire Différent de
console.log(3==3 && 3<4);
console.log(3==3 || 3<4);

//!-------CONDITIONS / Operateur TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ?
console.log(userPremium?'OK 🤙':'Not OK 👺');
// ↑ c'est l'équivalent de ↓
console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK 🤙':'Not OK 👺');

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');


function msgMentionBacOfficiel(tabNotes) {
    let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
    console.log('la Moyenne au Bac : ',moyenneCalc);
    if (moyenneCalc >=16) {
        return "Tu as Gagné !"
    } else if (moyenneCalc >=10 && moyenneCalc<16) {
        return 'Assez Bien'
    } else {
        return 'YO T NUL GRO'
    }
};
console.log(msgMentionBacOfficiel([13,6,3]));

// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let user = {
    id:3657826,
    'name':'Seagal',
    firstname:'Steven',
    badges:['🎥','👮‍♂️','🎸','🥋','🎤']
};
console.log(user);

console.log(user.name);
console.log(user.id);
//*Syntaxe en mode tableau associatif
console.log(user['id']);

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
    entree:"Bassine d'Aioli",
    plat:"Rat Adulte",
    dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));


let nameUser = 'Dong Rodrigue';
let ageUser = 65;
let objetUser = {
    'nom' : nameUser,
    'age' : ageUser,
    'passions': {
        passion1:'Le Drift',
        passion2:'Jonquilles'
    }
};
console.log('objet de utilisateur : ',objetUser);
console.log(objetUser.nom);
console.log(objetUser['passions']);// c le taleau passions
console.log(objetUser.passions.passion2);

objetUser.name = 111;
objetUser.age = 'DonDiegoDelavega';
objetUser.passions.passion2 = 'Le Cinéma';

let listeFilm1 = ['Ultime Décision','Mission Alcatraz','Attack Force'];
for (let i=0;i<3;i++){
    console.log(listeFilm1[i]);
};

//Correction : 
let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? Boucle for, on définit un index (ici c'est i), 
//? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
//? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
for(i=0;i<listeFilm.length;i++){
    console.log('boucle FOR : ',listeFilm[i]);
};


const listeFilm2=['Ultime Décision','Mission Alcatraz','Attack Force'];
listeFilm2.forEach(uneCase=>console.log(uneCase));

const listeFilm3=['Ultime Décision','Mission Alcatraz','Attack Force'];
for (const uneCase1 of listeFilm3){
    console.log(uneCase1);
}; 

//? L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable 
//? (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
//? et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
// on définit une variable temporaire pour parcourir le tableau
for(let unElementTablo of listeFilm){
    console.log('boucle FOR...OF : ',unElementTablo);
};

const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// on définit une variable temporaire pour parcourir le objet :)
for(let cleObjet in userData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
};

//? Parcourir les Objet  (Depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
//? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
const keyUser = Object.keys(userData);
console.log("les clé de l'objet converties en array : ",keyUser);

const valuesUser = Object.values(userData);
console.log("les valeur de l'objet converties en array : ",valuesUser);

const convertedDataUser = Object.entries(userData);
console.log("les entrées de l'objet converties en array : ",convertedDataUser);

//* On récupère TOUS les <p>
const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);
//HTMLCollection a un système d'indice aussi comme les tableau
//console.log(lesTxt[0]);

//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique

const textesTab = Array.from(lesTxt);
console.log(textesTab);



textesTab.map(uneCase => uneCase.innerText = "<h1>LOL JE SUIS HACKERMAN</h1>" );

//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
textesTab.map(function(x,i){
    x.style.color = "red";
    console.log(i)
});
//? bonus syntaxe en ƒ° fléchée
textesTab.map((x,i) => {
    x.style.color = "red";
    console.log(i)
});

//? Bonus II le retour : utilisation de map pour placer un addEventListener sur chaque <p>
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));


//!Quizz : ca bug
let bolide = 'Jaguar';
console.log(bolide);


//! Selectionner des éléments 

// document.body.innerHTML = ''
//? Une fonction type getElement pour récupérer UN élément par son ID 
let specialP = document.getElementById('special');
console.log(specialP);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
let tousLesP = document.getElementsByTagName('p');
console.log('La HTMLCollection',tousLesP);
//? Quand on a une HTMLCollection on peut accèder à un certain élément 
console.log('le 3e <p> dans la HTMLCollection : ',tousLesP[2]);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine class dans une HTMLCollection
let tousLesSuper = document.getElementsByClassName('super');
console.log(tousLesSuper);
console.log(tousLesSuper[1]);

let tousLesSuperMaisLePremmierEnFait = document.getElementsByClassName('super')[0];
console.log('tousLesSuperMaisLePremmierEnFait',tousLesSuperMaisLePremmierEnFait);

//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
let lePremierP = document.querySelector('p');
console.log('lePremierP via querySelector : ',lePremierP);

//? Une fonction type querySelector pour récupérer UN élément par son ID
let pSpecial = document.querySelector('#special');
console.log('pSpecial querySelector + ID',pSpecial);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
let pSuper = document.querySelector('.super');
console.log('pSuper querySelector + class',pSpecial);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
console.log('allParagraphes querySelector + balise',allParagraphes);
console.log('allParagraphes mais on prend le 2e',allParagraphes[1]);


//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes1 = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
//document.body.insertBefore(allParagraphes[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
// laDiv.appendChild(allParagraphes[0]);

// //! On peut aussi supprimer un élément du DOM
//document.body.removeChild(allParagraphes[9]);


//! Créer des elements de texte
const newTxt = document.createTextNode('DU texte Youhouuuuu');
document.body.append(newTxt); //Créer c'est bien mais il faut placer

//!Créer n'importe quel element HTML
const newH1 = document.createElement('h1');//phase 1 creation
newH1.innerText = "AZERTYUIOP";//phase2 remplissage
document.body.append(newH1);//phase 3 on place dans la page


/*
const div2=document.createElement("div1");
const contenu2 = document.createTextNode ("    name: 'John Doe'")

div2.innerText=
"    name: 'John Doe'",
"email: 'john.doe@example.com",
"age: 25",
"dob: '08/02/1989'",
"active: true"
;
document.body.append(div2);
*/

const userData1 = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

// JS qui va customiser la div du profile utilisateur
let divUser = document.querySelector('.userProfile');
divUser.style.backgroundColor = `background-color: #4158D0`;
divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
divUser.style.color = `white`;
divUser.style.width = '500px';
divUser.style.margin = 'auto';
divUser.style.padding = '2rem';

  //JS crée une image, renseigne la src , modif taille
const imgTemplate = document.createElement('img');
imgTemplate.src = userData1.img;
imgTemplate.style.height = '500px';
imgTemplate.style.width = '500px';
divUser.append(imgTemplate);

  // JS crée le titre du name
const nameTemplate = document.createElement('h1');//phase 1 creation
nameTemplate.innerText = userData1['name'];
divUser.append(nameTemplate);

  // JS crée le titre du email
const emailTemplate = document.createElement('h2');//phase 1 creation
emailTemplate.innerText = userData1.email;
divUser.append(emailTemplate);

  // JS crée le titre du age
const ageTemplate = document.createElement('h2');//phase 1 creation
ageTemplate.innerText = userData1.age;
divUser.append(ageTemplate);

// JS crée le titre du dob
const dobTemplate = document.createElement('h2');//phase 1 creation
dobTemplate.innerText = userData1.dob;
divUser.append(dobTemplate);

// JS crée le titre du active
const activeTemplate = document.createElement('h2');//phase 1 creation
activeTemplate.innerText = userData1.active;
divUser.append(activeTemplate);

/*
const userData2 = {
    name: 'José Garcia',,
};
*/

document.querySelector('.ajoutTextePseudo');

function ajouterTexte (unPseudo,duTexte){
    const newTxt2 = document.createElement('p');
    newTxt2.innerHTML= `<b>${unPseudo}</b> ${duTexte}`;
document.body.append(newTxt2);
};

ajouterTexte('José','Garcia');
ajouterTexte('Grigny','La grande Borne');
ajouterTexte('Roi','Heenok');
ajouterTexte('Dongue','Rodrigue');

// Le nom de la classe commence tjrs par majuscule
class UserProfile {
    // Pas besoin de déclarer function devant le constructor et méthodes
    constructor(nameUser, mailUser, phoneUser) {
      // Attribut en IN MODE
    this.nameUser = nameUser;
    this.mailUser = mailUser;
    this.phoneUser = phoneUser;
      // Attribut en outMode
    this.contact = phoneUser + mailUser;
    this.resume = this.getProfileInfo();
      // this._nom = nom;  
    }
    getProfileInfo() {
    console.log('this ',this);
    return `infos de l'utilisateur : 
    son nom : ${this.nameUser}
    son mail : ${this.mailUser}
    son Tél : ${this.phoneUser}`;
    }
}
/*
const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
exampleUser2.getProfileInfo();

class Imc {
    constructor(nameUser1,weightUser,heightUser){
        this.nameUser1=nameUser1;
        this.weightUser=weightUser;
        this.heightUser=heightUser;
    }
    display() {
        console.log('this',this,);
        console.log (`${this.nameUser1} (${this.weightUser} kgs, ${this.heightUser} M) a un IMC de : ${this.resultImc()};`)
    }
resultImc (){
    console.log('this',this,);
    return (this.weightUser/(this.heightUser*this.heightUser)).toFixed(2);
    };
};

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),
];

list.forEach((uneCase) => uneCase.display());
*/


let firstLink = document.querySelector('a');
console.log(firstLink);
let allLinks = document.querySelectorAll('a');
console.log(allLinks);

let firstTitle = document.querySelector('h1');
console.log(firstTitle);

let firstImg = document.querySelector('img');
console.log(firstImg);

// firstTitle.style.backgroundColor = 'blue';
// firstTitle.style.color = 'beige';

firstTitle.className = 'laClasse';
firstLink.href = 'https://www.google.com'
firstImg.src = 'https://picsum.photos/200/300'

firstImg.addEventListener('click',()=>{
    console.log('CA CLICK A DONF');
});

// * addEventListener - click
//? Mode ƒ° => (anonyme + fléchée) 
let leH1 = document.querySelector('#mainTitle');
let selectTitle = false;
leH1.addEventListener('click',()=>{
    leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events';
    selectTitle = !selectTitle;
});
//? Mode fonction anonyme classique
// leH1.addEventListener('click',function(){
//     leH1.innerText = 'LOL MDR';
// });
//? la fonction est en dehors
// function maModifTitre(){
//     leH1.innerText = 'LOL MDR';
// }

//? On apelle la fonction quand click
// leH1.addEventListener('click',maModifTitre())


const leTitre = document.getElementById('mainTitle');

const lesLiens = document.getElementsByClassName('link-info');
console.log(lesLiens[0]);

lesLiens[0].onclick = function () {

    leTitre.classList.add("maCouleur");
    }
    
    lesLiens[1].onclick = function() {
    
        leTitre.classList.remove("maCouleur");
    }
    
    lesLiens[2].onclick = function() {
    
        leTitre.classList.toggle("maCouleur");
    }

/*
    console.log('ça clique');
});

classList.add("maCouleur");

function anotherClass (){
    div.classList.add("maCouleur")
};
*/

//EXO 24.5 
// ** addEventListener - capter un évènement "click" - coord x - coord y
// ** TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// ** TODO 2: Dans cette fonction on console log unEvent 
//** TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
//** TODO 4: Connaissez-vous des propriétés CSS dans lesquelles on peut se servir des coord du click pour le placer au bon endroit ? 
// ==) X/Y , Left/right, top/bottom

//(pensez aussi à mettre la position de l'image. en absolute) 

document.addEventListener('click', (unEvent)=> {
    console.log(unEvent.offsetX, unEvent.offsetY);
    let img2 = document.createElement("img");
    img2.src = "https://picsum.photos/v2/list?page=2&limit=100";
    img2.style.position = "absolute";
    document.body.appendChild(img2);
});
