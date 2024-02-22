const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/StudentModel");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/CodeBlind');

// Endpoint to fetch all students
app.get('/students', (req, res) => {
    StudentModel.find()
        .then(students => {
            res.json(students);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get('/students/:id', (req, res) => {
    const studentId = req.params.id;
    StudentModel.findById(studentId)
        .then(student => {
            if (student) {
                res.json(student);
            } else {
                res.status(404).json({ message: "Student not found" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Internal server error" });
        });
});


app.post('/register', (req, res) => {
    StudentModel.create(req.body)
        .then(students => {
            res.json(students);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    StudentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password == password) {
                    res.json("Success");
                } else {
                    res.json("The password is Incorrect");
                }
            } else {
                res.json("No record existed");
            }
        });
});

app.listen(5000, () => {
    console.log("Server is running");
});
