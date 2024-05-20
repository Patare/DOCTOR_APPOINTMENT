const express = require('express');
const colors = require('color');
const morgan = require("morgan");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')

// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

// Enable CORS
app.use(cors());

// Connection to the database
connectDB();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Enable CORS for specific origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(cors());

// Routes
app.use('/api/v1/user', require("./routes/UserRouters"));
app.use('/api/v1/admin', require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
