import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.container_button_loadmore}>
      <button
        className={s.button_loadmore}
        type="submit"
        name="button"
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
