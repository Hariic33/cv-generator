import React from 'react';
import { ExperienceFormData } from '../types';

interface ExperienceSectionProps {
  experienceFormData: ExperienceFormData;
  formatDate: (inputDate: Date | null) => string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceFormData, formatDate }) => {
  return (
    (experienceFormData.jobTitle || experienceFormData.employer || (experienceFormData.startDate && experienceFormData.endDate) || experienceFormData.description) ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <div style={{ backgroundColor: '#a4adb6' }}>
            <h2 style={{ fontSize: '20px', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}>Experience</h2>
          </div>
          <div className="CVPreview-row" style={{ marginTop: '5px' }}>
            {experienceFormData.jobTitle && <span style={{ fontWeight: 'bold' }}>{experienceFormData.jobTitle},</span>}
            {experienceFormData.employer && <span style={{ fontWeight: 'bold' }}>{experienceFormData.employer},</span>}
            {experienceFormData.startDate && experienceFormData.endDate && (
              <span>
                {formatDate(experienceFormData.startDate)} - {formatDate(experienceFormData.endDate)} | {experienceFormData.city}, {experienceFormData.country}
              </span>
            )}
            {experienceFormData.description && <span>{experienceFormData.description}</span>}
          </div>
        </div>
      </div>
    ) : null
  );
};

export default ExperienceSection;
