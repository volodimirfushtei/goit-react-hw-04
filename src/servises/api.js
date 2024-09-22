import axios from "axios";

const URL = "https://api.unsplash.com/";
const API_KEY = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM"; // Ваш ключ API

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${URL}search/photos`, {
      params: {
        query: query,
        page: page,
        per_page: 6, // Вказати кількість зображень на сторінці
        client_id: API_KEY,
      },
    });
    return response.data; // Повертає тільки дані з відповіді
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
