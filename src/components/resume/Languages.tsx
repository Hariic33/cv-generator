import React, { useState } from 'react';

interface LanguagesProps {
    languages: { name: string; level: string }[];
    onAddLanguage: (name: string, level: string) => void;
    onRemoveLanguage: (index: number) => void;
}

const Languages: React.FC<LanguagesProps> = ({ languages, onAddLanguage, onRemoveLanguage }) => {
    const [newLanguage, setNewLanguage] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('Beginner');

    const handleAddLanguage = () => {
        if (newLanguage.trim()) {
            onAddLanguage(newLanguage, selectedLevel);
            setNewLanguage('');
            setSelectedLevel('Beginner');
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter a language"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                />
                <select
                    title="Language Level"
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    value={selectedLevel}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Elementary proficiency">Elementary proficiency</option>
                    <option value="Limited working proficiency">Limited working proficiency</option>
                    <option value="Highly proficient in speaking and writing">Highly proficient in speaking and writing</option>
                    <option value="Native / full working proficiency">Native / full working proficiency</option>
                </select>

                <button onClick={handleAddLanguage} disabled={!newLanguage.trim()}>
                    Add Language
                </button>
            </div>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>
                        {language.name} - {language.level}
                        <button onClick={() => onRemoveLanguage(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Languages;
