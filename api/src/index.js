import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();  

// Setup mongoose
try {
    await mongoose.connect('mongodb:localhost:27017', {
    dbName: 'furnitureDB'
    });
    console.log('Connected to database successfully.');
} catch (error) {
    console.error('Error connecting to database:');
    console.error(error.message);
}


//Add CORS
app.use(cors());

//Add JSON body parser
app.use(express.json());

//Add routes
app.use(routes);

app.listen(3030, () => 'Server is listening on http://localhost:3030...');