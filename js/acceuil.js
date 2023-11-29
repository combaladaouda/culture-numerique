const sessions = localStorage.getItem('sessions');
//convertir la session en json
const objet = JSON.parse(sessions)
let deconnexion = document.querySelector('button');
let nom = document.querySelector(".aff");

console.log('ma sessions :',typeof(sessions));
if (sessions === null) {
    window.location.href = "../corporate/connexion.html";
}
//afficher
else{
    nom.innerHTML = objet.nom
}

deconnexion.addEventListener('click', (e)=>{
    localStorage.removeItem('sessions')
    window.location.href = "../corporate/connexion.html";
})
