import React from 'react';
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from './Context';


const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Modal Content</h3>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button>
      </div>
    </div>
  );
}

export default Modal;