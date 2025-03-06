const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 9000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html", "index.html"));
}); 


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))