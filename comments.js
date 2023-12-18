// Create web server
// 1. Create web server
// 2. Read comments.json
// 3. Convert comments.json to JavaScript object
// 4. Create router
// 5. Create GET route for /comments
// 6. Create POST route for /comments
// 7. Start web server

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Read comments.json
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// 4. Create router
const router = express.Router();

// 5. Create GET route for /comments
router.get('/', (req, res) => {
    res.json(comments);
});

// 6. Create POST route for /comments
router.post('/', (req, res) => {
    // Add comment to comments
    comments.push({
        id: comments.length + 1,
        comment: req.body.comment
    });

    // Write comments to comments.json
    fs.writeFileSync('comments.json', JSON.stringify(comments));

    // Send response
    res.json({
        message: 'Comment added!'
    });
});