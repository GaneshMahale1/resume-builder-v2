const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Template name is required'],
    unique: true,
    trim: true
  },
  description: { 
    type: String,
    trim: true
  },
  thumbnail: {
    type: String
  },
  data: { 
    type: Object,
    required: [true, 'Template data is required'],
    default: {}
  },
  style: {
    primaryColor: { type: String, default: '#000000' },
    fontFamily: { type: String, default: 'Arial' },
    fontSize: { type: Number, default: 12 }
  },
  category: {
    type: String,
    enum: ['professional', 'modern', 'creative', 'minimal', 'detailed'],
    default: 'professional'
  },
  isPublic: { 
    type: Boolean, 
    default: true,
    index: true
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    sparse: true
  },
  usageCount: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Update updatedAt before saving
TemplateSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

module.exports = mongoose.model('Template', TemplateSchema)
