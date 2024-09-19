import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div className={s.ImageGallery_container}>
      <ul className={s.imageGallery_list}>
        {images.length > 0 ? (
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} />
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
