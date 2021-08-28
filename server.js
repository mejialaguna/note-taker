const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true})) // : == to the value
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes" , (req ,res) => {
    // read file and send it to the array to the front end (db,json)
    res.json()
})

app.post("/api/notes" , (req ,res) => {
 // read the note , write the note send file..
    console.log(req.body);  
})

app.delete("/api/notes/:id" , (req ,res) => {

    console.log(req.params.id)
})

app.listen(PORT , () => console.log("now listening on port 3001"));