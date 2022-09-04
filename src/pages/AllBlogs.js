import React from "react"
import { useState, useEffect } from "react"
import BlogEntryList from "../components/blogentry/BlogEntryList"
import Searchbar from "../components/search/Searchbar"

function AllBlogsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedBlogs, setLoadedBlogs] = useState([])
  const { search } = window.location
  const query = new URLSearchParams(search).get("s")
  const [searchQuery, setSearchQuery] = useState(query || "")
  const [newBlogs, setNewBlogs] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch("https://childblogapp-default-rtdb.asia-southeast1.firebasedatabase.app/blogentries.json"
    ).then(response => {
      return response.json()
    }).then((data) => {
      const blogs = []

      for (const key in data) {
        const blog = {
          id: key,
          ...data[key]
        }
        blogs.push(blog)
      }

      setIsLoading(false)
      setLoadedBlogs(blogs)
    })
  }, [])

  useEffect(() => {
    const filterBlogs = (loadedBlogs, query) => {
      if (!query) {
        return loadedBlogs
      }

      return loadedBlogs.filter((blog) => {
        const blogTitle = blog.title.toLowerCase()
        return blogTitle.includes(query.toLowerCase())
      })
    }

    const filteredBlogs = filterBlogs(loadedBlogs, searchQuery)
    setNewBlogs(filteredBlogs)
  }, [loadedBlogs, searchQuery])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Blogs Page</h1>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogEntryList blogentries={newBlogs}/>
    </section>
  )
}

export default AllBlogsPage
