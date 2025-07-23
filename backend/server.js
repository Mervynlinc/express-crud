import express from "express";
import path from "path";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = process.env.PORT || 3001;

const db = mysql.createConnection({
    user: "root",
    hostname: "localhost",
    database: "learn_express",
    password: ""

})

app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err,result) =>{
        if(err){
            console.log(err);
        }
        res.json(result);
    })
})

app.post("/add-user",  (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: "Error adding user"});
        } else {
            res.status(201).json({message: "User added successfully"});
        }
    });

})

app.listen(port, () => {console.log(`Server started on port ${port}`)});