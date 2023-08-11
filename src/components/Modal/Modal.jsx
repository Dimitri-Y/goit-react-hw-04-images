import {useEffect} from "react";
import css from './Modal.module.css'
import PropTypes from "prop-types";

const Modal=({largeImageURL,alt,onCloseModal})=>{
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  );

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
// class Modal extends Component {
//   static propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,  
//   }  
//   handleKeyDown = event => {
//         if (event.code === 'Escape') {
//           this.props.onCloseModal();
//         }
//       };
    
//       handleOverlayClick = event => {
//         if (event.currentTarget === event.target) {
//           this.props.onCloseModal();
//         }
//       };
    
//       componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//       }
    
//       componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown);
//       }
//     render(){
//         const {largeImageURL,alt}=this.props;
//         return(
//             <div className={css["Overlay"]} onClick={this.handleOverlayClick}>
//                 <div className={css["Modal"]}>
//                     <img src={largeImageURL} alt={alt} />
//                 </div>    
//             </div>);
//     }
// }
export default Modal;