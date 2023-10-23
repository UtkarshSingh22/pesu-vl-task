import axios from "axios";

const api = "http://localhost:8000/api";

export const getCount = async () => {
    return await axios.get(`${api}/get-count`);
};

export const updateCount = async (count) => {
    return await axios.post(`${api}/update-count`, count);
};
