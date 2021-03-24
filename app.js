let express = require("express");
let path = require("path");
let app = express();

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(3000, () => {
  console.log("listening on 3000...");
});
