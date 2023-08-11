import React,{Component} from "react";
import css from './Searchbar.module.css'
import PropTypes from "prop-types";
class Searcbar extends Component {
    state={
        searchName:""
    }
   static propTypes={
      onSubmit: PropTypes.func.isRequired,     
   }
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state.searchName);
        this.setState({searchName:""});
    }
    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
      };
    render() {
        const {searchName,isSubmitting}=this.state;
        return(
        <header className={css["Searchbar"]}>
        <form className={css["SearchForm"]} onSubmit={this.handleSubmit}>
          <button type="submit" className={css["SearchForm-button"]} disabled={isSubmitting}>
            <span className={css["SearchForm-button-label"]}>Search</span>
          </button>
      
          <input
            className={css["SearchForm-input"]}
            type="text"
            autoComplete="off"
            name="searchName"
            value={searchName}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>)}
}

export default Searcbar;
