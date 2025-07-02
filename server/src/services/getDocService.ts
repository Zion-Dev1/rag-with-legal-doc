import { readFile } from "node:fs/promises";

const getDocService = async (filePath: string) => {
  try {
    const data = await readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export default getDocService;