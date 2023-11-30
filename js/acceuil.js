//variable pour la session
const sessions = localStorage.getItem('sessions');

//convertir la session en json
const objet = JSON.parse(sessions)

//variable pour la deconnexion
let deconnexion = document.querySelector('button');

//variable pour afficher le nom
let nom = document.querySelector(".aff");

//console.log('ma sessions :',typeof(sessions));

//condifion pour verifier si la session est vide
if (sessions === null) {
    window.location.href = "../corporate/connexion.html";
}
//afficher le nom
else{
    nom.innerHTML = objet.nom
}

//Session de deconnexion
deconnexion.addEventListener('click', (e)=>{
    localStorage.removeItem('sessions')
    //window.location.href = "../corporate/connexion.html";
    window.location.href = "../index.html";
})
