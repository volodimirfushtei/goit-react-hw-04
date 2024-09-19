import s from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit, placeholder = "Search images and photos" }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Введіть запит для пошуку");
      return;
    }

    console.log("Search text:", query);

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <div className={s.searchBar_container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.searchBar_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search images"
          />
          <button className={s.button} type="submit" aria-label="Search">
            Search
          </button>
        </form>
      </div>
      <Toaster />
    </header>
  );
};

export default SearchBar;
