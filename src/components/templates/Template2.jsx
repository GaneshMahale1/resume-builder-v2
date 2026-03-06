import SectionWrapper from './SectionWrapper'

function Template2({ resumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 font-serif print:max-w-full print:mx-0 rounded-2xl shadow-soft p-8 ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 ui-transition">
      {/* Header with left alignment */}
      <div className="py-8 border-b-4 border-accent">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          {resumeData.personalInfo.email && (
            <span className="flex items-center space-x-1">
              <span>📧</span>
              <span>{resumeData.personalInfo.email}</span>
            </span>
          )}
          {resumeData.personalInfo.phone && (
            <span className="flex items-center space-x-1">
              <span>📱</span>
              <span>{resumeData.personalInfo.phone}</span>
            </span>
          )}
          {resumeData.personalInfo.address && (
            <span className="flex items-center space-x-1">
              <span>📍</span>
              <span>{resumeData.personalInfo.address}</span>
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          {/* Education */}
          {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
            <SectionWrapper id="education" title="Education">
              <div className="space-y-3 prose prose-sm">
                {resumeData.education.map((edu, index) => (
                  (edu.school || edu.degree || edu.year) ? (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-800 text-sm">{edu.degree}</h3>
                      <p className="text-gray-600 text-sm">{edu.school}</p>
                      <p className="text-gray-500 text-xs">{edu.year}</p>
                    </div>
                  ) : null
                ))}
              </div>
            </SectionWrapper>
          )}

          {/* Skills */}
          {(resumeData.skills.some(skill => skill.trim()) || resumeData.technicalSkills.some(skill => skill.trim())) && (
            <SectionWrapper id="skills" title="Skills">
              <div className="space-y-2 prose prose-sm">
                {resumeData.skills.map((skill, index) => (
                  skill.trim() ? (
                    <div key={index} className="text-sm text-gray-700">• {skill}</div>
                  ) : null
                ))}
                {resumeData.technicalSkills.map((skill, index) => (
                  skill.trim() ? (
                    <div key={index} className="text-sm text-gray-700 font-medium">• {skill}</div>
                  ) : null
                ))}
              </div>
            </SectionWrapper>
          )}
        </div>

          {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience */}
          {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
            <SectionWrapper id="experience" title="Experience">
              <div className="space-y-4 prose prose-sm">
                {resumeData.experience.map((exp, index) => (
                  (exp.company || exp.position || exp.duration || exp.description) ? (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                        <span className="text-gray-500 text-sm">{exp.duration}</span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ) : null
                ))}
              </div>
            </SectionWrapper>
          )}

          {/* Achievements */}
          {resumeData.achievements && (
            <SectionWrapper id="achievements" title="Achievements">
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
            </SectionWrapper>
          )}

          {/* Research */}
          {(resumeData.research || resumeData.researchInterest) && (
            <SectionWrapper id="research" title="Research">
              {resumeData.research && (
                <div className="mb-3">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.research}</p>
                </div>
              )}
              {resumeData.researchInterest && (
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">Research Interests</h3>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
                </div>
              )}
            </SectionWrapper>
          )}

          {/* Publications & Coursework */}
          {(resumeData.publications || resumeData.coursework) && (
            <div>
              {resumeData.publications && (
                <SectionWrapper id="publications" title="Publications">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
                </SectionWrapper>
              )}
              {resumeData.coursework && (
                <SectionWrapper id="coursework" title="Coursework">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
                </SectionWrapper>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Template2
