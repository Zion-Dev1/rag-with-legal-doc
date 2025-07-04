// chromaClient.js
import { ChromaClient } from "chromadb";

const client = new ChromaClient();

const ready = (async () => {
  const collection = await client.getOrCreateCollection({ name: "myc" });
  return { client, collection };
})();

export default ready;
