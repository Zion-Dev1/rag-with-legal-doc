// chromaClient.js
import { ChromaClient } from "chromadb";

const initChroma = async () => {
  const client = new ChromaClient();
  const collection = await client.createCollection({ name: "myc" });

  return { client, collection };
};

export default initChroma;
