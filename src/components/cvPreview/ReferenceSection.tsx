import React from 'react';
import { ReferenceFormData } from '../data/types';

interface ReferenceSectionProps {
    referenceFormData: ReferenceFormData;
}

const ReferenceSection: React.FC<ReferenceSectionProps> = ({ referenceFormData }) => (
    referenceFormData.fullName || referenceFormData.jobTitle || referenceFormData.organization || referenceFormData.emailAddress || referenceFormData.phoneNumber ? (
        <div className="CVPreview-section">
            <div className="CVPreview-container">
                <h2 className="CVPreview-header">References</h2>
                <div className="CVPreview-row">
                    {(referenceFormData.fullName || referenceFormData.jobTitle || referenceFormData.organization) && (
                        <div>
                            {referenceFormData.fullName && <span className="bold-text">{referenceFormData.fullName}</span>}
                            {referenceFormData.fullName && (referenceFormData.jobTitle || referenceFormData.organization) && <span className="bold-text">, </span>}
                            {referenceFormData.jobTitle && <span>{referenceFormData.jobTitle}</span>}
                            {referenceFormData.jobTitle && referenceFormData.organization && <span>, </span>}
                            {referenceFormData.organization && <span>{referenceFormData.organization}</span>}
                        </div>
                    )}
                    {(referenceFormData.emailAddress || referenceFormData.phoneNumber) && (
                        <div>
                            {referenceFormData.emailAddress && <span>{referenceFormData.emailAddress}</span>}
                            {referenceFormData.emailAddress && referenceFormData.phoneNumber && <span>, </span>}
                            {referenceFormData.phoneNumber && <span>{referenceFormData.phoneNumber}</span>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null
);

export default ReferenceSection;