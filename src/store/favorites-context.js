import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBlog) => {},
  removeFavorite: (blogentryId) => {},
  itemIsFavorite: (blogentryId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteBlog) {
    setUserFavorites((prevUserFavorites) => {
       return prevUserFavorites.concat(favoriteBlog);
    });
  }

  function removeFavoriteHandler(blogentryId) {
      setUserFavorites(prevUserFavorites => {
          return prevUserFavorites.filter(blogentry => blogentry.id !== blogentryId);
      });
  }

  function itemIsFavoriteHandler(blogentryId) {
return userFavorites.some(blogentry => blogentry.id === blogentryId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

 export default FavoritesContext;
