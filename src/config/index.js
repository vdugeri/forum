export const apiConfig = {
  BASE_API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8081/api/v1"
      : "https://vanillatots.herokuapp.com/api/v1"
};

export const EDITOR_API_KEY =
  "3cq7hq90hsskgf80ga6yd94dnrod09v4xq4z2f4ir2em6wb0";
