import React from "react"
import { Route, Routes } from "react-router-dom"
import AllBlogsPage from "./pages/AllBlogs"
import FavoritesPage from "./pages/Favorites"
import AddBlogPage from "./pages/AddBlog"
import Layout from "./components/layout/Layout"


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllBlogsPage />}>
        </Route>
        <Route exact path='/add-blog' element={<AddBlogPage />}>
        </Route>
        <Route  exact path='/favorites' element={<FavoritesPage />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
