import React from 'react';
import { Card } from 'antd';
import PersonalInfo from './PersonalInfo';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import CertificatesSection from './CertificatesSection';
import HobbiesSection from './HobbiesSection';
import { PersonalFormData, EducationFormData, ExperienceFormData, Certificate } from '../data/types';

interface CVPreviewProps {
  personalFormData: PersonalFormData;
  educationFormData: EducationFormData;
  selectedDate: Date | null;
  experienceFormData: ExperienceFormData;
  skills: string[];
  languages: { name: string; level: string }[];
  certificates: Certificate[];
  hobbies: string[];
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

const CVPreview: React.FC<CVPreviewProps> = ({ personalFormData, educationFormData, experienceFormData, skills, languages, certificates, hobbies }) => {
  return (
    <Card>
      <h2 style={{ fontSize: '32px', marginTop: '20px', textAlign: 'center' }}>{personalFormData.fullName}</h2>
      <h2 style={{ fontSize: '24px', textAlign: 'center' }}>{personalFormData.jobTitle}</h2>
      <PersonalInfo personalFormData={personalFormData} formatDate={formatDate} />
      <EducationSection educationFormData={educationFormData} formatDate={formatDate} />
      <ExperienceSection experienceFormData={experienceFormData} formatDate={formatDate} />
      <SkillsSection skills={skills} />
      <LanguagesSection languages={languages} />
      <CertificatesSection certificates={certificates} />
      <HobbiesSection hobbies={hobbies} />
    </Card>
  );
};

export default CVPreview;
