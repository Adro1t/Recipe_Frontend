import { API } from "../config";

export const createCategory = async (token, category) => {
  try {
    const res = await fetch(`${API}/category/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
