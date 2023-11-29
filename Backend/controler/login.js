import User from "../model/user.js";
import bcrypt from "bcrypt";
class LoginControler{
    static async login(requete, reponse){
        try {
            if(!requete.body.email || !requete.body.password) return reponse.status(401).json({message:'Tous les champs sont obligatoire'});
            const user = await User.findOne({email:requete.body.email});
            if(!user){
                return reponse.status(202).json({message:"email incorrecte !"});
            } 
            
            else{
                const passwordHach = await bcrypt.compare(requete.body.password,user.password)
                const userData = {
                    nom: user.nom,
                    email:user.email
                }

            if(!passwordHach) {return reponse.status(202).json({message:"Mot de passe incorrecte !"})};
                return reponse.status(202).json({message:'Connexion effectuer !', data:userData});  
            }
        } catch (error) {
            reponse.status(500).json({message:'Erreur survenue', error});
        }
    }
}

export default LoginControler;

