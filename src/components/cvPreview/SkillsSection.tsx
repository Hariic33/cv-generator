import React from 'react';

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    skills.length > 0 ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <div style={{ backgroundColor: '#a4adb6' }}>
            <h2 style={{ fontSize: '20px', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}>Skills</h2>
          </div>
          <div className="CVPreview-row" style={{ marginTop: '5px' }}>
            <div className="CVPreview-field">
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default SkillsSection;
