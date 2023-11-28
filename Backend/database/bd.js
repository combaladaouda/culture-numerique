import mongoose from "mongoose";
const bdConnect = ()=>mongoose.connect("mongodb+srv://combaladaouda60:cultures@cluster0.fav8d2j.mongodb.net/?retryWrites=true&w=majority")

export default bdConnect;


