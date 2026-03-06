import SectionWrapper from './SectionWrapper'

function Template3({ resumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 p-8 print:max-w-full print:mx-0 ui-transition">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">
            {resumeData.personalInfo.name || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            {resumeData.personalInfo.email && (
                <span className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                  <span>📧</span>
                  <span className="text-sm text-gray-600">{resumeData.personalInfo.email}</span>
                </span>
              )}
            {resumeData.personalInfo.phone && (
              <span className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                <span>📱</span>
                <span>{resumeData.personalInfo.phone}</span>
              </span>
            )}
            {resumeData.personalInfo.address && (
              <span className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                <span>📍</span>
                <span>{resumeData.personalInfo.address}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
        <div className="space-y-6">
          {/* Education Card */}
          {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
            <SectionWrapper id="education" title="Education">
              <div className="bg-white rounded-2xl shadow-soft p-6 ring-1 ring-gray-100 prose prose-sm">
                <h2 className="text-xl font-bold text-purple-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">🎓</span>
                  Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    (edu.school || edu.degree || edu.year) ? (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-purple-600 text-sm font-medium">{edu.year}</p>
                      </div>
                    ) : null
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Skills Card */}
          {(resumeData.skills.some(skill => skill.trim()) || resumeData.technicalSkills.some(skill => skill.trim())) && (
            <SectionWrapper id="skills" title="Skills">
              <div className="bg-white rounded-2xl shadow-soft p-6 ring-1 ring-gray-100 prose prose-sm">
                <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">⚡</span>
                  Skills
                </h2>
                <div className="space-y-3">
                  {resumeData.skills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">General Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill, index) => (
                          skill.trim() ? (
                            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}
                  {resumeData.technicalSkills.some(skill => skill.trim()) && (
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.technicalSkills.map((skill, index) => (
                          skill.trim() ? (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Achievements Card */}
          {resumeData.achievements && (
            <SectionWrapper id="achievements" title="Achievements">
              <div className="bg-white rounded-2xl shadow-soft p-6 ring-1 ring-gray-100 prose prose-sm">
                <h2 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">🏆</span>
                  Achievements
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.achievements}</p>
              </div>
            </SectionWrapper>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Experience Card */}
          {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
            <SectionWrapper id="experience" title="Experience">
              <div className="bg-white rounded-2xl shadow-soft p-6 ring-1 ring-gray-100 prose prose-sm">
                <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">💼</span>
                  Experience
                </h2>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    (exp.company || exp.position || exp.duration || exp.description) ? (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                          <span className="text-blue-600 text-sm font-medium bg-blue-100 px-2 py-1 rounded">{exp.duration}</span>
                        </div>
                        <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    ) : null
                  ))}
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* Research Card */}
          {(resumeData.research || resumeData.researchInterest) && (
            <SectionWrapper id="research" title="Research">
              <div className="bg-white rounded-2xl shadow-soft p-6 ring-1 ring-gray-100 prose prose-sm">
                <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">🔬</span>
                  Research
                </h2>
                {resumeData.research && (
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.research}</p>
                  </div>
                )}
                {resumeData.researchInterest && (
                  <div>
                    <h3 className="font-semibold text-indigo-600 mb-2">Research Interests</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
                  </div>
                )}
              </div>
            </SectionWrapper>
          )}

          {/* Publications & Coursework Card */}
          {(resumeData.publications || resumeData.coursework) && (
            <SectionWrapper id="academic" title="Academic Work">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-teal-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">📚</span>
                  Academic Work
                </h2>
                {resumeData.publications && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-teal-600 mb-2">Publications</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
                  </div>
                )}
                {resumeData.coursework && (
                  <div>
                    <h3 className="font-semibold text-teal-600 mb-2">Coursework</h3>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
                  </div>
                )}
              </div>
            </SectionWrapper>
          )}
        </div>
      </div>
    </div>
  )
}

export default Template3
