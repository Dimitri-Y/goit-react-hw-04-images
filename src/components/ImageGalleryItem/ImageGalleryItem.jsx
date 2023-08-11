import {Component} from "react";
import css from './ImageGalleryItem.module.css'
import PropTypes from "prop-types";
class ImageGalleryItem extends Component {
    static propTypes ={
        url: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        onModal: PropTypes.func.isRequired,
    }
    render(){
        const {url,about,onModal}=this.props;
        return(
            <li className={css["ImageGalleryItem"]} onClick={onModal} >
            <img src={url} alt={about} className={css["ImageGalleryItem-image"]} />
          </li>);

    }
}
export default ImageGalleryItem;