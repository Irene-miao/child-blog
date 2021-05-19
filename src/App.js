import { Route, Switch } from 'react-router-dom';
import AllBlogsPage from './pages/AllBlogs';
import FavoritesPage from './pages/Favorites';
import AddBlogPage from './pages/AddBlog';
import SearchPage from './pages/Search';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
   <Route path='/' exact>
     <AllBlogsPage />
   </Route>
   <Route path='/add-blog'>
     <AddBlogPage />
   </Route>
   <Route path='/favorites'>
     <FavoritesPage />
   </Route>
   <Route path='/search'>
     <SearchPage />
   </Route>
   </Switch>
    </Layout>
  );
}

export default App;
