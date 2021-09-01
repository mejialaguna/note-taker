const fs = require("fs");
const path = require("path");
var uniqid = require("uniqid");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true })); // : == to the value
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  // read file and send it to the array to the front end (db,json)
  fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    //JSON || Json.stringify = build in object into java script
    res.json(JSON.parse(data));
  });
});

app.post("/api/notes", (req, res) => {
  // read the note , write the note send file..
  fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    const oldNotes = JSON.parse(data);

    let newNote = req.body;
    newNote.id = uniqid();
    oldNotes.unshift(newNote);

    fs.writeFile(
      path.join(__dirname, "db/db.json"),
      JSON.stringify(oldNotes),
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        //file written successfully
        res.json(oldNotes);
      }
    );
  });
});

app.delete("/api/notes/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    //JSON || Json.stringify = build in object into java script
    let oldNotes = JSON.parse(data);
    let newNotes = oldNotes.filter((note) => note.id !== req.params.id);

    fs.writeFile(
      path.join(__dirname, "db/db.json"),
      JSON.stringify(newNotes),
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
    res.json(newNotes);
  });
});

// route to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// route to notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, () => console.log("now listening on port 3001"));
