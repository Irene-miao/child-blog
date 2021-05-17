import { useState, useEffect } from 'react';
import BlogEntryList from '../components/blogentry/BlogEntryList';


function AllBlogsPage() {
const [isLoading, setIsLoading] = useState(true);
const [loadedBlogs, setLoadedBlogs] = useState([]);

useEffect(() => {
  setIsLoading(true);
  fetch('https://childblogapp-default-rtdb.asia-southeast1.firebasedatabase.app/blogentries.json'
  ).then(response => {
   return response.json();
  }).then((data) => {
    const blogs = [];

    for (const key in data) {
      const blog = {
        id: key,
        ...data[key]
      };
      blogs.push(blog);
    }

    setIsLoading(false);
    setLoadedBlogs(blogs);
  });
}, []);

  

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
 
  return (
    <section>
      <h1>All Blogs Page</h1>
     <BlogEntryList blogentries={loadedBlogs}/>
    </section>
  );
}

export default AllBlogsPage;
