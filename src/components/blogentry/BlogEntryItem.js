/* eslint-disable react/prop-types */
import React from "react"
import classes from "./BlogEntryItem.module.css"
import Card from "../ui/Card"
import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"

function BlogEntryItem(props) {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)


  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Not Favorite" : "Favorite"}
          </button>
        </div>
      </Card>
    </li>
  )
}

export default BlogEntryItem
