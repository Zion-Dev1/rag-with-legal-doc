import getHeaders from "../utils/getHeaders";

export const embedDocument = async () => {
  try {
    const response = await fetch('http://localhost:3000/doc/embed', {
      method: "GET",
      credentials: "include",
      headers: getHeaders()
    });
    
    return response.json();
  } catch (e) {
    console.error((e as Error).message);
  }
};
