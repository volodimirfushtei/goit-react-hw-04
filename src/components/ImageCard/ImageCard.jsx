import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;
  return (
    <div className={s.ImageCard_container}>
      <img
        className={s.image}
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={openModal}
        style={{ cursor: "pointer" }}
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
