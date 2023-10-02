import React, { useEffect } from 'react';
import { Card } from 'antd';
import PersonalInfo from './PersonalInfo';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import CertificatesSection from './CertificatesSection';
import HobbiesSection from './HobbiesSection';
import { PersonalFormData, EducationFormData, ExperienceFormData, Certificate, ReferenceFormData } from '../data/types';
import ReferenceSection from './ReferenceSection';

export type TemplateKey = 'template1' | 'template2';

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
}) => {
  useEffect(() => {
    setTemplateStyles(selectedTemplate);
  }, [selectedTemplate]);

  const setTemplateStyles = (template: TemplateKey) => {
    const root = document.documentElement;
    const [primaryColor, secondaryColor] =
      template === 'template1' ? ['#ffffff', '#000000'] : ['#000000', '#ffffff'];

    root.style.setProperty('--cv-preview-primary-color', primaryColor);
    root.style.setProperty('--cv-preview-secondary-color', secondaryColor);
  };

  return (
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
  );
};

export default CVPreview;