import React from 'react';
import { EducationFormData } from '../types';

interface EducationSectionProps {
    educationFormData: EducationFormData;
    formatDate: (inputDate: Date | null) => string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationFormData, formatDate }) => {
    return (
        <div className="CVPreview-sections">
            {educationFormData.degree || educationFormData.schoolName || (educationFormData.startDate && educationFormData.endDate) ? (
                <div className="CVPreview-section">
                    <div className="CVPreview-container">
                        <div style={{ backgroundColor: '#a4adb6' }}>
                            <h2 style={{ fontSize: '20px', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}>Education</h2>
                        </div>
                        <div className="CVPreview-row" style={{ marginTop: '5px' }}>
                            {educationFormData.degree && <span style={{ fontWeight: 'bold' }}>{educationFormData.degree},</span>}
                            {educationFormData.schoolName && <span style={{ fontWeight: 'bold' }}>{educationFormData.schoolName}</span>}
                            {educationFormData.startDate && educationFormData.endDate && (
                                <span>
                                    {formatDate(educationFormData.startDate)} - {formatDate(educationFormData.endDate)} | {educationFormData.city}, {educationFormData.country}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default EducationSection;