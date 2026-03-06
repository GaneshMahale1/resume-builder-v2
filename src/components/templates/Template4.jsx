import React from 'react';
import SectionWrapper from './SectionWrapper'

const Template4 = ({ resumeData }) => {
  return (
    <div className="max-w-4xl mx-auto card-surface rounded-2xl shadow-soft p-8 ring-1 ring-gray-100 print:max-w-full print:mx-0 ui-transition">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm muted">
          {resumeData.personalInfo.email && <span>✉ {resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>☎ {resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span>📍 {resumeData.personalInfo.address}</span>}
        </div>
      </div>

      {/* Education */}
      {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
        <SectionWrapper id="education" title="Education">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Education</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                (edu.school || edu.degree || edu.year) && (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-gray-600 font-medium">{edu.year}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Experience</h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                (exp.company || exp.position || exp.duration || exp.description) && (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <span className="text-gray-600 font-medium">{exp.duration}</span>
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

      {/* Achievements */}
      {resumeData.achievements && (
        <SectionWrapper id="achievements" title="Achievements">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Achievements</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
          </div>
        </SectionWrapper>
      )}

      {/* Coursework */}
      {resumeData.coursework && (
        <SectionWrapper id="coursework" title="Coursework">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Coursework</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
          </div>
        </SectionWrapper>
      )}

      {/* Publications */}
      {resumeData.publications && (
        <SectionWrapper id="publications" title="Publications">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Publications</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
          </div>
        </SectionWrapper>
      )}

      {/* Research */}
      {resumeData.research && (
        <SectionWrapper id="research" title="Research">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Research</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.research}</p>
          </div>
        </SectionWrapper>
      )}

      {/* Research Interest */}
      {resumeData.researchInterest && (
        <SectionWrapper id="research-interest" title="Research Interests">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Research Interests</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
          </div>
        </SectionWrapper>
      )}

      {/* Technical Skills */}
      {resumeData.technicalSkills.some(skill => skill.trim()) && (
        <SectionWrapper id="technical-skills" title="Technical Skills">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.technicalSkills.map((skill, index) => (
                skill.trim() && (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                )
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Skills */}
      {resumeData.skills.some(skill => skill.trim()) && (
        <SectionWrapper id="skills" title="Skills">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">Skills</h2>
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
        </SectionWrapper>
      )}
    </div>
  );
};

export default Template4;
