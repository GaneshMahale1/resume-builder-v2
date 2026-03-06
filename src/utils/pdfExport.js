import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (resumeData, template = 'template1') => {
  try {
    // Create a temporary div to render the resume for PDF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = generateResumeHTML(resumeData, template);
    tempDiv.style.width = '800px';
    tempDiv.style.padding = '40px';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.color = '#333';
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';

    document.body.appendChild(tempDiv);

    // Generate canvas from the HTML
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 800,
      height: tempDiv.offsetHeight
    });

    // Remove temporary div
    document.body.removeChild(tempDiv);

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Download the PDF
    const fileName = `${resumeData.personalInfo.name || 'Resume'}.pdf`;
    pdf.save(fileName);

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};

const generateResumeHTML = (resumeData, template = 'template1') => {
  const styles = {
    template1: {
      container: 'max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;',
      header: 'text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #333;',
      h1: 'font-size: 28px; font-weight: bold; margin: 0 0 10px 0; color: #333;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 14px; color: #666;',
      section: 'margin-bottom: 25px;',
      h2: 'font-size: 20px; font-weight: bold; margin: 0 0 15px 0; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px;',
      education: 'display: flex; flex-direction: column; gap: 15px;',
      experience: 'display: flex; flex-direction: column; gap: 20px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 8px;',
      skill: 'background-color: #f0f0f0; color: #333; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;'
    },
    template2: {
      container: 'max-width: 700px; margin: 0 auto; font-family: Georgia, serif; color: #333;',
      header: 'margin-bottom: 30px; padding-bottom: 20px; border-bottom: 4px solid #2563eb;',
      h1: 'font-size: 32px; font-weight: bold; margin: 0 0 10px 0; color: #1e40af;',
      contact: 'display: flex; flex-wrap: wrap; gap: 20px; font-size: 14px; color: #666; margin-bottom: 20px;',
      section: 'margin-bottom: 30px;',
      h2: 'font-size: 22px; font-weight: bold; margin: 0 0 15px 0; color: #1e40af; text-transform: uppercase; letter-spacing: 1px;',
      education: 'display: grid; grid-template-columns: 1fr 1fr; gap: 20px;',
      experience: 'display: flex; flex-direction: column; gap: 25px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 10px;',
      skill: 'background-color: #dbeafe; color: #1e40af; padding: 8px 16px; border-radius: 25px; font-size: 14px; font-weight: 600;'
    },
    template3: {
      container: 'max-width: 650px; margin: 0 auto; font-family: system-ui, sans-serif; color: #1f2937; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 30px; border-radius: 15px;',
      header: 'text-align: center; margin-bottom: 40px; padding: 30px; background: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);',
      h1: 'font-size: 36px; font-weight: 800; margin: 0 0 15px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-size: 16px; color: #6b7280;',
      section: 'margin-bottom: 35px; background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);',
      h2: 'font-size: 24px; font-weight: 700; margin: 0 0 20px 0; color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;',
      education: 'display: flex; flex-direction: column; gap: 20px;',
      experience: 'display: flex; flex-direction: column; gap: 25px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 12px;',
      skill: 'background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 10px 18px; border-radius: 30px; font-size: 14px; font-weight: 600; box-shadow: 0 2px 4px rgba(59,130,246,0.3);'
    },
    template4: {
      container: 'max-width: 4xl; margin: 0 auto; font-family: Arial, sans-serif; color: #333; background: white; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'text-align: center; margin-bottom: 48px;',
      h1: 'font-size: 36px; font-weight: bold; margin: 0 0 16px 0; color: #111827;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; font-size: 14px; color: #6b7280;',
      section: 'margin-bottom: 32px;',
      h2: 'font-size: 24px; font-weight: bold; margin: 0 0 16px 0; color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 8px;',
      skill: 'background-color: #f3f4f6; color: #374151; padding: 6px 12px; border-radius: 9999px; font-size: 13px; font-weight: 500;'
    },
    template5: {
      container: 'max-width: 6xl; margin: 0 auto; font-family: Arial, sans-serif; color: #333; background: white; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'margin-bottom: 48px; padding: 32px; background: #111827; color: white;',
      h1: 'font-size: 30px; font-weight: bold; margin: 0 0 16px 0; color: white;',
      contact: 'display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: #d1d5db;',
      section: 'margin-bottom: 32px;',
      h2: 'font-size: 20px; font-weight: bold; margin: 0 0 16px 0; color: #111827; text-transform: uppercase; letter-spacing: 0.05em;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-direction: column; gap: 8px;',
      skill: 'color: #d1d5db; font-size: 14px; margin-left: 16px;'
    },
    template6: {
      container: 'max-width: 5xl; margin: 0 auto; font-family: system-ui, sans-serif; color: #1f2937; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 32px; min-height: 100vh;',
      header: 'text-align: center; margin-bottom: 64px; padding: 48px; background: white; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      h1: 'font-size: 48px; font-weight: bold; margin: 0 0 24px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; font-size: 16px; color: #6b7280;',
      section: 'margin-bottom: 32px; background: white; padding: 32px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);',
      h2: 'font-size: 24px; font-weight: 700; margin: 0 0 24px 0; color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 12px;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 12px;',
      skill: 'background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 8px 16px; border-radius: 9999px; font-size: 14px; font-weight: 600;'
    },
    template7: {
      container: 'max-width: 4xl; margin: 0 auto; font-family: Arial, sans-serif; color: #333; background: white; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'border-bottom: 4px solid #4f46e5; padding-bottom: 32px; margin-bottom: 48px;',
      h1: 'font-size: 36px; font-weight: bold; margin: 0 0 16px 0; color: #111827;',
      contact: 'display: flex; flex-wrap: wrap; gap: 24px; font-size: 14px; color: #6b7280;',
      section: 'margin-bottom: 32px; background: #f8fafc; padding: 24px; border-radius: 8px;',
      h2: 'font-size: 20px; font-weight: bold; margin: 0 0 16px 0; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 8px;',
      skill: 'background-color: #e0e7ff; color: #4f46e5; padding: 6px 12px; border-radius: 9999px; font-size: 13px; font-weight: 500;'
    },
    template8: {
      container: 'max-width: 3xl; margin: 0 auto; font-family: Georgia, serif; color: #111827; background: white; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'text-align: center; margin-bottom: 32px; padding-bottom: 16px; border-bottom: 2px solid #111827;',
      h1: 'font-size: 30px; font-weight: bold; margin: 0 0 16px 0; color: #111827;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; font-size: 14px; color: #6b7280;',
      section: 'margin-bottom: 24px;',
      h2: 'font-size: 18px; font-weight: bold; margin: 0 0 12px 0; color: #111827; text-transform: uppercase; letter-spacing: 0.05em;',
      education: 'display: flex; flex-direction: column; gap: 12px;',
      experience: 'display: flex; flex-direction: column; gap: 16px;',
      skills: 'font-size: 14px; color: #6b7280; line-height: 1.5;',
      skill: 'display: inline;'
    },
    template9: {
      container: 'max-width: 5xl; margin: 0 auto; font-family: system-ui, sans-serif; color: #1f2937; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 2px; min-height: 100vh;',
      header: 'text-align: center; margin-bottom: 64px; background: white; padding: 48px; border-radius: 16px;',
      h1: 'font-size: 40px; font-weight: bold; margin: 0 0 24px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; font-size: 16px; color: #6b7280;',
      section: 'margin-bottom: 32px; background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);',
      h2: 'font-size: 20px; font-weight: 700; margin: 0 0 16px 0; color: #1f2937;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 8px;',
      skill: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 16px; border-radius: 9999px; font-size: 14px; font-weight: 600;'
    },
    template10: {
      container: 'max-width: 4xl; margin: 0 auto; font-family: Arial, sans-serif; color: #333; background: white; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'border-left: 8px solid #14b8a6; padding-left: 24px; margin-bottom: 48px;',
      h1: 'font-size: 36px; font-weight: bold; margin: 0 0 16px 0; color: #111827;',
      contact: 'display: flex; flex-wrap: wrap; gap: 24px; font-size: 14px; color: #6b7280;',
      section: 'margin-bottom: 32px;',
      h2: 'font-size: 20px; font-weight: bold; margin: 0 0 16px 0; color: #14b8a6; display: flex; align-items: center; gap: 8px;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: flex; flex-wrap: wrap; gap: 8px;',
      skill: 'background-color: #ccfbf1; color: #0f766e; padding: 6px 12px; border-radius: 9999px; font-size: 13px; font-weight: 500;'
    },
    template11: {
      container: 'max-width: 6xl; margin: 0 auto; font-family: Georgia, serif; color: #111827; background: white; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);',
      header: 'border-bottom: 4px solid #111827; margin-bottom: 64px; padding-bottom: 16px;',
      h1: 'font-size: 48px; font-weight: bold; margin: 0 0 16px 0; color: #111827; text-transform: uppercase; letter-spacing: 0.05em;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; font-size: 14px; color: #374151; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; padding: 8px 0; margin: 16px 0;',
      section: 'margin-bottom: 32px;',
      h2: 'font-size: 24px; font-weight: bold; margin: 0 0 16px 0; color: #111827; text-transform: uppercase; border-bottom: 2px solid #111827; padding-bottom: 4px;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'font-size: 12px; color: #374151; line-height: 1.6;',
      skill: 'display: inline;'
    },
    template12: {
      container: 'max-width: 5xl; margin: 0 auto; font-family: "Courier New", monospace; color: #f9fafb; background: #111827; padding: 32px; min-height: 100vh;',
      header: 'text-align: center; margin-bottom: 64px;',
      h1: 'font-size: 36px; font-weight: bold; margin: 0 0 24px 0; background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;',
      contact: 'display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; font-size: 14px; color: #d1d5db;',
      section: 'margin-bottom: 32px; background: #1f2937; padding: 24px; border-radius: 8px; border: 1px solid #374151;',
      h2: 'font-size: 18px; font-weight: bold; margin: 0 0 16px 0; color: #06b6d4; display: flex; align-items: center; gap: 8px;',
      education: 'display: flex; flex-direction: column; gap: 16px;',
      experience: 'display: flex; flex-direction: column; gap: 24px;',
      skills: 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;',
      skill: 'color: #d1d5db; font-size: 14px; display: flex; align-items: center; gap: 8px;'
    }
  };

  const currentStyle = styles[template] || styles.template1;

  return `
    <div style="${currentStyle.container}">
      <!-- Header -->
      <div style="${currentStyle.header}">
        <h1 style="${currentStyle.h1}">
          ${resumeData.personalInfo.name || 'Your Name'}
        </h1>
        <div style="${currentStyle.contact}">
          ${resumeData.personalInfo.email ? `<span>📧 ${resumeData.personalInfo.email}</span>` : ''}
          ${resumeData.personalInfo.phone ? `<span>📱 ${resumeData.personalInfo.phone}</span>` : ''}
          ${resumeData.personalInfo.address ? `<span>📍 ${resumeData.personalInfo.address}</span>` : ''}
        </div>
      </div>

      <!-- Education -->
      ${resumeData.education.some(edu => edu.school || edu.degree || edu.year) ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Education</h2>
          <div style="${currentStyle.education}">
            ${resumeData.education.map(edu => {
              if (edu.school || edu.degree || edu.year) {
                return `
                  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                      <h3 style="font-size: 16px; font-weight: bold; margin: 0 0 5px 0; color: #333;">${edu.degree}</h3>
                      <p style="margin: 0; color: #666; font-size: 14px;">${edu.school}</p>
                    </div>
                    <span style="color: #666; font-weight: 500; font-size: 14px;">${edu.year}</span>
                  </div>
                `;
              }
              return '';
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Experience -->
      ${resumeData.experience.some(exp => exp.company || exp.position || exp.duration || exp.description) ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Work Experience</h2>
          <div style="${currentStyle.experience}">
            ${resumeData.experience.map(exp => {
              if (exp.company || exp.position || exp.duration || exp.description) {
                return `
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                      <h3 style="font-size: 16px; font-weight: bold; margin: 0; color: #333;">${exp.position}</h3>
                      <span style="color: #666; font-weight: 500; font-size: 14px;">${exp.duration}</span>
                    </div>
                    <p style="margin: 0 0 8px 0; color: #666; font-weight: 500; font-size: 14px;">${exp.company}</p>
                    <p style="margin: 0; color: #555; line-height: 1.5; font-size: 14px;">${exp.description}</p>
                  </div>
                `;
              }
              return '';
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Achievements -->
      ${resumeData.achievements ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Achievements</h2>
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px; white-space: pre-line;">${resumeData.achievements}</p>
        </div>
      ` : ''}

      <!-- Coursework -->
      ${resumeData.coursework ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Coursework</h2>
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px; white-space: pre-line;">${resumeData.coursework}</p>
        </div>
      ` : ''}

      <!-- Publications -->
      ${resumeData.publications ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Publications</h2>
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px; white-space: pre-line;">${resumeData.publications}</p>
        </div>
      ` : ''}

      <!-- Research -->
      ${resumeData.research ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Research</h2>
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px; white-space: pre-line;">${resumeData.research}</p>
        </div>
      ` : ''}

      <!-- Research Interest -->
      ${resumeData.researchInterest ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Research Interests</h2>
          <p style="margin: 0; color: #555; line-height: 1.6; font-size: 14px; white-space: pre-line;">${resumeData.researchInterest}</p>
        </div>
      ` : ''}

      <!-- Technical Skills -->
      ${resumeData.technicalSkills.some(skill => skill.trim()) ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Technical Skills</h2>
          <div style="${currentStyle.skills}">
            ${resumeData.technicalSkills.map(skill => {
              if (skill.trim()) {
                return `<span style="${currentStyle.skill}">${skill}</span>`;
              }
              return '';
            }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Skills -->
      ${resumeData.skills.some(skill => skill.trim()) ? `
        <div style="${currentStyle.section}">
          <h2 style="${currentStyle.h2}">Skills</h2>
          <div style="${currentStyle.skills}">
            ${resumeData.skills.map(skill => {
              if (skill.trim()) {
                return `<span style="${currentStyle.skill}">${skill}</span>`;
              }
              return '';
            }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
};