import OpenAI from "openai";
import createContext from "../utils/createContext";

const genResponseService = async (
  context: string[],
  query: string
): Promise<any> => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const contextList = createContext(context);

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",

      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that will use the provided context to answer questions about a legal case. The answers should be 2 to 5 sentences long. Try to make it as understable to a layman as possible",
        },
        ...contextList,
        {
          role: "user",
          content: query,
        },
      ],
      temperature: 0.7,
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error("No response from OpenAI API.");
    }

    return completion.choices[0].message.content;
  } catch (err) {
    throw new Error(`Response generation failed: ${(err as Error).message}`);
  }
};

export default genResponseService;
