import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={s.container_button_loadmore}>
      <button className={s.button_loadmore} type="submit" name="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
