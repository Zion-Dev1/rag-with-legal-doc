import { Request, Response } from "express";
import initChroma from "../services/chromaClient";

const queryDocController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { collection } = await initChroma();

    if (!collection) {
      return res
        .status(500)
        .json({ err: "Error retrieving ChromaDB collection." });
    }

    const query = req.body.query;

    if (typeof query !== "string" || query.trim() === "") {
      return res.status(400).json({ err: "Invalid query provided." });
    }

    const results = await collection.query({
      queryTexts: [query],
      nResults: 2,
    });

    console.log(results);

    return res
      .status(200)
      .json({ msg: "Document queried successfully.", results });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default queryDocController;
