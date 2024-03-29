let formulaire = document.getElementsByTagName("form")[0];
formulaire.addEventListener('submit', async (e) =>{
    e.preventDefault();
    if(e.target.password.value != e.target.cpassword.value) return alert('Mot de passe incorrecte')
    const data = new FormData();
    let allInput = e.target.querySelectorAll('input');
    
    allInput.forEach(element=> data.append(element.name, element.value));
    fetch('https://culture-numerique.onrender.com/api/v1/user/create',{
        method:"POST",
        body:new URLSearchParams(data) 
    })
    .then(res =>res.json())
    .then(succes =>{
        if(succes.data){
            alert(succes.message);
            window.location.href="../corporate/connexion.html"
        }else{
            alert(succes.message)
        }
    })
})

//verifier si la session n'est pas vide

const sessions = localStorage.getItem('sessions');

if (sessions !== null) {
    window.location.href = "../corporate/acceuil.html";
}
