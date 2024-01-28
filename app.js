const express = require("express")
const fs = require("fs")

const app = express()

// register view engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.sendFile("./public/index.html", { root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile("./public/about.html", { root: __dirname })
})

app.get("/about-me", (req, res) => {
    res.redirect("/about")
})

app.use((req, res) => {
    res.sendFile("./public/404.html", { root: __dirname })
})

app.listen("3000", () => console.log("Server running..."))