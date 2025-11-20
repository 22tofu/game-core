import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "941f3fc7de9f489cb421cc989898b47b",
  },
});
