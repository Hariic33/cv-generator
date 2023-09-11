import React from 'react';
import { EducationFormData } from '../data/types';

interface EducationSectionProps {
    educationFormData: EducationFormData;
    formatDate: (inputDate: Date | null) => string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationFormData, formatDate }) => {
    return (
        educationFormData.degree || educationFormData.schoolName || (educationFormData.startDate && educationFormData.endDate) ? (
            <div className="CVPreview-section">
                <div className="CVPreview-container">
                    <h2 className="CVPreview-header">Education</h2>
                    <div className="CVPreview-row">
                        {educationFormData.degree && <span className="bold-text">{educationFormData.degree},</span>}
                        {educationFormData.schoolName && <span className="bold-text">{educationFormData.schoolName}</span>}
                        {educationFormData.startDate && educationFormData.endDate && (
                            <span>
                                {formatDate(educationFormData.startDate)} - {formatDate(educationFormData.endDate)} | {educationFormData.city}, {educationFormData.country}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default EducationSection;