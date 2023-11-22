import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);


//const CONNECTION_URL = 'mongodb+srv://Memo:somakun_68@cluster0.wed9vey.mongodb.net';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(()=> app.listen(PORT, () => console.log('Server Running on Port: http://localhost',{PORT})))

//Deprecated Code Below
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedToppology: true})
//     .then(()=> app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
//     .catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);
