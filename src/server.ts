import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Reza");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
