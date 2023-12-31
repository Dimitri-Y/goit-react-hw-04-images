import {useEffect} from "react";
import css from './Modal.module.css'
import PropTypes from "prop-types";

const Modal=({largeImageURL,alt,onCloseModal})=>{

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [onCloseModal]);

    return(
        <div className={css["Overlay"]} onClick={handleOverlayClick}>
            <div className={css["Modal"]}>
                <img src={largeImageURL} alt={alt} />
            </div>    
        </div>);
}
Modal.propTypes={
    onCloseModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,  
}
export default Modal;