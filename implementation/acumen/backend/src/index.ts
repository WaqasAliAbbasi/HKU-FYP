import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  console.log("a");
  res.send("The sedulous hyena ate the antelope!");
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
