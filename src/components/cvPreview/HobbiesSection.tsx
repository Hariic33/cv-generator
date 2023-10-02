import React from 'react';
import '../../app/css/cvPreview.css';

interface HobbiesSectionProps {
  hobbies: string[];
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ hobbies }) => {
  return (
    hobbies.length > 0 ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <h2 className="CVPreview-header">Hobbies</h2>
          <div className="CVPreview-row">
            <div className="CVPreview-field">
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default HobbiesSection;
