require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Routes
const authRoutes = require('./routes/auth')
const resumeRoutes = require('./routes/resumes')
const adminRoutes = require('./routes/admin')
const templateRoutes = require('./routes/templates')

// Middleware
const requestLogger = require('./middleware/logger')
const { errorHandler } = require('./middleware/errorHandler')

const app = express()

// ========== CORS Configuration ==========
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

// ========== Body Parser Middleware ==========
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// ========== Request Logger Middleware ==========
app.use(requestLogger)

// ========== MongoDB Connection ==========
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/resume-builder'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✓ Connected to MongoDB')
    console.log(`✓ Database: ${MONGO_URI.split('/').pop().split('?')[0]}`)
  })
  .catch(err => {
    console.error('✗ MongoDB connection error:', err.message)
    process.exit(1)
  })

// ========== Health Check Endpoint ==========
app.get('/', (req, res) => {
  res.json({
    ok: true,
    version: '1.0.0',
    service: 'Resume Builder API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// ========== API Routes ==========
app.use('/api/auth', authRoutes)
app.use('/api/resumes', resumeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/templates', templateRoutes)

// ========== 404 Handler ==========
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    code: 'NOT_FOUND',
    path: req.path,
    method: req.method
  })
})

// ========== Global Error Handler ==========
app.use(errorHandler)

// ========== Start Server ==========
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('\n===========================================')
  console.log('🚀 Resume Builder Backend Server Started')
  console.log('===========================================')
  console.log(`📍 Server: http://localhost:${port}`)
  console.log(`🌍 CORS Origin: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`)
  console.log(`🔒 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`JWT Expiry: ${process.env.JWT_EXPIRE || '7d'}`)
  console.log('===========================================\n')
})

// ========== Graceful Shutdown ==========
process.on('SIGTERM', () => {
  console.log('\n⚠️  SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('✓ HTTP server closed')
    mongoose.connection.close(false, () => {
      console.log('✓ MongoDB connection closed')
      process.exit(0)
    })
  })
})

process.on('SIGINT', () => {
  console.log('\n⚠️  SIGINT signal received: closing HTTP server')
  server.close(() => {
    console.log('✓ HTTP server closed')
    mongoose.connection.close(false, () => {
      console.log('✓ MongoDB connection closed')
      process.exit(0)
    })
  })
})

// ========== Unhandled Exception Handler ==========
process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason)
})
