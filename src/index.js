import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : "./.env"
})




connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started on port ${process.env.PORT || 3000}`);
    });
    // Start your server or application logic here
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
})


























// const app = express();

// ( async () => {
//     try {
//        await mongoose.connect('${process.env.MONGODB.URL}/${DB_NAME}')
//        app.on("error" , () => {
//         console.log("Failed to start the server", error);
//         throw error;
//        })

//        app.listen(process.env.PORT , () => {
//         console.log(`Server started on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }


// } )()