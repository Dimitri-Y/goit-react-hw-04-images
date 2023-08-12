import css from './ImageGalleryItem.module.css'
import PropTypes from "prop-types";
const ImageGalleryItem=({url,about,onModal})=>{
    return(
        <li className={css["ImageGalleryItem"]} onClick={onModal} >
        <img src={url} alt={about} className={css["ImageGalleryItem-image"]} />
      </li>);

}
ImageGalleryItem.propTypes ={
    url: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    onModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;