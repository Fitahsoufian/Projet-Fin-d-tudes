const express = require('express');
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRouter")
var cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to SuperAcc." });
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use('/api', authRouter)