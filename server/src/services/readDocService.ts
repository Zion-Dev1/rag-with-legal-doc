import { readFileSync } from "fs";
import pdf from "pdf-parse";

const readDoc = async (filePath: string) => {
  try {
    const dataBuffer = readFileSync(filePath);
    const data = await pdf(dataBuffer);

    return data.text;
  } catch (err) {
    console.error(err);
  }
};

export default readDoc;
