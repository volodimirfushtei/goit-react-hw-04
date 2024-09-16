import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <div className={s.searchBar_container}>
        <form className={s.form}>
          <input
            className={s.searchBar_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onSubmit
          />
          <button className={s.button} type="submit" onSubmit={onSubmit}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
