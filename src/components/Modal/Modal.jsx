import css from './Modal.module.css'


import { useEffect } from 'react';

export const Modal = ({ imgSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
       return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
 
  }, [onClose]);


  return <>
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  </>
};