import axios from "axios";
//development
// export const backendBaseURL = "http://127.0.0.1:5200";
// export const backendBaseURL = "http://localhost:5200";

//production
export const backendBaseURL = "https://weshare-toghter.onrender.com";

const customFetch = axios.create({
  //development
  // baseURL: `${backendBaseURL}/api/v1`,

  //production
  baseURL: "/api/v1",

  withCredentials: true,
});

export default customFetch;
