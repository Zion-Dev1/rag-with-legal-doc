import { Request, Response } from "express";
import queryDocService from "../services/queryDocService";
import genResponseService from "../services/genResponseService";

const genResponseController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const query = req.body.query;
    if (typeof query !== "string" || query.trim() === "") {
      return res.status(400).json({ error: "Invalid query provided." });
    }

    const results = await queryDocService(query)
    const context = results?.documents[0]

    const response = await genResponseService(context, query);

    return res
      .status(200)
      .json({
        msg: "Response generated successfully.",
        results: response
      });
  } catch (err) {
    return res.status(500).json({ err: (err as Error).message });
  }
};

export default genResponseController;
