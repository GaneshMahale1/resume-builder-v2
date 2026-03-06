import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { isValidDuration } from '../utils/resumeValidation'

function ExperienceForm({ resumeData, updateExperience, addExperience, removeExperience }) {
  const [errors, setErrors] = useState([])
  const [touched, setTouched] = useState([])

  // Keep errors/touched sparse; entries are created when validating fields

  const validateField = (index, field, value) => {
    setErrors(prev => {
      const next = [...prev]
      const item = { ...(next[index] || {}) }
      if (field === 'position') {
        if (!value || !value.trim()) item.position = 'Position / job title is required'
        else delete item.position
      }
      if (field === 'duration') {
        if (value && !isValidDuration(value)) item.duration = 'Use a clear duration (e.g. Jan 2020 - Dec 2022)'
        else delete item.duration
      }
      if (field === 'description') {
        if (value && value.trim().length > 0 && value.trim().length < 30) item.description = 'Consider adding more details (30+ chars)'
        else delete item.description
      }
      next[index] = item
      return next
    })
  }

  const handleBlur = (index, field) => {
    setTouched(prev => {
      const next = [...prev]
      next[index] = { ...(next[index] || {}), [field]: true }
      return next
    })
    validateField(index, field, resumeData.experience[index]?.[field])
  }

  const handleChange = (index, field, value) => {
    updateExperience(index, field, value)
    if (touched[index]?.[field]) validateField(index, field, value)
  }

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">💼</span>
            Work Experience
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Highlight your professional experience</p>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {(resumeData?.experience || []).map((exp, index) => (
            <div key={`experience-${index}`} className="p-4 sm:p-6 lg:p-8 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">Experience #{index + 1}</h3>
                {(resumeData?.experience || []).length > 1 && (
                  <button
                    onClick={() => removeExperience(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Google Inc."
                    value={exp.company}
                    onChange={(e) => handleChange(index, 'company', e.target.value)}
                    onBlur={() => handleBlur(index, 'company')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.company && touched[index]?.company ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.company && touched[index]?.company && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].company}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Position</label>
                  <input
                    type="text"
                    placeholder="Software Engineer"
                    value={exp.position}
                    onChange={(e) => handleChange(index, 'position', e.target.value)}
                    onBlur={() => handleBlur(index, 'position')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.position && touched[index]?.position ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.position && touched[index]?.position && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].position}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Duration</label>
                  <input
                    type="text"
                    placeholder="Jan 2020 - Dec 2022"
                    value={exp.duration}
                    onChange={(e) => handleChange(index, 'duration', e.target.value)}
                    onBlur={() => handleBlur(index, 'duration')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.duration && touched[index]?.duration ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.duration && touched[index]?.duration && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].duration}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Description</label>
                  <textarea
                    placeholder="Describe your responsibilities, achievements, and key contributions..."
                    value={exp.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    onBlur={() => handleBlur(index, 'description')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-sm sm:text-base resize-vertical ${errors[index]?.description && touched[index]?.description ? 'border-red-500' : 'border-gray-300'}`}
                    rows="3 sm:rows-4"
                  />
                  {errors[index]?.description && touched[index]?.description && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button
            onClick={addExperience}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg"
          >
            <span>+</span>
            <span>Add Another Experience</span>
          </button>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 lg:gap-6">
          <Link
            to="/education"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg"
          >
            ← Back to Education
          </Link>
          <Link
            to="/achievements"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg"
          >
            Next: Achievements →
          </Link>
        </div>
      </div>
    </div>
  )
}

ExperienceForm.propTypes = {
  resumeData: PropTypes.shape({
    experience: PropTypes.arrayOf(PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string,
    })),
  }).isRequired,
  updateExperience: PropTypes.func.isRequired,
}

export default ExperienceForm