const express = require('express');
const blogsRoutes = require('./routes/blogsRoutes.js');
const cors = require('cors');

const server = express();

server.use(cors()); 
server.use('/blogs', blogsRoutes);

const port = 8080;

server.listen(port, () => {
  console.log('Server running on http://localhost:'+port);
});
