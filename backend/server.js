const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formDB");

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  age: String,
  gender: String,
  city: String,
  country: String,
  skills: String
});

const Form = mongoose.model("Form", formSchema);

app.post("/submit", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.json({ message: "Form saved!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving form" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
