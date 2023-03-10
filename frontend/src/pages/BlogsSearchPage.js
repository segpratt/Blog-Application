import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import PageNumbers from '../components/PageNumbers';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogSearch.css';


function BlogsSearch() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try{
      const response = await fetch(`http://localhost:8080/blogs/getBlogs?page=${currentPage}`);
      const data = await response.json();
      setBlogs(data.blog);
      setTotalPages(data.totalPages);
      navigate(`?pageIndex=${currentPage}`, { replace: true });
    }
    catch(error){
      console.log(error);
    }
  }
    fetchData();
  }, [currentPage, totalPages, navigate]);

  const handlePageClick = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className='all'>
    <div className='header-container'>
      <h1 className='all-blogs-header'>Blogs</h1>
      </div>
      <div className='blog-list'>
        {blogs.map(blog => (
          <Link key={blog.id} to={`/${blog.slug}`} >
            <BlogCard 
              title={blog.title}
              image={blog.image}
              slug={blog.slug}
            />
          </Link>
        ))}
      </div>
      <PageNumbers
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageClick}
      />
    </div>
  );
}


export default BlogsSearch;




