import React, { useState } from 'react';

interface SkillsProps {
  onAddSkill: (skill: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ onAddSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      onAddSkill(newSkill);
      setNewSkill('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;