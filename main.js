// the client requests a question at /question?id=1
// the server sends back a JSON object of the question
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// add url parser
app.use(bodyParser.urlencoded({ extended: false }));

// a list of questions with true or false answers
const questions = [
    {id: 1, question: 'vegitables are the best food', answer: true},
    {id: 2, question: 'the microbiome is huge', answer: true},
    {id: 3, question: 'the human body is made up of millions of cells', answer: true}
];

// handle the question route
app.get('/question/:id', (req, res) => {
        console.log('request recieved');
        // extract the id from the request params
        const id = req.params.id;
        // convert the id to a number
        const idNum = parseInt(id);
        // find the question in the list
        const question = questions.find(q => q.id === idNum);
        // set the content type to json
        res.setHeader('Content-Type', 'application/json');
        // send the question back to the client
        res.json(question);
});

// start the app
app.listen(8080, () => {
    console.log('Server started on port 3000');
})

