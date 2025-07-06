import chroma from "../chroma-db/chromaCollection";

const queryDocService = async (query: string): Promise<any> => {
  try {
    const { collection } = await chroma;

    if (!collection) {
      throw new Error("Error retrieving ChromaDB collection.");
    }

    const results = await collection.query({
      queryTexts: [query],
      nResults: 2,
    });

    return results;
  } catch (err) {
    throw new Error(`Query failed: ${(err as Error).message}`);
  }
};

export default queryDocService;
