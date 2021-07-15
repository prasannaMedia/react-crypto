const express = require("express");
const app = express();
const dbConnect = require("./config/db");
const path = require("path");
dbConnect();
const PORT = process.env.PORT || "5000";
var cors = require("cors");

app.listen(PORT, () => console.log(`server connected at port no ${PORT}`));
app.use(express.json({ extended: false }));
app.use(cors());
app.get("/",(req,res)=>{
  res.send("hello")
})
app.use("/api/v1/posts", require("./routes/api/posts"));
