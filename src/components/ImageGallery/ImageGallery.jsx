import css from './ImageGallery.module.css'
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
const ImageGallery =({gallery,onModal})=>{
  return(
    <ul className={css["ImageGallery"]}>
        {
        gallery.map(({id ,tags, webformatURL,largeImageURL})=>(
            <ImageGalleryItem about={tags} url={webformatURL} key={id} onModal={() => onModal(largeImageURL, tags)}></ImageGalleryItem>
        )
            )}
  </ul>);
}
ImageGallery.propTypes={
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
onModal: PropTypes.func.isRequired

}

export default ImageGallery;