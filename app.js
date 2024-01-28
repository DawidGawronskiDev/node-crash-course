const express = require("express")
const fs = require("fs")

const app = express()

// register view engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { title: "Home" })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About" })
})

app.get("/about-me", (req, res) => {
    res.redirect("/about")
})

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new Blog" })
})

app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})

app.listen("3000", () => console.log("Server running..."))