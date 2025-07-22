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

app.listen(port, () => {`Server started on port ${port}`});