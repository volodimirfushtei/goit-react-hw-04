import { useEffect, useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./src/components/SearchBar/SearchBar";
import LoadMoreBtn from "./src/components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./src/components/ImageGallery/ImageGallery";
import Loader from "./src/components/Loader/Loader";
import ErrorMessage from "./src/components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./src/servises/api.js";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
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
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFilterChange} />
      {error && <ErrorMessage message={error} />}
      <Toaster />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {!loading && images.length > 0 && (
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
