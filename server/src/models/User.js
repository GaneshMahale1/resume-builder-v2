const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  name: { 
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  passwordHash: { 
    type: String,
    minlength: [60, 'Invalid password hash']
  },
  provider: { 
    type: String, 
    enum: ['local', 'google', 'github'],
    default: 'local'
  },
  providerId: { 
    type: String,
    sparse: true
  },
  role: { 
    type: String, 
    enum: ['user', 'admin'],
    default: 'user'
  },
  profilePicture: { 
    type: String 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  lastLogin: { 
    type: Date 
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

// Hash password before saving
UserSchema.pre('save', async function(next) {
  // Don't rehash if password hasn't changed
  if (this.isModified('passwordHash') === false) {
    return next()
  }
  next()
})

// Set password with bcryptjs
UserSchema.methods.setPassword = async function(password) {
  try {
    const salt = await bcrypt.genSalt(10)
    this.passwordHash = await bcrypt.hash(password, salt)
  } catch (error) {
    throw new Error(`Error hashing password: ${error.message}`)
  }
}

// Validate password
UserSchema.methods.validatePassword = async function(password) {
  if (!password || !this.passwordHash) {
    return false
  }
  try {
    return await bcrypt.compare(password, this.passwordHash)
  } catch (error) {
    console.error('Password validation error:', error)
    return false
  }
}

// Update lastLogin timestamp
UserSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date()
  return this.save()
}

// Return user object without sensitive data
UserSchema.methods.toJSON = function() {
  const user = this.toObject()
  delete user.passwordHash
  return user
}

module.exports = mongoose.model('User', UserSchema)
