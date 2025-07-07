import getHeaders from "../utils/getHeaders";

const askQuery = async (query: string) => {
  try {
    const response = await fetch("http://localhost:3000/doc/query", {
      method: "POST",
      credentials: "include",
      headers: getHeaders(),
      body: JSON.stringify({ query }),
    });

    return response.json();
  } catch (e) {
    console.error((e as Error).message);
  }
};

export default askQuery;
