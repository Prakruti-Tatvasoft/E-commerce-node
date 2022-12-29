import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/index.route.js';
import './config/dbConfig.js';
import cors from 'cors'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import router file
app.use('/', routes);
const corsConfig = {
  origin: [
    'http://localhost: 3000'
  ]
}
app.use(cors(corsConfig))
// set port, listen for request
const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


