// Require necessary NPM packages - we only need mongoose
const mongoose = require ('mongoose')

// Define Article schema
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    author: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    publishedOn: { type: Date, default: Date.now } 
}, {
    timestamps: true // Creates two datetime fields: createdAt and updatedAt
})

// Compile the model based on the schema
const Article = mongoose.model('Article', articleSchema)

// Export the model
module.exports = Article