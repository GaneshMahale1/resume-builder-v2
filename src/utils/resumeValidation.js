// Resume validation and scoring utilities

export const validateResume = (resumeData) => {
  const errors = [];
  const warnings = [];
  const suggestions = [];

  // Defensive checks for data structure
  if (!resumeData || !resumeData.personalInfo) {
    errors.push('Resume data is invalid or missing');
    return { errors, warnings, suggestions, isValid: false, score: 0 };
  }

  // Personal Info Validation
  if (!resumeData.personalInfo.name?.trim()) {
    errors.push('Full name is required');
  }

  if (!resumeData.personalInfo.email?.trim()) {
    errors.push('Email address is required');
  } else if (!isValidEmail(resumeData.personalInfo.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!resumeData.personalInfo.phone?.trim()) {
    warnings.push('Phone number is recommended for better contact options');
  }
  else if (!isValidPhone(resumeData.personalInfo.phone)) {
    warnings.push('Phone number format looks invalid — use international or local format (digits, +, spaces, dashes)');
  }

  // Education Validation
  const validEducation = (resumeData.education || []).filter(edu =>
    edu.school?.trim() || edu.degree?.trim() || edu.year?.trim()
  );

  if (validEducation.length === 0) {
    errors.push('At least one education entry is required');
  } else {
    // Track original indices for proper display
    let entryNum = 0;
    (resumeData.education || []).forEach((edu) => {
      if (edu.school?.trim() || edu.degree?.trim() || edu.year?.trim()) {
        entryNum++;
        if (!edu.degree?.trim()) {
          warnings.push(`Education ${entryNum}: Degree/title is recommended`);
        }
        if (!edu.school?.trim()) {
          warnings.push(`Education ${entryNum}: School/institution name is recommended`);
        }
        if (!edu.year?.trim()) {
          suggestions.push(`Education ${entryNum}: Add graduation year for better context`);
        } else if (!isValidYear(edu.year)) {
          warnings.push(`Education ${entryNum}: Year '${edu.year}' looks invalid`);
        }
      }
    });
  }

  // Experience Validation
  const validExperience = (resumeData.experience || []).filter(exp =>
    exp.company?.trim() || exp.position?.trim() || exp.duration?.trim() || exp.description?.trim()
  );

  if (validExperience.length === 0) {
    warnings.push('Work experience is highly recommended for most positions');
  } else {
    // Track original indices for proper display
    let entryNum = 0;
    (resumeData.experience || []).forEach((exp) => {
      if (exp.company?.trim() || exp.position?.trim() || exp.duration?.trim() || exp.description?.trim()) {
        entryNum++;
        if (!exp.position?.trim()) {
          warnings.push(`Experience ${entryNum}: Job title/position is required`);
        }
        if (!exp.company?.trim()) {
          warnings.push(`Experience ${entryNum}: Company name is recommended`);
        }
        if (!exp.duration?.trim()) {
          suggestions.push(`Experience ${entryNum}: Add employment duration`);
        } else if (!isValidDuration(exp.duration)) {
          suggestions.push(`Experience ${entryNum}: Use a clear duration format (e.g. '2019 - 2021' or 'Jan 2019 - Present')`);
        }
        if (!exp.description?.trim()) {
          suggestions.push(`Experience ${entryNum}: Add job description and achievements`);
        } else if (exp.description.length < 50) {
          suggestions.push(`Experience ${entryNum}: Consider adding more details about your responsibilities and achievements`);
        }
      }
    });
  }

  // Skills Validation
  const validSkills = (resumeData.skills || []).filter(skill => skill?.trim());
  const validTechnicalSkills = (resumeData.technicalSkills || []).filter(skill => skill?.trim());

  if (validSkills.length === 0 && validTechnicalSkills.length === 0) {
    warnings.push('Skills section helps showcase your abilities');
  } else if ((validSkills.length + validTechnicalSkills.length) < 5) {
    suggestions.push('Consider adding more skills (5-10 is typically good)');
  }

  // Check for duplicate skills
  const allSkills = [...validSkills, ...validTechnicalSkills].map(s => s.trim().toLowerCase());
  const duplicates = findDuplicates(allSkills);
  if (duplicates.length > 0) {
    suggestions.push(`Remove duplicate skills: ${duplicates.slice(0,5).join(', ')}`);
  }

  // ATS Optimization Suggestions
  if (resumeData.personalInfo.name) {
    suggestions.push('Consider including relevant keywords from the job description in your experience descriptions');
  }

  return {
    errors,
    warnings,
    suggestions,
    isValid: errors.length === 0,
    score: calculateResumeScore(resumeData)
  };
};

export const calculateResumeScore = (resumeData) => {
  let score = 0;
  let maxScore = 100;

  if (!resumeData || !resumeData.personalInfo) return 0;

  // Personal Info (25 points)
  if (resumeData.personalInfo.name?.trim()) score += 10;
  if (resumeData.personalInfo.email?.trim() && isValidEmail(resumeData.personalInfo.email)) score += 10;
  if (resumeData.personalInfo.phone?.trim()) score += 5;

  // Education (25 points)
  const validEducation = (resumeData.education || []).filter(edu =>
    edu.school?.trim() || edu.degree?.trim() || edu.year?.trim()
  );
  if (validEducation.length > 0) {
    score += Math.min(validEducation.length * 8, 25);
  }

  // Experience (30 points)
  const validExperience = (resumeData.experience || []).filter(exp =>
    exp.company?.trim() || exp.position?.trim() || exp.duration?.trim() || exp.description?.trim()
  );
  if (validExperience.length > 0) {
    score += Math.min(validExperience.length * 10, 30);
  }

  // Skills (20 points)
  const validSkills = (resumeData.skills || []).filter(skill => skill?.trim());
  const validTechnicalSkills = (resumeData.technicalSkills || []).filter(skill => skill?.trim());
  if (validSkills.length > 0 || validTechnicalSkills.length > 0) {
    score += Math.min((validSkills.length + validTechnicalSkills.length) * 4, 20);
  }

  return Math.min(score, maxScore);
};

export const getResumeScoreCategory = (score) => {
  if (score >= 90) return { category: 'Excellent', color: 'text-green-600', bgColor: 'bg-green-100' };
  if (score >= 75) return { category: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-100' };
  if (score >= 60) return { category: 'Fair', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
  if (score >= 40) return { category: 'Needs Improvement', color: 'text-orange-600', bgColor: 'bg-orange-100' };
  return { category: 'Incomplete', color: 'text-red-600', bgColor: 'bg-red-100' };
};

export const getKeywordSuggestions = (jobDescription = '') => {
  const commonKeywords = [
    'leadership', 'communication', 'problem-solving', 'teamwork', 'project management',
    'customer service', 'sales', 'marketing', 'data analysis', 'programming',
    'javascript', 'python', 'react', 'node.js', 'sql', 'agile', 'scrum',
    'microsoft office', 'excel', 'powerpoint', 'word', 'google workspace'
  ];

  if (!jobDescription) return commonKeywords.slice(0, 10);

  const jobDescLower = jobDescription.toLowerCase();
  const matchedKeywords = commonKeywords.filter(keyword =>
    jobDescLower.includes(keyword.toLowerCase())
  );

  return matchedKeywords.length > 0 ? matchedKeywords : commonKeywords.slice(0, 10);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  // Accepts digits, spaces, dashes, parentheses and optional leading +
  const phoneRegex = /^\+?[0-9\s\-()]{6,20}$/;
  return phoneRegex.test(phone.trim());
};

const isValidYear = (year) => {
  const numeric = year.toString().trim();
  const maybe = numeric.match(/(\d{4})/);
  if (!maybe) return false;
  const y = parseInt(maybe[1], 10);
  const current = new Date().getFullYear();
  return y >= 1900 && y <= current + 6;
};

const isValidDuration = (duration) => {
  // simple heuristic: contains a 4-digit year or 'present' keyword
  const d = duration.toLowerCase();
  return /\d{4}/.test(d) || /present|current|ongoing/.test(d);
};

const findDuplicates = (arr) => {
  const seen = new Map();
  const dups = new Set();
  arr.forEach(item => {
    if (!item) return;
    if (seen.has(item)) dups.add(item);
    else seen.set(item, 1);
  });
  return Array.from(dups);
};

export { isValidPhone, isValidYear, isValidDuration };