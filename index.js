import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import tutorialsRoutes from "./routes/tutorials.js"
import mongoose from "mongoose"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/tutorials", tutorialsRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to our api")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => app.listen(PORT,() => console.log(`Server is running on port ${PORT} and database is connected`)))
  .catch((error) => console.log(error.message)) 

  export default app;
