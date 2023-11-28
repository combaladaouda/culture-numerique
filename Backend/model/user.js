import { Schema,model } from "mongoose";
const User = new Schema( {
    nom:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
},
{timestamps:true});
export default model('user',User);


