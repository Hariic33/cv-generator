import React, { useState } from 'react';

interface SkillsProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (index: number) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, onAddSkill, onRemoveSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      onAddSkill(newSkill);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    onRemoveSkill(index);
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
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleRemoveSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
