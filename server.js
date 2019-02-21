const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/status", (req, res) => {
  const color = Math.floor(Math.random() * 2) > 0 ? "yellow" : "green";
  res.send({ color }).end();
});

app.get("/status/:id", (req, res) => {
  const pod = {};
  pod.color = Math.floor(Math.random() * 2) > 0 ? "yellow" : "green";
  pod.id = req.params.id;
  res.json(pod);
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
