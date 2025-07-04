import OpenAI from "openai";

const embedDoc = async (chunk: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: chunk,
    });

    if (!response.data || response.data.length === 0) {
      throw new Error("No embedding data returned from OpenAI");
    }

    return response.data[0].embedding;
  } catch (err) {
    console.error("Error initializing OpenAI client:", err);
  }
};

export default embedDoc;