import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Publications({ resumeData, updatePublications }) {
  const [charCount, setCharCount] = useState(resumeData.publications?.length || 0)

  const handleChange = (value) => {
    setCharCount(value.length)
    updatePublications(value)
  }
  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">📄</span>
            Publications
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">List your research publications and papers</p>
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <textarea
            value={resumeData.publications}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="List your publications with authors, venue, year, and links. Example:
- Smith, J., Doe, A. (2023). Title of Paper. Journal Name, Volume(Issue), Pages. DOI/URL
- Conference Paper Title. Conference Name, Location, Year."
            rows={8}
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 text-sm sm:text-base resize-vertical"
          />
          <p className="text-xs text-gray-500 mt-1">{charCount} characters</p>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-teal-800 mb-2">💡 Tips for Publications Section</h3>
          <ul className="text-sm sm:text-base text-teal-700 space-y-1">
            <li>• Include peer-reviewed papers, conference proceedings</li>
            <li>• List in reverse chronological order</li>
            <li>• Include DOI or URLs when available</li>
            <li>• Highlight your role (first author, corresponding author)</li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Link
            to="/coursework"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            ← Back to Coursework
          </Link>
          <Link
            to="/research"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-center text-sm sm:text-base"
          >
            Next: Research →
          </Link>
        </div>
      </div>
    </div>
  )
}

Publications.propTypes = {
  resumeData: PropTypes.shape({
    publications: PropTypes.string,
  }).isRequired,
  updatePublications: PropTypes.func.isRequired,
}

export default Publications
