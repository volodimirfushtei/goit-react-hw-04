import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={s.ImageGallery_container}>
      <ul className={s.imageGallery_list}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <li key={`${image.id}-${index}`}>
              <ImageCard image={image} />{" "}
              {/* Передайте дані зображення в ImageCard */}
            </li>
          ))
        ) : (
          <p>No images found</p>
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
