import axios from "axios";

export const getUId = () => {
  let id = Math.random().toString(36).substr(3, 9);
  return id;
};

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}albums/top`);
    // console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}albums/new`);
    // console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    //console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const faqsData = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/faq`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
