import React from 'react'

function BlogContent({content}) {
    return (
      <div className='blog-content' dangerouslySetInnerHTML={{ __html: content }} />
    );
  }

export default BlogContent