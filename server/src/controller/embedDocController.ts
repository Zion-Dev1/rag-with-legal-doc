import { Request, Response } from "express";
import chroma from "../chroma-db/chromaCollection";
import readDoc from "../services/readDocService";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import createIds from "../utils/createIds";

const embedDocController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { collection } = await chroma;

    if (!collection) {
      return res
        .status(500)
        .json({ error: "Error retrieving ChromaDB collection." });
    }

    const pdfText = await readDoc();

    if (!pdfText) {
      return res.status(404).json({ error: "Document not found or empty." });
    } else {
      const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });

      const output = await splitter.splitText(pdfText);

      await collection.add({ ids: createIds(output.length), documents: output });
    }

    return res.status(200).json({ msg: "Document embedded successfully." });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default embedDocController;
