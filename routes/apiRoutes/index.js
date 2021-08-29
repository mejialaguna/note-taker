// const path = require("path");
// const fs = require('fs');
// var uniqid = require("uniqid");
// const router = require("express").Router();

// router.get("/api/notes", (req, res) => {
//   // read file and send it to the array to the front end (db,json)
//   fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", (err, data) => {
//     if (err) {
//       res.status(500).json(err);
//       return;
//     }
//     //JSON || Json.stringify = build in object into java script
//     res.json(JSON.parse(data));
//   });
// });

// router.post("/api/notes", (req, res) => {
//   // read the note , write the note send file..
//   fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
//     if (err) {
//       res.status(500).json(err);
//       return;
//     }

//     const oldNotes = JSON.parse(data);

//     let newNote = req.body;
//     newNote.id = uniqid();
//     // oldNotes.unshift(newNote);

//     fs.writeFile(
//       path.join(__dirname, "db/db.json"),
//       JSON.stringify([newNote, ...oldNotes]),
//       (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         //file written successfully
//       }
//     );
//     res.json(oldNotes);
//   });
// });

// router.delete("/api/notes/:id", (req, res) => {
//   fs.readFile(path.join(__dirname, "db/db.json"), "utf8", (err, data) => {
//     if (err) {
//       res.status(500).json(err);
//       return;
//     }
//     //JSON || Json.stringify = build in object into java script
//     let oldNotes = JSON.parse(data);
//     let newNotes = oldNotes.filter((note) => note.id !== req.params.id);

//     fs.writeFile(
//       path.join(__dirname, "db/db.json"),
//       JSON.stringify(newNotes),
//       (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//     res.json(newNotes);
//   });
// });

// module.exports = router; 