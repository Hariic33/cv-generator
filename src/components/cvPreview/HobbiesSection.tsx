import React from 'react';

interface HobbiesSectionProps {
  hobbies: string[];
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ hobbies }) => {
  return (
    hobbies.length > 0 ? (
      <div className="CVPreview-section">
        <div className="CVPreview-container">
          <div style={{ backgroundColor: '#a4adb6' }}>
            <h2 style={{ fontSize: '20px', marginTop: '1px', marginBottom: '5px', textAlign: 'center' }}>Hobbies</h2>
          </div>
          <div className="CVPreview-row" style={{ marginTop: '5px' }}>
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
