const blogs = require('../models/blogs');
const { Op } = require('sequelize');

const getBlogs = async (req, res) => {
  const page = req.query.page;
  const pageLimit = 6;

  try {
    const { rows: blog, count: totalBlogs } = await blogs.findAndCountAll({
    where: { published_at: { [Op.not]: null } },
    order: [['published_at', 'DESC']],
    limit: pageLimit,
    offset: (page - 1) * pageLimit,
  });

  const totalPages = Math.ceil(totalBlogs / pageLimit);

  const blogData = blog.map(blog => ({
    title: blog.title,
    slug: blog.slug,
    image: blog.image
  }));
  res.status(200).send({ blog: blogData, totalPages });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error retreiving blogs with getBlogs function");
  }
};
  

const getBlogBasedOnSlug = async(req, res) =>{

  const slugName = req.params.slug;
  try{
    const blog = await blogs.findOne({where: {slug: slugName}});
    res.status(200).send(blog);
  }
  catch(err){
    res.status(500).send(err + "Error retreiving blog with getBlogBasedOnSlug function")
  }
}




module.exports = {
    getBlogs,
    getBlogBasedOnSlug
};