import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchDestinations = async () => {
  const res = await axios.get(`${BASE_URL}/destinations`);
  return res.data;
};

export const fetchTopPackages = async () => {
  const res = await axios.get(`${BASE_URL}/packages/top-selling`);
  return res.data;
};
