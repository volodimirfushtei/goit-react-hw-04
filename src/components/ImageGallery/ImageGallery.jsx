import s from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <div className={s.ImageGallery_container}>
      <ul>
        {/* Набір елементів списку із зображеннями */}
        <li>
          <div>
            <img src="" alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
