var express = require("express");
const cors = require("cors");

var app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("starting with the webservice in node");
});

app.post("/post", (req, res) => {
  var num1 = req.body.num1;
  var num2 = req.body.num2;

  res.json({ answer: num1 + num2 });
});

app.listen(port, () => {
  console.log("service is up");
});
