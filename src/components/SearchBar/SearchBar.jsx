import s from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit, placeholder = "Search images and photos" }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText.trim()) {
      // Покажіть сповіщення, якщо текстове поле порожнє
      toast.error("Введіть текст для пошуку зображень.");
      return;
    }

    // Обробка пошукового запиту
    console.log("Search text:", searchText);
    if (onSubmit) onSubmit(searchText);
    setSearchText("");
  };

  return (
    <header>
      <div className={s.searchBar_container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.searchBar_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={searchText}
            placeholder={placeholder}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
