const express = require('express');
const app = express();
const port = 4000
  const express = require("express");
  const apiRoutes = require("./routes/apiRoutes");
  const htmlRoutes = require("./routes/htmlRoutes");

  app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
  });
  
  // Initialize the app and create a port
  const app = express();
  const PORT = process.env.PORT || 8080;
  
  // Set up body parsing, static, and route middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use("/api", apiRoutes);
  app.use("/", htmlRoutes);
  var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("path/to/serviceAccountKey.json");

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "my-service-worker"
  }
});

// The app only has access as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/some_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("path/to/serviceAccountKey.json");

// Initialize the app with a null auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com",
  databaseAuthVariableOverride: null
});

// The app only has access to public data as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/public_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
  
  // Start the server on the port
  app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));