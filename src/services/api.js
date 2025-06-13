import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
console.log(BASE_URL)

export const fetchDestinations = async () => {
  const res = await axios.get(`${BASE_URL}/api/destinations`);
  return res.data;
};

export const fetchTopPackages = async () => {
  const res = await axios.get(`${BASE_URL}/api/packages/top-selling`);
  return res.data;
};
