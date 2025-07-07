# ⚖️ LegalRAG — AI-Powered Legal Query Tool

This is a full-stack application designed to experiment with **Retrieval-Augmented Generation (RAG)** using OpenAI's API.ts contents — with answers grounded in the document itself.

This project was mainly built to **practice working with RAG pipelines**, text embeddings, and custom vector stores.

![image](https://github.com/user-attachments/assets/0e41fb31-cb7b-4bc3-b2f1-d0cd610cee51)

---

## 📚 Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Using the Project](#using-the-project)
- [How It Works](#how-it-works)
- [Why This Project](#why-this-project)

---

## 💻 Tech Stack

### Frontend
- **React** (with TypeScript)
- **Material UI (MUI)** for styling and layout
- **Zustand** for global state management

### Backend
- **Node.js + Express** (TypeScript)
- **ChromaDB** (local vector store for embeddings)
- **OpenAI API** (embeddings + completion)

### Bonus Tools
- **Langchain** for chunking + embedding pipeline
- **PDF parsing** for ingesting legal documents

---

## ⚙️ Setup

If you want to run this project locally, follow the steps below.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Zion-Dev1/legalrag.git
   cd legalrag
   ```
   
2. Setup the client folder.

   ```bash
   cd client
   npm install
   ```

3. Setup the server folder
   ```bash
   cd ../server
   npm install
   ```
   
   Then create a `.env` file in this folder and paste this:

   ```
   PORT=3000
   OPENAI_API_KEY=<paste your key here>
   ```

4. Setup the chroma-db server folder with a virtual environment

   ```bash
   cd ../chromadb-server

   python -m venv env
   env\Scripts\activate.bat

   pip install -r requirements.txt
   ```

4. Go to [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Using the Project

1. Click **“Load Legal Document”** — this will parse, chunk, and embed the legal document using OpenAI’s embedding API + ChromaDB.

6. Type a question about the document. The RAG pipeline will:
   - Embed your question
   - Retrieve relevant chunks from the vector store
   - Inject those into a prompt
   - Use GPT to generate an answer grounded in the doc

---

## 🧠 How It Works

Here’s a breakdown of the RAG flow:

1. **Document Processing**
   - Langchain splits the legal document into manageable chunks
   - Each chunk is embedded with OpenAI’s embedding API
   - Stored into ChromaDB with metadata

2. **Query Time**
   - User asks a question → question is embedded
   - Top-k similar chunks are retrieved from the vector store
   - Retrieved context is inserted into a prompt template
   - GPT generates a context-aware response

---

## 🎯 Why This Project?

I built this to **practice the RAG architecture** in a realistic use case — grounding a language model in legal content.  
Rather than rely on finetuning or long prompts, I wanted to build something scalable using embeddings + retrieval.

It helped me get hands-on with:
- Langchain
- Embedding APIs
- Vector databases
- Prompt templating
