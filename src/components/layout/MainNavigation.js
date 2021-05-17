import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Child Blog</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Blog Entries</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog Entry</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Blog Entry</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
