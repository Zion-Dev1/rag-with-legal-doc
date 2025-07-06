import { Request, Response } from "express";
import OpenAI from "openai";

const genResponseController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that will use the provided context to answer questions about a legal case.",
        },
        {
          role: "assistant",
          content: "Write a one-sentence bedtime story about a unicorn.",
        },
        {
          role: "user",
          content: "Write a one-sentence bedtime story about a unicorn.",
        },
      ],
    });

    return res
      .status(200)
      .json({
        msg: "Response generated successfully.",
        results: completion.choices[0].message.content,
      });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default genResponseController;
