import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { exportToPDF } from '../utils/pdfExport'
import { useNotification } from '../contexts/NotificationContext'
import Template1 from './templates/Template1'
import Template2 from './templates/Template2'
import Template3 from './templates/Template3'
import Template4 from './templates/Template4'
import Template5 from './templates/Template5'
import Template6 from './templates/Template6'
import Template7 from './templates/Template7'
import Template8 from './templates/Template8'
import Template9 from './templates/Template9'
import Template10 from './templates/Template10'
import Template11 from './templates/Template11'
import Template12 from './templates/Template12'

function ResumePreview({ resumeData }) {
  const [isExporting, setIsExporting] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('template1')
  const { showSuccess, showError } = useNotification()

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      const success = await exportToPDF(resumeData, selectedTemplate)
      if (success) {
        showSuccess('Resume exported successfully! PDF has been downloaded.', 5000)
      } else {
        showError('Failed to export resume. Please try again.', 5000)
      }
    } catch {
      showError('An error occurred while exporting. Please try again.', 5000)
    } finally {
      setIsExporting(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="w-full py-4 sm:py-6 lg:py-8 xl:py-12">
      <div className="w-full bg-white rounded-xl shadow-lg mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-accent text-white rounded-full flex items-center justify-center mr-3 sm:mr-4">👁️</span>
            Resume Preview
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Choose a template and preview your resume</p>
        </div>

        {/* Template Selector */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Template</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              <button
                onClick={() => setSelectedTemplate('template1')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template1'
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📄</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Classic</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template2')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template2'
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📋</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Modern</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template3')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template3'
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🎨</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Creative</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template4')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template4'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📝</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Minimal</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template5')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template5'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🏢</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Professional</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template6')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template6'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">💎</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Elegant</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template7')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template7'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🎯</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Focused</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template8')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template8'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📖</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Classic Serif</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template9')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template9'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">🌈</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Colorful</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template10')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template10'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📐</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Corporate</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template11')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template11'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">📰</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Newspaper</h4>
                </div>
              </button>
              <button
                onClick={() => setSelectedTemplate('template12')}
                className={`p-3 sm:p-4 rounded-lg border-2 transition duration-200 ${
                  selectedTemplate === 'template12'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-lg sm:text-2xl">💻</span>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm">Tech</h4>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 bg-white min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] shadow-inner print:shadow-none print:border-none print:p-6 ui-transition">
          {selectedTemplate === 'template1' && <Template1 resumeData={resumeData} />}
          {selectedTemplate === 'template2' && <Template2 resumeData={resumeData} />}
          {selectedTemplate === 'template3' && <Template3 resumeData={resumeData} />}
          {selectedTemplate === 'template4' && <Template4 resumeData={resumeData} />}
          {selectedTemplate === 'template5' && <Template5 resumeData={resumeData} />}
          {selectedTemplate === 'template6' && <Template6 resumeData={resumeData} />}
          {selectedTemplate === 'template7' && <Template7 resumeData={resumeData} />}
          {selectedTemplate === 'template8' && <Template8 resumeData={resumeData} />}
          {selectedTemplate === 'template9' && <Template9 resumeData={resumeData} />}
          {selectedTemplate === 'template10' && <Template10 resumeData={resumeData} />}
          {selectedTemplate === 'template11' && <Template11 resumeData={resumeData} />}
          {selectedTemplate === 'template12' && <Template12 resumeData={resumeData} />}
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 lg:gap-6">
          <Link
            to="/skills"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg"
          >
            ← Back to Skills
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handlePrint}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg"
            >
              <span>🖨️</span>
              <span>Print Resume</span>
            </button>
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Exporting...</span>
                </>
              ) : (
                <>
                  <span>📄</span>
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg transition duration-200 text-center text-sm sm:text-base lg:text-lg">
              Save Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

ResumePreview.propTypes = {
  resumeData: PropTypes.shape({
    personalInfo: PropTypes.object,
    education: PropTypes.array,
    experience: PropTypes.array,
    skills: PropTypes.array,
    technicalSkills: PropTypes.array,
    achievements: PropTypes.string,
    coursework: PropTypes.string,
    publications: PropTypes.string,
    research: PropTypes.string,
    researchInterest: PropTypes.string,
  }).isRequired,
}

export default ResumePreview