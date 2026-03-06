import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { isValidYear } from '../utils/resumeValidation'

function EducationForm({ resumeData, updateEducation, addEducation, removeEducation }) {
  const [errors, setErrors] = useState([])
  const [touched, setTouched] = useState([])

  // Keep errors/touched sparse; entries are created when validating fields

  const validateField = (index, field, value) => {
    setErrors(prev => {
      const next = [...prev]
      const item = { ...(next[index] || {}) }
      if (field === 'year') {
        if (value && !isValidYear(value)) {
          item.year = 'Please enter a valid year (e.g. 2022)'
        } else {
          delete item.year
        }
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
    validateField(index, field, resumeData.education[index]?.[field])
  }

  const handleChange = (index, field, value) => {
    updateEducation(index, field, value)
    if (touched[index]?.[field]) validateField(index, field, value)
  }

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">🎓</span>
            Education
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Add your educational background</p>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {(resumeData?.education || []).map((edu, index) => (
            <div key={`education-${index}`} className="p-4 sm:p-6 lg:p-8 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">Education #{index + 1}</h3>
                {(resumeData?.education || []).length > 1 && (
                  <button
                    onClick={() => removeEducation(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">School/University</label>
                  <input
                    type="text"
                    placeholder="Harvard University"
                    value={edu.school}
                    onChange={(e) => handleChange(index, 'school', e.target.value)}
                    onBlur={() => handleBlur(index, 'school')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.school && touched[index]?.school ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.school && touched[index]?.school && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].school}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Degree</label>
                  <input
                    type="text"
                    placeholder="Bachelor of Science in Computer Science"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                    onBlur={() => handleBlur(index, 'degree')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.degree && touched[index]?.degree ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.degree && touched[index]?.degree && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].degree}</p>
                  )}
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Year</label>
                  <input
                    type="text"
                    placeholder="2018-2022"
                    value={edu.year}
                    onChange={(e) => handleChange(index, 'year', e.target.value)}
                    onBlur={() => handleBlur(index, 'year')}
                    className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-sm sm:text-base ${errors[index]?.year && touched[index]?.year ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors[index]?.year && touched[index]?.year && (
                    <p className="mt-1 text-sm text-red-600">{errors[index].year}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button
            onClick={addEducation}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg"
          >
            <span>+</span>
            <span>Add Another Education</span>
          </button>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 lg:gap-6">
          <Link
            to="/personal"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg"
          >
            ← Back to Personal
          </Link>
          <Link
            to="/experience"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg"
          >
            Next: Experience →
          </Link>
        </div>
      </div>
    </div>
  )
}

EducationForm.propTypes = {
  resumeData: PropTypes.shape({
    education: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      fieldOfStudy: PropTypes.string,
      year: PropTypes.string,
    })),
  }).isRequired,
  updateEducation: PropTypes.func.isRequired,
}

export default EducationForm