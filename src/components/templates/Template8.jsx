import React from 'react';
import SectionWrapper from './SectionWrapper'

const Template8 = ({ resumeData }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg font-serif print:max-w-full print:mx-0">
      {/* Header */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>• {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span>• {resumeData.personalInfo.address}</span>}
        </div>
      </div>

      {/* Education */}
      {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
        <SectionWrapper id="education" title="Education">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">Education</h2>
            <div className="space-y-3">
              {resumeData.education.map((edu, index) => (
                (edu.school || edu.degree || edu.year) && (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600 text-sm">{edu.school}</p>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{edu.year}</span>
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
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">Experience</h2>
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                (exp.company || exp.position || exp.duration || exp.description) && (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-gray-600 text-sm font-medium">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1 italic">{exp.company}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
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
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">Skills</h2>
            <div className="space-y-2">
              {resumeData.technicalSkills.some(skill => skill.trim()) && (
                <div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">Technical Skills</h3>
                  <p className="text-gray-600 text-sm">{resumeData.technicalSkills.filter(skill => skill.trim()).join(', ')}</p>
                </div>
              )}
              {resumeData.skills.some(skill => skill.trim()) && (
                <div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">Other Skills</h3>
                  <p className="text-gray-600 text-sm">{resumeData.skills.filter(skill => skill.trim()).join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Additional Sections */}
      <div className="space-y-4">
        {resumeData.achievements && (
          <SectionWrapper id="achievements" title="Achievements">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider">Achievements</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
            </div>
          </SectionWrapper>
        )}

        {resumeData.coursework && (
          <SectionWrapper id="coursework" title="Coursework">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider">Coursework</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
            </div>
          </SectionWrapper>
        )}

        {resumeData.publications && (
          <SectionWrapper id="publications" title="Publications">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider">Publications</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
            </div>
          </SectionWrapper>
        )}

        {resumeData.research && (
          <SectionWrapper id="research" title="Research">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider">Research</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.research}</p>
            </div>
          </SectionWrapper>
        )}

        {resumeData.researchInterest && (
          <SectionWrapper id="research-interest" title="Research Interests">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider">Research Interests</h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
            </div>
          </SectionWrapper>
        )}
      </div>
    </div>
  );
};

export default Template8;
