import React from 'react';

interface LanguagesSectionProps {
    languages: { name: string; level: string }[];
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
    return (
        languages.length > 0 ? (
            <div className="CVPreview-section">
                <div className="CVPreview-container">
                    <div style={{ backgroundColor: '#a4adb6' }}>
                        <h2 style={{ fontSize: '20px', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}>Languages</h2>
                    </div>
                    <div className="CVPreview-row" style={{ marginTop: '5px' }}>
                        <div className="CVPreview-field">
                            <ul>
                                {languages.map((language, index) => (
                                    <li key={index}>
                                        {language.name} - {language.level}
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

export default LanguagesSection;