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

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, image }) => {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      onRequestClose={closeModal}
      style={customStyles}
      isOpen={modalIsOpen}
    >
      <img src={urls.regular} alt={alt_description} />
      <button onClick={closeModal}>closeModal</button>
    </Modal>
  );
};

export default ImageModal;
