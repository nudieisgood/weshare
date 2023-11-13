import { redirect } from "react-router-dom";
import customFetch from "../utilits/customFetch";

export const action = async ({ params }) => {
  const { id } = params;

  try {
    await customFetch.put(`/places/${id}`);
    return redirect("/account/places");
  } catch (error) {
    throw {
      status: error.response.status,
      message: error.response.data.msg,
    };
  }
};

const ActivePlace = () => {
  return null;
};
export default ActivePlace;
