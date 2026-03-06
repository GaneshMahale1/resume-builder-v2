import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper'

const Template10 = ({ resumeData }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg print:max-w-full print:mx-0">
      {/* Header */}
      <div className="border-l-8 border-teal-600 pl-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {resumeData.personalInfo.email && <span>✉ {resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>☎ {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span>📍 {resumeData.personalInfo.address}</span>}
        </div>
      </div>

      {/* Education */}
      {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
        <SectionWrapper id="education" title="Education">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-teal-600 rounded"></span>
              Education
            </h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                (edu.school || edu.degree || edu.year) && (
                  <div key={index} className="ml-4 border-l-2 border-gray-200 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                      </div>
                      <span className="text-teal-600 font-medium">{edu.year}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Experience */}
      {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
        <SectionWrapper id="experience" title="Experience">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-teal-600 rounded"></span>
              Experience
            </h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                (exp.company || exp.position || exp.duration || exp.description) && (
                  <div key={index} className="ml-4 border-l-2 border-gray-200 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-teal-600 font-medium">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-teal-600 rounded"></span>
              Skills
            </h2>
            <div className="ml-4 border-l-2 border-gray-200 pl-4">
              {resumeData.technicalSkills.some(skill => skill.trim()) && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.technicalSkills.map((skill, index) => (
                      skill.trim() && (
                        <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
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
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
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

      {/* Additional Sections */}
      <div className="space-y-6">
        {resumeData.achievements && (
          <SectionWrapper id="achievements" title="Achievements">
            <div>
              <h2 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-600 rounded"></span>
                Achievements
              </h2>
              <div className="ml-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
              </div>
            </div>
          </SectionWrapper>
        )}

        {resumeData.coursework && (
          <SectionWrapper id="coursework" title="Coursework">
            <div>
              <h2 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-600 rounded"></span>
                Coursework
              </h2>
              <div className="ml-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
              </div>
            </div>
          </SectionWrapper>
        )}

        {resumeData.publications && (
          <SectionWrapper id="publications" title="Publications">
            <div>
              <h2 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-600 rounded"></span>
                Publications
              </h2>
              <div className="ml-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
              </div>
            </div>
          </SectionWrapper>
        )}

        {resumeData.research && (
          <SectionWrapper id="research" title="Research">
            <div>
              <h2 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-600 rounded"></span>
                Research
              </h2>
              <div className="ml-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.research}</p>
              </div>
            </div>
          </SectionWrapper>
        )}

        {resumeData.researchInterest && (
          <SectionWrapper id="research-interest" title="Research Interests">
            <div>
              <h2 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-600 rounded"></span>
                Research Interests
              </h2>
              <div className="ml-4 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
              </div>
            </div>
          </SectionWrapper>
        )}
      </div>
    </div>
  );
};

export default Template10;
