import React from 'react';
import { ExperienceFormData } from '../data/types';
import '../../app/css/cvPreview.css';

interface ExperienceSectionProps {
  experienceFormData: ExperienceFormData;
  formatDate: (inputDate: Date | null) => string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceFormData, formatDate }) => {
  return (
    (experienceFormData.jobTitle || experienceFormData.employer || (experienceFormData.startDate && experienceFormData.endDate) || experienceFormData.description) ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <h2 className="CVPreview-header">Experience</h2>
          <div className="CVPreview-row">
            {experienceFormData.jobTitle && <span className="bold-text">{experienceFormData.jobTitle},</span>}
            {experienceFormData.employer && <span className="bold-text">{experienceFormData.employer},</span>}
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
