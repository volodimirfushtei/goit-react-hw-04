import { useEffect, useState } from "react";

import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./src/components/SearchBar/SearchBar";
// key unsplash = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM";
// api = "https://api.unsplash.com/";
import LoadMoreBtn from "./src/components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./src/components/ImageGallery/ImageGallery";
import Loader from "./src/components/Loader/Loader";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./src/servises/api.js";

function App() {
  const [images, setImages] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setError(null);
        setLoading(true);
        const data = await fetchImages(page);
        setLoading(false);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        // Тут будемо обробляти помилку
        console.log(error);
        setError(true);

        toast.error("This is an error!");

        toast.error("This is an error!");
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    };
    getData();
  }, [page]);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
    setImages([]);
  };
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar value={filter} onChange={handleFilterChange} />
      {error && <ErrorMessage message={error} />}
      <Toaster />
      {loading && <Loader />}
      {images && (
        <ImageGallery
          images={images.filter((image) =>
            image.alt_description.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      )}

      {!loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
    </>
  );
}

export default App;
