import React from 'react';
import '../../app/css/cvPreview.css';

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    skills.length > 0 ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <h2 className="CVPreview-header">Skills</h2>
          <div className="CVPreview-row">
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
