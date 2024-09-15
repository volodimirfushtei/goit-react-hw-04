import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <div className={s.searchBar_container}>
      <header>
        <form>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onSubmit
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
