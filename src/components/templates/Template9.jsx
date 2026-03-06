import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper'

const Template9 = ({ resumeData }) => {
  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 min-h-screen print:max-w-full print:mx-0">
      <div className="bg-white h-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {(resumeData.personalInfo.name || 'Your Name').charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {resumeData.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {resumeData.personalInfo.email && <span>✉ {resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && <span>☎ {resumeData.personalInfo.phone}</span>}
            {resumeData.personalInfo.address && <span>📍 {resumeData.personalInfo.address}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Education */}
            {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
              <SectionWrapper id="education" title="Education">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    🎓 Education
                  </h2>
                  <div className="space-y-4">
                    {resumeData.education.map((edu, index) => (
                      (edu.school || edu.degree || edu.year) && (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600 text-sm">{edu.school}</p>
                          <span className="text-blue-600 text-sm font-medium">{edu.year}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            )}

            {/* Skills */}
            {(resumeData.technicalSkills.some(skill => skill.trim()) || resumeData.skills.some(skill => skill.trim())) && (
              <SectionWrapper id="skills" title="Skills">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    ⚡ Skills
                  </h2>
                  <div className="space-y-3">
                    {resumeData.technicalSkills.some(skill => skill.trim()) && (
                      <div>
                        <h3 className="font-semibold text-gray-700 text-sm mb-2">Technical</h3>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.technicalSkills.map((skill, index) => (
                            skill.trim() && (
                              <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                {skill}
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                    {resumeData.skills.some(skill => skill.trim()) && (
                      <div>
                        <h3 className="font-semibold text-gray-700 text-sm mb-2">Other</h3>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.map((skill, index) => (
                            skill.trim() && (
                              <span key={index} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
              <SectionWrapper id="experience" title="Experience">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                    💼 Experience
                  </h2>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      (exp.company || exp.position || exp.duration || exp.description) && (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">{exp.duration}</span>
                          </div>
                          <p className="text-gray-600 mb-2">{exp.company}</p>
                          <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            )}

            {/* Additional Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.achievements && (
                <SectionWrapper id="achievements" title="Achievements">
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl">
                    <h2 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                      🏆 Achievements
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.achievements}</p>
                  </div>
                </SectionWrapper>
              )}

              {resumeData.coursework && (
                <SectionWrapper id="coursework" title="Coursework">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                    <h2 className="text-lg font-bold text-indigo-800 mb-2 flex items-center gap-2">
                      📚 Coursework
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.coursework}</p>
                  </div>
                </SectionWrapper>
              )}

              {resumeData.publications && (
                <SectionWrapper id="publications" title="Publications">
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl">
                    <h2 className="text-lg font-bold text-pink-800 mb-2 flex items-center gap-2">
                      📄 Publications
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.publications}</p>
                  </div>
                </SectionWrapper>
              )}

              {resumeData.research && (
                <SectionWrapper id="research" title="Research">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl">
                    <h2 className="text-lg font-bold text-cyan-800 mb-2 flex items-center gap-2">
                      🔬 Research
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.research}</p>
                  </div>
                </SectionWrapper>
              )}

              {resumeData.researchInterest && (
                <SectionWrapper id="research-interest" title="Research Interests">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-xl md:col-span-2">
                    <h2 className="text-lg font-bold text-violet-800 mb-2 flex items-center gap-2">
                      🎯 Research Interests
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.researchInterest}</p>
                  </div>
                </SectionWrapper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template9;
