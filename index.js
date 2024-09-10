const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

mydata = {
  subject: "ITE314",
  exam: "P2",
  node: "NODEJS",
};

app.get("/", (req, res) => {
  res.send(`Welcome to Kurt's exam server`);
});

app.get("/subject", (req, res) => {
  res.send(mydata.subject);
});

app.get("/exam", (req, res) => {
  res.send(mydata.exam);
});

app.get("/node", (req, res) => {
  res.send(mydata.node);
});

app.get("/mydata", (req, res) => {
  res.send(mydata);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
