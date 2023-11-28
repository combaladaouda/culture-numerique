import User from "../model/user.js";
import bcrypt from "bcrypt";
 
class UserControler{
    static async create(requete, reponse){
        try {
            console.log(requete.body);
            const {nom,email,password} = requete.body;
            if(!nom || !email || !password) return reponse.status(401).json({message:'Tous les champs sont obligatoire'});
            const user = await User.findOne({email:requete.body.email});
            if(user) return reponse.status(202).json({message:"l'utilisateur existe !"});

            //MASQUER LE MOT DE PASSE
            const hashage = await bcrypt.hash(password,10);
            requete.body.password = hashage; 
            //FIN DE LA LIGNE
            const newUser = await User.create(requete.body);
            return reponse.status(202).json({message:'Utilisateur ajouter !', data:newUser});            

        } catch (error) {
            reponse.status(500).json({message:'Erreur survenue', error});            
        }
    }
}

export default UserControler; 

