import { API } from "../../config";

//for signup
export const signup = async (user) => {
  try {
    const response = await fetch(`${API}/user/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
