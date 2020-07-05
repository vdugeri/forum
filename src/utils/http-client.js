import axios from "axios";
import apiConfig from "config";

export default axios.create({
  baseURL: apiConfig.BASE_API_URL,
});
