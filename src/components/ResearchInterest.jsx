import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

function ResearchInterest({ resumeData, updateResearchInterest }) {
  const [charCount, setCharCount] = useState(resumeData.researchInterest?.length || 0)

  const handleChange = (value) => {
    setCharCount(value.length)
    updateResearchInterest(value)
  }
  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">🧠</span>
            Research Interests
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Describe your research interests and areas of expertise</p>
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <textarea
            value={resumeData.researchInterest}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Describe your research interests, including:
- Key areas of focus
- Methodologies you're interested in
- Current challenges you're passionate about
- Future research directions"
            rows={6}
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-sm sm:text-base resize-vertical"
          />
          <p className="text-xs text-gray-500 mt-1">{charCount} characters</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-indigo-800 mb-2">💡 Tips for Research Interests Section</h3>
          <ul className="text-sm sm:text-base text-indigo-700 space-y-1">
            <li>• Be specific about your interests</li>
            <li>• Connect interests to current trends</li>
            <li>• Show how interests align with potential opportunities</li>
            <li>• Keep it concise but informative</li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Link
            to="/research"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            ← Back to Research
          </Link>
          <Link
            to="/skills"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            Next: Skills →
          </Link>
        </div>
      </div>
    </div>
  )
}

ResearchInterest.propTypes = {
  resumeData: PropTypes.shape({
    researchInterest: PropTypes.string,
  }).isRequired,
  updateResearchInterest: PropTypes.func.isRequired,
}

export default ResearchInterest
