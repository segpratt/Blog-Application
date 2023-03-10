import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import '../styles/SingleBlog.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SingleBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(slug);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try{
      const response = await fetch(`http://localhost:8080/blogs/getBlogsBasedOnSlug/${slug}`);
      const data = await response.json();
      setBlog(data);
    }
    catch(error){
      console.log(error);
    }
  }
    fetchData();
  }, [slug]);

  return (
    <div className='single-blog'>
    <div className='button-blog-back'>
    <button className="back-to-blogs-btn" onClick={() => navigate("/")}>
      <ArrowBackIcon /> 
    </button><span>Blogs</span>
    </div>
    <div className='single-blog-image-div'>
      <img className='single-blog-image' src={blog.image} alt={blog.title} />
      </div>
      <div className='single-blog-content'>
      <BlogContent content={blog.content} />
      </div>
    </div>
  );
}

export default SingleBlogPage;


