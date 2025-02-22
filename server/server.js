const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const employeeModel = require("./models/Employee");

const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION;

app.use(express.json());
app.use(cors());
mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.post("/register", (req, res) => {
  employeeModel
    .create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    employeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if (user.password === password) {
                res.json('Success')
            }else{
                res.json('Password Incorrect')
            }
        }else{
            res.json('user doesnot exist')
        }
    })
})

app.listen(PORT, () => console.log(`Server is listning at PORT: ${PORT}`));
