// Require necessary NPM packages
const express = require('express')

// Require Article mongoose model
const Article = require ('../models/article')

// Instantiate a router (a mini app that only handles routes)
const router = express.Router()

/**
 * Action:          INDEX
 * Method:          GET
 * URI:             /api/articles       Tells you this will return JSON not HTML
 * Description:     Get all articles
 */

router.get('/api/articles', (req,res) => {
    Article.find({}) 
        // Return all articles as an array
        .then((allArticles) => {
            res.json({ articles: allArticles })
        })
        // Catch any errors that might occur
        .catch((error) => {
            // Send internal server error status message and return the error
            // We give it the key of error so that we can check the response to see if there is an error key
            res.status(500).json({ error: error })
        })
})

/**
 * Action:          SHOW
 * Method:          GET
 * URI:             /api/articles/545345hb48345634hkb4
 * Description:     Get an article by articleID
 */



/**
 * Action:          DESTROY
 * Method:          DELETE
 * URI:             /api/articles/545345hb48345634hkb4
 * Description:     Delete an article with articleID
 */



/**
 * Action:          UPDATE
 * Method:          PUT/PATCH
 * URI:             /api/articles/545345hb48345634hkb4
 * Description:     Update an article with articleID
 */



/**
 * Action:          CREATE
 * Method:          POST
 * URI:             /api/articles
 * Description:     Create a new article
 */



// Export the router so we can use it in the server.js file
module.exports = router