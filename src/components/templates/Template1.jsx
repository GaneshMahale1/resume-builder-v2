import SectionWrapper from './SectionWrapper'

function Template1({ resumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 font-sans print:max-w-full print:mx-0 rounded-2xl shadow-soft p-8 ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 ui-transition">
      {/* Header */}
      <header className="text-center py-8 border-b-2 border-gray-300 print:border-b-0">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-accent mb-2">
          {resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
          {resumeData.personalInfo.email && (
            <span className="flex items-center space-x-1">
              <span aria-hidden>📧</span>
              <span className="text-sm text-gray-600">{resumeData.personalInfo.email}</span>
            </span>
          )}
          {resumeData.personalInfo.phone && (
            <span className="flex items-center space-x-1">
              <span aria-hidden>📱</span>
              <span>{resumeData.personalInfo.phone}</span>
            </span>
          )}
          {resumeData.personalInfo.address && (
            <span className="flex items-center space-x-1">
              <span aria-hidden>📍</span>
              <span>{resumeData.personalInfo.address}</span>
            </span>
          )}
        </div>
      </header>

      {/* Education */}
      {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
        <SectionWrapper id="education" title="Education">
          <div className="space-y-3 prose prose-sm">
            {resumeData.education.map((edu, index) => (
              (edu.school || edu.degree || edu.year) ? (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{edu.year}</span>
                </div>
              ) : null
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Experience */}
      {resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) && (
        <SectionWrapper id="experience" title="Work Experience">
          <div className="space-y-4 prose prose-sm">
            {resumeData.experience.map((exp, index) => (
              (exp.company || exp.position || exp.duration || exp.description) ? (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                    <span className="text-gray-500 text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ) : null
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Skills */}
      {resumeData.skills.some(skill => skill.trim()) && (
        <SectionWrapper id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              skill.trim() ? (
                <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ) : null
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Technical Skills */}
      {resumeData.technicalSkills.some(skill => skill.trim()) && (
        <SectionWrapper id="technical-skills" title="Technical Skills">
          <div className="flex flex-wrap gap-2">
            {resumeData.technicalSkills.map((skill, index) => (
              skill.trim() ? (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
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

      {/* Coursework */}
      {resumeData.coursework && (
        <SectionWrapper id="coursework" title="Coursework">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.coursework}</p>
        </SectionWrapper>
      )}

      {/* Publications */}
      {resumeData.publications && (
        <SectionWrapper id="publications" title="Publications">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.publications}</p>
        </SectionWrapper>
      )}

      {/* Research */}
      {resumeData.research && (
        <SectionWrapper id="research" title="Research">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.research}</p>
        </SectionWrapper>
      )}

      {/* Research Interest */}
      {resumeData.researchInterest && (
        <SectionWrapper id="research-interest" title="Research Interests">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{resumeData.researchInterest}</p>
        </SectionWrapper>
      )}
    </div>
  )
}

export default Template1
