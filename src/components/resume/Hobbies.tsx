import React, { useState } from 'react';

interface HobbiesProps {
  hobbies: string[];
  onAddHobby: (hobby: string) => void;
  onRemoveHobby: (index: number) => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies, onAddHobby, onRemoveHobby }) => {
  const [newHobby, setNewHobby] = useState('');

  const handleAddHobby = () => {
    if (newHobby.trim()) {
      onAddHobby(newHobby);
      setNewHobby('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter a hobby"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
        />
        <button onClick={handleAddHobby} disabled={!newHobby.trim()}>
          Add Hobby
        </button>
      </div>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button onClick={() => onRemoveHobby(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
