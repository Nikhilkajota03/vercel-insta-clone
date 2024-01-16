const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3001"],
    method: ["GET", "POST"],
    credentials: true,
  })
);





require('./models/model');
require('./models/post');


app.use(express.json());


app.use(require("./routes/auth"));
app.use(require("./routes/createPost"));
app.use(require("./routes/user"));

app.use("/", (req,res)=>{
    res.send("server running");
})




mongoose
  .connect("mongodb+srv://nikhilkajota9413750125:nikhilkajota@cluster0.jocvnsn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });




app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})
