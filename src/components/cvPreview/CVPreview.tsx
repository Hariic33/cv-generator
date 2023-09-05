import React from 'react';
import { Card } from 'antd';
import PersonalInfo from './PersonalInfo';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';

import { PersonalFormData, EducationFormData, ExperienceFormData } from './types';

interface CVPreviewProps {
  personalFormData: PersonalFormData;
  educationFormData: EducationFormData;
  selectedDate: Date | null;
  experienceFormData: ExperienceFormData;
  skills: string[];
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

const CVPreview: React.FC<CVPreviewProps> = ({ personalFormData, educationFormData, experienceFormData, skills }) => {
  return (
    <Card>
      <h2 style={{ fontSize: '32px', marginTop: '20px', textAlign: 'center' }}>{personalFormData.fullName}</h2>
      <h2 style={{ fontSize: '24px', textAlign: 'center' }}>{personalFormData.jobTitle}</h2>

      <PersonalInfo personalFormData={personalFormData} formatDate={formatDate} />

      <EducationSection educationFormData={educationFormData} formatDate={formatDate} />

      <ExperienceSection experienceFormData={experienceFormData} formatDate={formatDate} />

      <SkillsSection skills={skills} />
    </Card>
  );
};

export default CVPreview;
