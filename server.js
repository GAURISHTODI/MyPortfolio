// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // We'll run our backend on this port

// Import your API route files
const sendEmailApi = require('./api/send-email');
const blogsApi = require('./api/blogs');

// Middleware
app.use(cors()); // Allow requests from our frontend
app.use(express.json());

// Tell the app to use your API routes
app.use('/api', sendEmailApi); // Mounts the send-email logic
app.use('/api', blogsApi);     // Mounts the blogs logic

app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});