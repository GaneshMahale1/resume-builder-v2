import React from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from './SectionWrapper'

const Template11 = ({ resumeData }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg font-serif print:max-w-full print:mx-0">
      {/* Header - Newspaper Style */}
      <div className="border-b-4 border-black mb-8 pb-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-2 uppercase tracking-wider">
            {resumeData.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 border-t border-b border-gray-300 py-2 my-4">
            {resumeData.personalInfo.email && <span>EMAIL: {resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && <span>PHONE: {resumeData.personalInfo.phone}</span>}
            {resumeData.personalInfo.address && <span>ADDRESS: {resumeData.personalInfo.address}</span>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Education & Skills */}
        <div className="space-y-8">
          {/* Education */}
          {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
            <SectionWrapper id="education" title="Education">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black pb-1">
                  Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    (edu.school || edu.degree || edu.year) && (
                      <div key={index} className="border-l-4 border-gray-400 pl-3">
                        <h3 className="font-bold text-gray-900 uppercase text-sm">{edu.degree}</h3>
                        <p className="text-gray-700 text-sm">{edu.school}</p>
                        <span className="text-gray-600 text-xs font-medium">{edu.year}</span>
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
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black pb-1">
                  Skills
                </h2>
                <div className="space-y-3">
                  {resumeData.technicalSkills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="font-bold text-gray-700 text-sm mb-2 uppercase">Technical</h3>
                      <div className="text-xs text-gray-700 leading-relaxed">
                        {resumeData.technicalSkills.filter(skill => skill.trim()).join(' • ')}
                      </div>
                    </div>
                  )}
                  {resumeData.skills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="font-bold text-gray-700 text-sm mb-2 uppercase">Other</h3>
                      <div className="text-xs text-gray-700 leading-relaxed">
                        {resumeData.skills.filter(skill => skill.trim()).join(' • ')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionWrapper>
          )}
        </div>

        {/* Right Column - Experience & Additional Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
            <SectionWrapper id="experience" title="Experience">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6 uppercase border-b-2 border-black pb-2">
                  Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    (exp.company || exp.position || exp.duration || exp.description) && (
                      <div key={index} className="border-b border-gray-300 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-900 uppercase">{exp.position}</h3>
                          <span className="text-gray-600 font-medium text-sm">{exp.duration}</span>
                        </div>
                        <p className="text-gray-700 mb-2 font-medium uppercase text-sm">{exp.company}</p>
                        <p className="text-gray-800 leading-relaxed text-sm">{exp.description}</p>
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
                <div className="border border-gray-300 p-4">
                  <h2 className="text-lg font-bold text-black mb-2 uppercase">Achievements</h2>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.achievements}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.coursework && (
              <SectionWrapper id="coursework" title="Coursework">
                <div className="border border-gray-300 p-4">
                  <h2 className="text-lg font-bold text-black mb-2 uppercase">Coursework</h2>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.coursework}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.publications && (
              <SectionWrapper id="publications" title="Publications">
                <div className="border border-gray-300 p-4">
                  <h2 className="text-lg font-bold text-black mb-2 uppercase">Publications</h2>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.publications}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.research && (
              <SectionWrapper id="research" title="Research">
                <div className="border border-gray-300 p-4">
                  <h2 className="text-lg font-bold text-black mb-2 uppercase">Research</h2>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.research}</p>
                </div>
              </SectionWrapper>
            )}

            {resumeData.researchInterest && (
              <SectionWrapper id="research-interest" title="Research Interests">
                <div className="border border-gray-300 p-4 md:col-span-2">
                  <h2 className="text-lg font-bold text-black mb-2 uppercase">Research Interests</h2>
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{resumeData.researchInterest}</p>
                </div>
              </SectionWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template11;
