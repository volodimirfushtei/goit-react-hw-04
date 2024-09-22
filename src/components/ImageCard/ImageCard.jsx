import s from "./ImageCard.module.css";
import { useState } from "react";
import Loader from "../Loader/Loader";
const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={s.ImageCard_container}>
      {isLoading && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      <img
        className={s.image}
        src={hasError ? "/path/to/fallback-image.jpg" : urls.small} // Fallback image path
        alt={alt_description || "Image"}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        onClick={openModal}
      />
      {alt_description && (
        <p className={s.ImageCard_description}>{alt_description}</p>
      )}
      {image.user && (
        <p className={s.ImageCard_author}>Автор: {image.user.name}</p>
      )}
    </div>
  );
};

export default ImageCard;
