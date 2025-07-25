import express from "express";
import cors from "cors";
import mysql from "mysql";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
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

app.get("/:id", (req, res) => {
    const userId = req.params.id;
    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: "Error fetching user"});
        } else if (result.length === 0) {
            res.status(404).json({message: "User not found"});
        } else {
            res.json(result[0]);
        }
})})

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

app.delete("/:id", (req, res) => {
    const userId = req.params.id;
    db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: "Error deleting user"});
        } else if (result.affectedRows === 0) {
            res.status(404).json({message: "User not found"});
        } else {
            res.status(200).json({message: "User deleted successfully"});
        }
    });
})

app.put("/:id", (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    db.query(sql, [name, email, userId], (err, result) =>{
        if (err){
            console.error(err);
            res.status(500).json({message: "Error updating user"});
        }else if (result.affectedRows === 0) {
            res.status(404).json({message: "User not found"});
        } else {
            res.status(200).json({message: "User updated successfully"});
        }
    })})


app.listen(port, () => {console.log(`Server started on port ${port}`)});