import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sahoosomanatha2:SOMU@cluster0.ux0fgkn.mongodb.net/foodie').then(() => console.log("database connection sucess"));
}