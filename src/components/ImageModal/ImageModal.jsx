import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    borderRadius: "5px",
    padding: "20px",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
    width: "90vw",
    flexWrap: "nowrap",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    transition: "opacity 0.3s ease-in-out",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      className={s.Modal}
      onRequestClose={closeModal}
      style={customStyles}
      isOpen={modalIsOpen}
    >
      <img className={s.ImageModal} src={urls.regular} alt={alt_description} />
      <button className={s.button_modalclose} onClick={closeModal}>
        <IoCloseCircleOutline />
      </button>
      <div className={s.Items}>
        {alt_description && (
          <p className={s.modal_description}>Опиc: {alt_description}</p>
        )}
        {image.user && (
          <p className={s.ImageCard_author}>Автор: {image.user.name}</p>
        )}
        <p className={s.modal_likes}>Лайки: {image.likes}</p>

        <p className={s.modal_created}>Створено: {image.created_at}</p>
        <p className={s.modal_downloads}>Завантажено: {image.downloads}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
