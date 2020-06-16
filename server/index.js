"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const morgan        = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/")); // access to public folder
app.use(morgan('dev'));

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db");

const DataHelpers = require("./lib/data-helpers.js")(db);


//  define routes that use DataHelpers to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
