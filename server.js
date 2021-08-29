const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use(express.urlencoded({ extended: true })); // : == to the value
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log("now listening on port 3001"));
