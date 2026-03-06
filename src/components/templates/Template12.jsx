import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper'

const Template12 = ({ resumeData }) => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-900 text-white p-8 min-h-screen font-mono print:max-w-full print:mx-0">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{'</>'}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          {resumeData.personalInfo.email && <span className="flex items-center gap-2">📧 {resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span className="flex items-center gap-2">📱 {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span className="flex items-center gap-2">📍 {resumeData.personalInfo.address}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Education */}
          {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
            <SectionWrapper id="education" title="Education">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    (edu.school || edu.degree || edu.year) && (
                      <div key={index} className="border-l-2 border-cyan-400 pl-4">
                        <h3 className="font-semibold text-white">{edu.degree}</h3>
                        <p className="text-gray-300 text-sm">{edu.school}</p>
                        <span className="text-cyan-400 text-sm font-medium">{edu.year}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Technical Skills */}
          {resumeData.technicalSkills.some(skill => skill.trim()) && (
            <SectionWrapper id="technical-skills" title="Technical Skills">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Technical Skills
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {resumeData.technicalSkills.map((skill, index) => (
                    skill.trim() && (
                      <div key={index} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="text-green-400">✓</span> {skill}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Skills */}
          {resumeData.skills.some(skill => skill.trim()) && (
            <SectionWrapper id="skills" title="Skills">
              <div className="bg_gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Skills
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {resumeData.skills.map((skill, index) => (
                    skill.trim() && (
                      <div key={index} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="text-blue-400">○</span> {skill}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Experience */}
          {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
            <SectionWrapper id="experience" title="Experience">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    (exp.company || exp.position || exp.duration || exp.description) && (
                      <div key={index} className="border-l-2 border-blue-400 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white">{exp.position}</h3>
                          <span className="text-blue-400 text-sm font-medium bg-blue-900 px-2 py-1 rounded">{exp.duration}</span>
                        </div>
                        <p className="text-gray-300 mb-2 text-sm">{exp.company}</p>
                        <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Additional Sections */}
          <div className="space-y-6">
            {resumeData.achievements && (
              <SectionWrapper id="achievements" title="Achievements">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Achievements
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{resumeData.achievements}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.coursework && (
              <SectionWrapper id="coursework" title="Coursework">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Coursework
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{resumeData.coursework}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.publications && (
              <SectionWrapper id="publications" title="Publications">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Publications
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{resumeData.publications}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.research && (
              <SectionWrapper id="research" title="Research">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Research
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{resumeData.research}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.researchInterest && (
              <SectionWrapper id="research-interest" title="Research Interests">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h2 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Research Interests
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">{resumeData.researchInterest}</p>
                </div>
              </SectionWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template12;
