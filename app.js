const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Homepage</h1> <a href="http://localhost:3000/contact">Go to contact page</a>`
  );
});

app.get("/contact/", (req, res) => {
  res.send(
    `<h1>Contact</h1> <a href="http://localhost:3000/">Go to home page</a>`
  );
});

app.get("/contact/:id", (req, res) => {
  const numberId = Number(req.params.id);
  if (!numberId) {
    res.send(
      `<h1>Ty pomoemu pereputal</h1><a href="http://localhost:3000/contact">Go to contact page</a>`
    );
  } else {
    res.send(
      `<h1>Contact</h1> <p>Parameter: ${numberId}</p> <a href="http://localhost:3000/contact">Go to contact page</a>`
    );
  }
});

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
