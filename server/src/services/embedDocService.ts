import { ChromaClient } from "chromadb";

const embedDocService = async (client: ChromaClient) => {
  const collection = await client.createCollection({ name: "myc" });

  await collection.add({
    ids: ["id1", "id2"],
    documents: ["doc1", "doc2"],
  });
};

export default embedDocService;