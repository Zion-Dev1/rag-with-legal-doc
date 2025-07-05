import { ChromaClient } from "chromadb";
import { OpenAIEmbeddingFunction } from "@chroma-core/openai";

const client = new ChromaClient();

const ready = (async () => {
  const collection = await client.getOrCreateCollection({
    name: "myc",

    embeddingFunction: new OpenAIEmbeddingFunction({
      modelName: "text-embedding-3-small",
    }),
  });

  return { client, collection };
})();

export default ready;
