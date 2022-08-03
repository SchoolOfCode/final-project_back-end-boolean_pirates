import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import tutorialsRoutes from "./routes/tutorials.js"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/tutorials", tutorialsRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to our api")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

