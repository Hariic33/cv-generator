import React from 'react';

interface LanguagesSectionProps {
    languages: { name: string; level: string }[];
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
    return (
        languages.length > 0 ? (
            <div className="CVPreview-section">
                <div className="CVPreview-container">
                    <h2 className="CVPreview-header">Languages</h2>
                    <div className="CVPreview-row">
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
