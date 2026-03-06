import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper'

const Template6 = ({ resumeData }) => {
  return (
    <div className="max-w-5xl mx-auto card-surface rounded-2xl shadow-soft p-8 min-h-screen print:max-w-full print:mx-0 ui-transition">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-transform duration-300 card-surface">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-accent">
            {resumeData.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 muted">
            {resumeData.personalInfo.email && <span className="flex items-center gap-2">✉ {resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && <span className="flex items-center gap-2">☎ {resumeData.personalInfo.phone}</span>}
            {resumeData.personalInfo.address && <span className="flex items-center gap-2">📍 {resumeData.personalInfo.address}</span>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
        <div className="space-y-6">
          {/* Education Card */}
          {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
            <SectionWrapper id="education" title="Education">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🎓 Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    (edu.school || edu.degree || edu.year) && (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <span className="text-sm text-blue-600 font-medium">{edu.year}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Skills Card */}
          {(resumeData.technicalSkills.some(skill => skill.trim()) || resumeData.skills.some(skill => skill.trim())) && (
            <SectionWrapper id="skills" title="Skills">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  ⚡ Skills
                </h2>
                <div className="space-y-4">
                  {resumeData.technicalSkills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.technicalSkills.map((skill, index) => (
                          skill.trim() && (
                            <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                  {resumeData.skills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Other Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill, index) => (
                          skill.trim() && (
                            <span key={index} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionWrapper>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Experience Card */}
          {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
            <SectionWrapper id="experience" title="Experience">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  💼 Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    (exp.company || exp.position || exp.duration || exp.description) && (
                      <div key={index} className="border-l-4 border-green-500 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                          <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">{exp.duration}</span>
                        </div>
                        <p className="text-gray-600 mb-2 font-medium">{exp.company}</p>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Additional Sections */}
          <div className="space-y-6">
            {/* Achievements */}
            {resumeData.achievements && (
              <SectionWrapper id="achievements" title="Achievements">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🏆 Achievements
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
                </div>
              </SectionWrapper>
            )}

            {/* Coursework */}
            {resumeData.coursework && (
              <SectionWrapper id="coursework" title="Coursework">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    📚 Coursework
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
                </div>
              </SectionWrapper>
            )}

            {/* Publications */}
            {resumeData.publications && (
              <SectionWrapper id="publications" title="Publications">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    📄 Publications
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
                </div>
              </SectionWrapper>
            )}

            {/* Research */}
            {resumeData.research && (
              <SectionWrapper id="research" title="Research">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🔬 Research
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.research}</p>
                </div>
              </SectionWrapper>
            )}

            {/* Research Interest */}
            {resumeData.researchInterest && (
              <SectionWrapper id="research-interest" title="Research Interests">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    🎯 Research Interests
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
                </div>
              </SectionWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;
