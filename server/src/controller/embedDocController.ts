import { Request, Response } from "express";
import { join } from "path";
import chroma from "../services/chromaClient";
import readDoc from "../services/readDocService";

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
      collection.add({ ids: ["pdf1"], documents: [pdfText] });
    }

    return res.status(200).json({ msg: "Document embedded successfully." });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default embedDocController;
