import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
// import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./src/SearchBar/SearchBar";
// key unsplash = "i5w-Dwp5XlApWxQIRPAU3nhUWZSAxsZ2XZjUYXTlyVM";
// api = "https://api.unsplash.com/";
function App() {
  const [count, setCount] = useState();

  return (
    <>
      <SearchBar onSubmit />
    </>
  );
}

export default App;
