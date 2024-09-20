import { useState } from "react";
import s from "./LoadMoreBtn.module.css";
import Loader from "../Loader/Loader";

const LoadMoreBtn = ({ onClick, isLoading, haveImages }) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleClick = () => {
    setIsLoadingMore(true); // Встановлюємо стан завантаження
    setTimeout(() => {
      onClick();
      setIsLoadingMore(false); // Скидаємо стан завантаження
    }, 2000);
  };
  // Показуємо кнопку, якщо є зображення
  if (!haveImages > 0) {
    return null;
  }
  return (
    <div className={s.container_button_loadmore}>
      {isLoading || isLoadingMore ? (
        <div className={s.Loader}>
          <Loader />
        </div>
      ) : (
        <button
          className={s.button_loadmore}
          type="button"
          onClick={handleClick}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
