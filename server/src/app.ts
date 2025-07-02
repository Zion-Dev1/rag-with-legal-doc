import express from 'express';
import dotenv from 'dotenv';

import { ChromaClient } from "chromadb";

const app = express();
const PORT = process.env.PORT || 3000; 
const client = new ChromaClient();

app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hi, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
