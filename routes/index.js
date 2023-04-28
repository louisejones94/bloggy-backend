// Require necessary NPM packages
const express = require('express')

// Instantiate a router (a mini app that only handles routes)
const router = express.Router()

/**
 * Action:          INDEX           Show all the information
 * Method:          GET
 * URI:             /
 * Description:     Root route      Greet users to the app
*/
router.get('/', (req,res) => {
    res.json({message: 'Welcome to Bloggy'})
})

// Export the router so we can use it in the server.js file
module.exports = router