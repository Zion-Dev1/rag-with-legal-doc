import { readFileSync } from "fs";
import { join } from "path";
import pdf from "pdf-parse";

const readDoc = async () => {
  try {
    const pdfPath = join(__dirname, "../../../data/legal doc.pdf");

    const dataBuffer = readFileSync(pdfPath);
    const data = await pdf(dataBuffer);

    return data.text;
  } catch (err) {
    console.error(err);
  }
};

export default readDoc;
