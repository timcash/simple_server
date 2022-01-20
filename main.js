// the client requests a question at /question?id=1
// the server sends back a JSON object of the question
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
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
    // extract the id from the request params
    const id_as_string = req.params.id;
    // convert the id to a number
    const id_from_browser = parseInt(id_as_string);
    // log the id received from the browser
    console.log(`id from browser: ${id_from_browser}`);
    // find the question in the list
    const question = questions.find(q => q.id === id_from_browser);
    // set the content type to json
    res.setHeader('Content-Type', 'application/json');
    // send the question back to the client
    res.json(question);
});

// get the highscrore route
app.get('/highscore', (req, res) => {
    console.log('highscore request recieved');
    // set the content type to json
    res.setHeader('Content-Type', 'application/json');
    // send the highscore back to the client
    res.json({highscore: 100});
});

const PORT = 8080;
// start the app
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})

