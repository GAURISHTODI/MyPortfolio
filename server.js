// server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sendEmailApi = require('./api/send-email');
const blogsApi = require('./api/blogs');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ADD THIS MIDDLEWARE BLOCK
app.use((req, res, next) => {
  console.log(`➡️  Request received: ${req.method} ${req.originalUrl}`);
  next();
});

// Use the imported routers
app.use('/api', sendEmailApi);
app.use('/api', blogsApi);

app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});