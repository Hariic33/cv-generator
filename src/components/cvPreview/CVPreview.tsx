import React, { useLayoutEffect } from 'react';
import { Card } from 'antd';
import PersonalInfo from './PersonalInfo';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import CertificatesSection from './CertificatesSection';
import HobbiesSection from './HobbiesSection';
import ReferenceSection from './ReferenceSection';
import { PersonalFormData, EducationFormData, ExperienceFormData, Certificate, ReferenceFormData } from '../data/types';

export type TemplateKey = 'template1' | 'template2' | 'template3';

interface CVPreviewProps {
  personalFormData: PersonalFormData;
  educationFormData: EducationFormData;
  selectedDate: Date | null;
  experienceFormData: ExperienceFormData;
  skills: string[];
  languages: { name: string; level: string }[];
  certificates: Certificate[];
  hobbies: string[];
  referenceFormData: ReferenceFormData;
  selectedTemplate: TemplateKey;
  cvPreviewRef: React.RefObject<HTMLDivElement>;
}

const formatDate = (inputDate: Date | null, isBirthDate: boolean = false) => {
  if (!inputDate) return '';

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');

  if (isBirthDate) {
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  return `${month}-${year}`;
};

export const handleGeneratePDF = async (cvPreviewRef: React.RefObject<HTMLDivElement>) => {
  if (typeof window !== 'undefined') {
    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;

      const element = cvPreviewRef.current;
      const opt = {
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      if (element) {
        await html2pdf().from(element).set(opt).save();
      }
    } catch (error) {
      console.error('Failed to load html2pdf.js:', error);
    }
  }
};

const CVPreview: React.FC<CVPreviewProps> = ({
  personalFormData,
  educationFormData,
  experienceFormData,
  skills,
  languages,
  certificates,
  hobbies,
  referenceFormData,
  selectedTemplate,
  cvPreviewRef,
}) => {

  useLayoutEffect(() => {
    setTemplateStyles(selectedTemplate);
  }, [selectedTemplate]);

  const setTemplateStyles = (template: TemplateKey) => {
    const root = document.documentElement;
    let primaryColor: string = '';
    let secondaryColor: string = '';
    let fontFamily: string = '';
  
    if (template === 'template1') {
      primaryColor = '#ffffff';
      secondaryColor = '#000000';
      fontFamily = 'inherit';
    } else if (template === 'template2') {
      primaryColor = '#ffffff';
      secondaryColor = '#007bff';
      fontFamily = 'Arial, sans-serif';
    } else if (template === 'template3') {
      primaryColor = '#ffffff';
      secondaryColor = '#fa4343';
      fontFamily = 'Verdana, sans-serif';
    }
  
    root.style.setProperty('--cv-preview-primary-color', primaryColor);
    root.style.setProperty('--cv-preview-secondary-color', secondaryColor);
    root.style.setProperty('--cv-preview-font-family', fontFamily);
  };

  return (
    <div ref={cvPreviewRef}>
      <Card className="CVPreview-card">
        <h2 className="full-name">{personalFormData.fullName}</h2>
        <h2 className="job-title">{personalFormData.jobTitle}</h2>
        <PersonalInfo personalFormData={personalFormData} formatDate={formatDate} />
        <div className="CVPreview-columns">
          <div>
            <EducationSection educationFormData={educationFormData} formatDate={formatDate} />
            <SkillsSection skills={skills} />
            <ReferenceSection referenceFormData={referenceFormData} />
          </div>
          <div>
            <ExperienceSection experienceFormData={experienceFormData} formatDate={formatDate} />
            <LanguagesSection languages={languages} />
            <HobbiesSection hobbies={hobbies} />
            <CertificatesSection certificates={certificates} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CVPreview;