import React,{useState} from "react";
import css from './Searchbar.module.css'
import PropTypes from "prop-types";

const Searchbar = ({isSubmitting,onSubmit})=>{
  const [searchName,setSearchName]=useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchName);
    setSearchName("");
    }
  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case "searchName":
          setSearchName(value);
        break;
      default:
        break;
    }
    
  }; 
  return(
    <header className={css["Searchbar"]}>
    <form className={css["SearchForm"]} onSubmit={handleSubmit}>
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
        onChange={handleChange}
      />
    </form>
  </header>)
  }
Searchbar.propTypes={
  onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;
