const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/v1/dab", (req, res) => {
  res.status(200).json({ message: "DAB is working", app: "DAB API" });
});

app.post("/api/v1/dab", (req, res) => {
  res.send("Done");
});

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
