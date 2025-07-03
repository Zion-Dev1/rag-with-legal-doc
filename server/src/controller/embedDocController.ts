import { Request, Response } from "express";
import { join } from "path";
import client from "../services/chromaClient";
import getDocService from "../services/readDocService";

const embedDocController = async (req: Request, res: Response): Promise<any> => {
  try {
    // const collection = await client.createCollection({ name: "myc" })

    const pdfPath = join(__dirname, "../../../data/biologynotes.pdf");
    const pdf = await getDocService(pdfPath);

    if (!pdf) {
      return res.status(404).json({ error: "Document not found or empty." });
    }

    return res.status(200).json({
      message: "Document embedding started successfully.",
      pdf
    });
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};

export default embedDocController;
