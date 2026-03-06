const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'User ID is required'],
    index: true
  },
  title: { 
    type: String, 
    required: [true, 'Resume title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters'],
    default: 'Untitled Resume'
  },
  data: { 
    type: {
      personalInfo: {
        name: String,
        email: String,
        phone: String,
        address: String
      },
      education: [{
        school: String,
        degree: String,
        year: String
      }],
      experience: [{
        company: String,
        position: String,
        duration: String,
        description: String
      }],
      skills: [String],
      technicalSkills: [String],
      achievements: String,
      coursework: String,
      publications: String,
      research: String,
      researchInterest: String
    },
    default: {}
  },
  template: {
    type: String,
    enum: ['template1', 'template2', 'template3', 'template4', 'template5', 
            'template6', 'template7', 'template8', 'template9', 'template10', 
            'template11', 'template12'],
    default: 'template1'
  },
  versions: [{
    data: mongoose.Schema.Types.Mixed,
    createdAt: { type: Date, default: Date.now },
    notes: String
  }],
  isTemplate: { 
    type: Boolean, 
    default: false,
    index: true
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  shareToken: {
    type: String,
    unique: true,
    sparse: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  downloads: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  createdAt: { 
    type: Date, 
    default: Date.now,
    index: true
  },
  updatedAt: { 
    type: Date, 
    default: Date.now,
    index: true
  }
})

// Update updatedAt before saving
ResumeSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

// Generate share token
ResumeSchema.methods.generateShareToken = function() {
  const crypto = require('crypto')
  this.shareToken = crypto.randomBytes(32).toString('hex')
  return this.shareToken
}

// Get public resume (without sensitive data)
ResumeSchema.methods.toPublic = function() {
  const resume = this.toObject()
  delete resume.shareToken
  return resume
}

// Create indexes
ResumeSchema.index({ userId: 1, updatedAt: -1 })
ResumeSchema.index({ isPublic: 1, createdAt: -1 })

module.exports = mongoose.model('Resume', ResumeSchema)
