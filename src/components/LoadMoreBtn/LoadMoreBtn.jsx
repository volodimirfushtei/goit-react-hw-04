import s from "./LoadMoreBtn.module.css";
import Loader from "../Loader/Loader";
const LoadMoreBtn = ({ haveImages, isLoadingMore, onClick }) => {
  // Показуємо кнопку, якщо є зображення
  if (haveImages <= 0) {
    return null;
  }
  return (
    <div className={s.container_button_loadmore}>
      {isLoadingMore ? (
        <Loader /> // Показуємо лоадер, якщо дані завантажуються
      ) : (
        <button className={s.button_loadmore} type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
