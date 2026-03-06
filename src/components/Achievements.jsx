import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Achievements({ resumeData, updateAchievements }) {
  const [charCount, setCharCount] = useState(resumeData.achievements?.length || 0)

  const handleChange = (value) => {
    setCharCount(value.length)
    updateAchievements(value)
  }

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">🏆</span>
            Achievements
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Add awards, honors, and notable achievements</p>
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <textarea
            value={resumeData.achievements}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Describe your achievements, awards, and honors..."
            rows={6}
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 text-sm sm:text-base resize-vertical"
          />
          <p className="text-xs text-gray-500 mt-1">{charCount} characters</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-yellow-800 mb-2">💡 Tips for Achievements Section</h3>
          <ul className="text-sm sm:text-base text-yellow-700 space-y-1">
            <li>• Include awards, scholarships, certifications</li>
            <li>• Mention honors, recognitions, and competitions</li>
            <li>• Quantify achievements where possible</li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Link
            to="/experience"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            ← Back to Experience
          </Link>
          <Link
            to="/coursework"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            Next: Coursework →
          </Link>
        </div>
      </div>
    </div>
  )
}

Achievements.propTypes = {
  resumeData: PropTypes.shape({
    achievements: PropTypes.string,
  }).isRequired,
  updateAchievements: PropTypes.func.isRequired,
}

export default Achievements
