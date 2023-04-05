var express = require("express");
const cors = require("cors");
const mysql = require("mysql")

var app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pradeep21@",
  database: "crud",
  port:3306
})

app.get("/", (req, res) => {
  res.send("starting with the webservice in node");
});

app.post("/add", (req, res) => {
  const { id, name, city } = req.body;
  let qry = "insert into student values(?,?,?);";
  con.query(qry, [id, name, city], (err, results) => {
    if (results.affectedRows > 0)
    {
      res.send("Record has been submitted!!");  
    }
  })
})

app.get("/students", (req, res) => {
  let qry2 = "select * from student";
  con.query(qry2, (err, results) => {
    res.send(results);
  })
});

app.get("/update", (req, res) => {
  const { id, name, city } = req.body;
  let qry1 = "update student set name=? , city=? where id=?";
  con.query(qry1, [name, city, id], (err, results) => {
    if (results.affectedRows > 0)
    {
      res.send("Record is updated");  
    }
  })
})

// app.post("/post", (req, res) => {
//   var num1 = req.body.num1;
//   var num2 = req.body.num2;

//   res.json({ answer: num1 + num2 });
// });

app.listen(port, () => {
  console.log("service is up");
});
