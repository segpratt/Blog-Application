const blogsController = require('../controllers/blogsController.js');
const router = require("express").Router();

router.get("/getBlogs/", blogsController.getBlogs);

router.get("/getBlogsBasedOnSlug/:slug", blogsController.getBlogBasedOnSlug);

module.exports = router;