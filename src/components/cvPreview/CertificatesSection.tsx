import React from 'react';
import { Certificate } from '../data/types';

interface CertificatesSectionProps {
    certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
    return (
        certificates.length > 0 ? (
            <div className="CVPreview-section">
                <div className="CVPreview-container">
                    <h2 className="CVPreview-header">Certificates</h2>
                    <div className="CVPreview-row">
                        <div className="CVPreview-field">
                            <ul>
                                {certificates.map((certificate, index) => (
                                    <li key={index}>
                                        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                            <div className="certificate-name">{certificate.name}</div>
                                        </a>
                                        <div className="certificate-info">{certificate.additionalInfo}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default CertificatesSection;
