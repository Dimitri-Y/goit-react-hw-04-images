import React,{Component} from "react";
import css from "./ButtonLoadMore.module.css";
import PropTypes from "prop-types";
class Button extends Component {
    static propTypes = {
        onLoadMore: PropTypes.func.isRequired
    }
    render() {
        const {onLoadMore}=this.props;
        return(
        <button className={css["Button"]} onClick={onLoadMore}>
            Load More
        </button>)
    }
}
export default Button;