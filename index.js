const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");


const app = express();
const PORT = 3500;


app.use("/api2", route);
app.use("/api", require("./routes/Create_user.js"));

// DB Connection
mongoose
  .connect("mongodb+srv://shreyasbhatbidara11:shreyas11@cluster0.hu5vlps.mongodb.net/")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
