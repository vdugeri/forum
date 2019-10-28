export const apiConfig = {
  BASE_API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8081/api/v1"
      : "https://vanillatots.herokuapp.com/api/v1"
};
