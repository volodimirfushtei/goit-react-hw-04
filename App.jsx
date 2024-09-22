import { useEffect, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./src/components/SearchBar/SearchBar";
import LoadMoreBtn from "./src/components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./src/components/ImageGallery/ImageGallery";
import Loader from "./src/components/Loader/Loader";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./src/servises/api.js";
import ImageModal from "./src/components/ImageModal/ImageModal";

import "./App.css";
function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;

      setLoading(true);
      setImages([]); // Очищаєм масив зображень
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
        toast.success("Search completed successfully!"); //
      } catch (error) {
        console.log(error);
        setError(true);
        toast.error("An error occurred while fetching images!");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleFilterChange = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFilterChange} />
      {error && <ErrorMessage message={error} />}
      <p>Total pages:{totalPages}</p>
      <Toaster />
      {loading && <Loader />}
      <ImageGallery images={images} isOpen={openModal} />
      {isOpen && <ImageModal onClose={closeModal} image={selectedImage} />}
      {!loading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn
          onClick={handleChangePage}
          isLoading={loading}
          haveImages={images.length > 0}
        />
      )}
    </>
  );
}

export default App;
