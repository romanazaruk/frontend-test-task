import Axios from "axios";

const API = "http://localhost:5000/api";

export const fetchImg = () =>
  Axios.get(`${API}/cat-image`);
