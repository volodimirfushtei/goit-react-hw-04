import s from "./ImageModal.module.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ onClose, image }) => {
  const { urls, alt_description } = image;
  return (
    <Modal style={customStyles}>
      <img src={urls.regular} alt={alt_description} />
      <button onClick={onClose}>ESC</button>
    </Modal>
  );
};

export default ImageModal;
