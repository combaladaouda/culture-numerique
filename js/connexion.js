

const formulaire = document.querySelector('form');
formulaire.addEventListener('submit',e=> {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const data = new FormData();
    data.append('email',email);
    data.append('password',password);

    console.log(formulaire);
    fetch('https://https://culture-numerique.onrender.com/api/v1/auth/login',{
        method:"POST",
        body:new URLSearchParams(data)
    })
    .then(res =>res.json())
    .then(succes =>{
        console.log('connexion effectuer:',succes);
        if(succes.data){
            alert(succes.message);
            localStorage.setItem('sessions',JSON.stringify(succes.data))
            window.location.href ="../corporate/acceuil.html";
        }else{
            alert(succes.message)
        }
    })
})
const sessions = localStorage.getItem('sessions');

if (sessions !== null) {
    window.location.href = "../corporate/acceuil.html";
}