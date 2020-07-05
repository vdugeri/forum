const config = {
  development: {
    BASE_API_URL: "http://localhost:8080/api/v1",
    EDITOR_API_KEY: "3cq7hq90hsskgf80ga6yd94dnrod09v4xq4z2f4ir2em6wb0",
  },
  staging: {
    BASE_API_URL: "https://vanillatots.herokuapp.com/api/v1",
    EDITOR_API_KEY: "3cq7hq90hsskgf80ga6yd94dnrod09v4xq4z2f4ir2em6wb0",
  },
  production: {
    BASE_API_URL: "https://vanillatots.herokuapp.com/api/v1",
    EDITOR_API_KEY: "3cq7hq90hsskgf80ga6yd94dnrod09v4xq4z2f4ir2em6wb0",
  },
};

export default config[process.env.NODE_ENV || "development"];
