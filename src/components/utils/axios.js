import axios from "axios";
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.findcollegeparking.com"
      : "http://localhost:8080",
  headers: {
    "x-forwarded-host":
      process.env.NODE_ENV === "production"
        ? "findcollegeparking.com"
        : "localhost:3000",
  },
});
export default instance;
