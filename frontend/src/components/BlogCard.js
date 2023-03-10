import React from 'react'

function BlogCard({ title, image }) {
    return (
    <div className="blog-card">
    <div className='blog-card-image'>
        <img src={image} alt={title} className="blog-image" />
        </div>
        <div className='blog-card-header'>
        <h2 className="blog-name">{title}</h2>
        </div>
    </div>
    );
}

export default BlogCard

