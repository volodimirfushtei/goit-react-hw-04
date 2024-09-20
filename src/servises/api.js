import axios from "axios";

const URL = "https://api.unsplash.com/";
const API_KEY = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM"; // Ваш ключ API

export const fetchImages = async (query, page = 1, total_Pages) => {
  try {
    const response = await axios.get(`${URL}search/photos`, {
      params: {
        query,
        page,
        total_Pages,
        per_page: 9, // Вказати кількість зображень на сторінці
        client_id: API_KEY,
      },
    });
    return response.data; // Повертає тільки дані з відповіді
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
