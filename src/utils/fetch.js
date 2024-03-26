export const baseUrl = process.env.NODE_ENV === "production" ? "https://api.findcollegeparking.com" : "http://localhost:8081";

export const xForwardedHost = process.env.NODE_ENV === "production" ? "https://findcollegeparking.com" : "http://localhost:3000"