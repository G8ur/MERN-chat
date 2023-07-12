const express = require("express");
const bcryptjs = require("bcryptjs")
// connectin g to db
require("./db/connection");

// calling the user modles

const Users = require("./models/Users");

const app = express();

// App use
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.write("Welcome");
  res.end();
});

app.post("/api/register", async(req,res) =>{
try {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(404).send("Plz fill all the required fields");
  } else {
    const isAlreadyExist = await Users.findOne({ email });
    if (isAlreadyExist) {
      res.status(400).send("User already exists");
    } else {
      const newUser = new Users({ fullName, email });
      bcryptjs.hash(password, 10,(err, hashedPassword) =>{

        newUser.set('password', hashedPassword);
        newUser.save();
        next();

      })
      return res.status(200).send("User registered succsefully")
    }
  }
} catch (error) {}
})
app.listen(port, () => {
  console.log("listenin on port" + port);
});
