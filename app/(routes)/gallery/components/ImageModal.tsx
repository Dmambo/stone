import Image from 'next/image';
import React from 'react';


interface ImageModalProps {
    imageSrc: string; // Assuming the image source is a string
    onClose: () => void; // Assuming onClose is a function with no arguments
  }

  const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content">
        <button onClick={onClose} className="image-modal-close-button">Close</button>
        <Image src={imageSrc} alt="Fullscreen" className="image-modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
