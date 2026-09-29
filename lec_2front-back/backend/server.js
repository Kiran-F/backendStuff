// const express = require ('express') //common js format: code is all synchronous
// cors provide safety to your application
import express from 'express' 
//module js format: this works asynchronously, have to declare "type": "module" in package.json otherwise it gives error

const app = express();

app.use(express.static('dist')) //move the dist folder created after "npm run build" from frontend, this will render the frontend without deploying backend separately. 
// Static assets served, no CI/CD pipeline, no separate deployment cost, frontned-backend in one folder. Con: if some update in frontend, the change will not directly propagate here, again dist will be created and moved in backend folder
// if you do this, don't write the '/' thing for the backend (the following lines)


// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

//'/api/jokes', standardizing instead of writing the whole url http://localhost:3000/api/jokes. It gives error 404, to fix this we use prox//'/api/jokes', standardizing instead of writing the whole url http://localhost:3000/api/jokes. It gives error 404, to fix this we use proxy using vite in vite.config.js file
app.get('/api/jokes', (req, res) => { 
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});