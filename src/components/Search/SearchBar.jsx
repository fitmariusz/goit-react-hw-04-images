import { useState } from "react";
import css from './SearchBar.module.css'


export const SearchBar = (perm) => { 
  const { UpdateSerchText } = perm;
  const [query, setQuery] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
    UpdateSerchText(query);
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return <>
  <header className={css.searchbar}>
  <form className={css.form}>
    <button type="submit" className={css.button} onClick={onSubmit}>
      <span className="button-label"></span>
    </button>

    <input
      className={css.input}
      type="text"
      autoFocus="on"      
      autoComplete="off"
      placeholder="Search images and photos"
      onChange={onChange}      
    />
  </form>
  </header>
  
  </>
};


      

