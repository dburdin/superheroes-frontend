import axios from "axios";

axios.defaults.baseURL =
  "https://superheroes-backend-es7x.onrender.com/api/superheroes";

export const getAll = async (page, limit) => {
  const response = await axios.get(`?page=${page}&limit=${limit}`);
  return response.data;
};
export const getById = async (id) => await axios.get(`/${id} `);
export const add = async (value) => await axios.post("/", value);
export const remove = async (id) => await axios.delete(`/${id}`);
export const update = async (id, body) => await axios.put(`/${id}`, body);

export const upload = async (file) => {
  return await axios.post("/upload", file);
};

const NOT_FOUND_IMG_URL =
  "https://www.carnival.com.au/_ui/responsive/ccl/assets/images/notfound_placeholder.svg";
export const getImageUrl = (url) => (url ? url : NOT_FOUND_IMG_URL);
