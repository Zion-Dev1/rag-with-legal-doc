import { ChromaClient } from "chromadb";

// make seperate function to create and call client
const client = new ChromaClient();

const ready = (async () => {
  const collection = await client.getOrCreateCollection({ name: "myc" });
  return { client, collection };
})();

export default ready;
