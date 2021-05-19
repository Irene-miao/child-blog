import {useContext} from 'react';
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from '../../store/favorites-context';


function MainNavigation() {
const favoritesCtx = useContext(FavoritesContext);


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Child Blog</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Blogs</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorite Blog 
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
              </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
