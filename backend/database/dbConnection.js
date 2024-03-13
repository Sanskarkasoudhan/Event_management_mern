import mongoose from "mongoose";



export const dbConnection =() => {
mongoose.connect("mongodb+srv://sanskar2000:sanskar2000@cluster0.qun3nqk.mongodb.net/?retryWrites=true",{dbName: "MERN_STACK_EVENT_MESSAGE"})
.then(() => {
    console.log("Database connected");
    
}).catch((err)=>{
    console.log("some error occurend");
})

    
}