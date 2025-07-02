import express from 'express';
import dotenv from 'dotenv';

import { ChromaClient } from "chromadb";
import embedDocService from './services/embedDocService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 
const client = new ChromaClient();

app.use(express.json());

app.get('/embedPdf', async (req, res) => {
    await embedDocService(client)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
