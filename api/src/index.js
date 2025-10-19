import express from 'express';


const app = express();  

app.get('/', (req, res) => {
    console.log('API works!');
    res.send('API works!');
});

app.listen(3030, () => 'Server is listening on http://localhost:3030...');