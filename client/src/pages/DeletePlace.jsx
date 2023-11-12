import { redirect } from "react-router-dom";
import customFetch from "../utilits/customFetch";

export const action = async ({ params }) => {
  const { id } = params;

  try {
    await customFetch.delete(`/places/${id}`);
    return redirect("/account/places");
  } catch (error) {
    throw {
      status: error.response.status,
      message: error.response.data.msg,
    };
  }
};

const DeletePlace = () => {
  return null;
};
export default DeletePlace;
