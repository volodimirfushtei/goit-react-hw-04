import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
// import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./src/components/SearchBar/SearchBar";
// key unsplash = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM";
// api = "https://api.unsplash.com/";
import LoadMoreBtn from "./src/components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./src/components/ImageGallery/ImageGallery";
import Loader from "./src/components/Loader/Loader";
function App() {
  const [count, setCount] = useState();

  return (
    <>
      <SearchBar onSubmit />
      <Loader />
      <ImageGallery />
      <LoadMoreBtn />
    </>
  );
}

export default App;
