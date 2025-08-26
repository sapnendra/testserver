import 'dotenv/config'
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Route</h1>");
})

app.get("/login", (req, res) => {
    res.send("<h1>login route</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})