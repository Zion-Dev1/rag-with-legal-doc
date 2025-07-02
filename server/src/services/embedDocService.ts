import { ChromaClient } from "chromadb";
import { join } from "path";
import getDocService from "./getDocService";

const embedDocService = async (client: ChromaClient) => {
  const collection = await client.createCollection({ name: "myc" });
  const pdfPath = join(__dirname, "../../../data/biologynotes.pdf")

  await getDocService(pdfPath)

  //   await collection.add({
  //     ids: ["id1", "id2"],
  //     documents: ["doc1", "doc2"],
  //   });
};

export default embedDocService;
