import  express  from "express";
import LoginControler from "../controler/login.js";
const RouterLogin = express.Router();

RouterLogin.use("/login", LoginControler.login);


export default RouterLogin;


