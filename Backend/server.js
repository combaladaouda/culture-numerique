import express from "express";
import cors from "cors";
import bdConnect from "./database/bd.js";
import RouterUser from "./route/user.js";
import RouterLogin from "./route/login.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/v1/user', RouterUser);
app.use('/api/v1/auth', RouterLogin);


const port = process.env.PORT || 3010;

bdConnect()
  .then(() => {
    console.log("Connexion effectuée avec succès");
    app.listen(port, () => {
      console.log("Serveur lancé sur le port " + port);
    });
  })
  .catch((error) => {
    console.log("Connexion échouée", error);
  });

