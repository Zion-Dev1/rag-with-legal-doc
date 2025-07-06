import client from "./chromaClient";
import { OpenAIEmbeddingFunction } from "@chroma-core/openai";
import dotenv from "dotenv";

dotenv.config();

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
