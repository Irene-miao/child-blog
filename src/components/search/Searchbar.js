/* eslint-disable react/prop-types */
import React from "react"
import classes from "./Search.module.css"


const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form className={classes.form} action="/" method="get">
    <label htmlFor="header-search">
      <span className={classes.hidden}>Search Blog</span>
    </label>
    <input
      className={classes.input}
      value={searchQuery}
      onInput={ e => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Type title.."
      name="s"
    />
    <div className={classes.actions}>
      <button id="search" type="submit">
      Search
      </button>
    </div>
  </form>
)

export default SearchBar