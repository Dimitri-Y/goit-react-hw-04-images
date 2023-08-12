import css from "./ButtonLoadMore.module.css";
import PropTypes from "prop-types";
const Button=({onLoadMore})=>{
    return(
        <button className={css["Button"]} onClick={onLoadMore}>
            Load More
        </button>)
    
}
Button.propTypes = {   
     onLoadMore: PropTypes.func.isRequired
};
export default Button;