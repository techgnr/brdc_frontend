import axios from "axios";
const mainUrl = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: mainUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
