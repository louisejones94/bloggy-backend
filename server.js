// Require necessary NPM packages
const express = require('express')
const mongoose = require ('mongoose')

// Instantiate express application object
const app = express()

// Define port for the API to run on
// Try to find an environment first, if not then go for 5000
const port = process.env.PORT || 5004

// Start the server and listen for requests on the given port
app.listen(port, () => console.log(`bloggy is listening on port ${port}`))