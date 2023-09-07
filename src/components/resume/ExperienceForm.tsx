import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ExperienceFormData } from '../data/types';
import { initialExperienceFormData } from '../data/initialFormData';

interface ExperienceFormProps {
  onInputChange: (name: keyof ExperienceFormData, value: string | Date | null) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ onInputChange }) => {
  const [formData, setFormData] = useState<ExperienceFormData>(initialExperienceFormData);

  const handleInputChange = (name: keyof ExperienceFormData, value: string | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onInputChange(name, value);
  };
  const renderInput = (
    name: keyof ExperienceFormData,
    label: string,
    placeholder: string,
    showDatePicker = false
  ) => {
    const value = formData[name];
  
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {name === 'description' ? (
          <textarea
            name={name}
            value={value as string}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
            style={{ width: '100%', minHeight: '100px', maxHeight: '200px', resize: 'vertical', overflowY: 'auto' }}
          />
        ) : showDatePicker ? (
          <>
            <br />
            <DatePicker
              selected={value ? new Date(value) : null}
              onChange={(date: Date | null) => handleInputChange(name, date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              placeholderText={`Select ${label.toLowerCase()}`}
            />
          </>
        ) : (
          <input
            type="text"
            name={name}
            value={value instanceof Date ? value.toISOString().substr(0, 10) : value || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };
  
  return (
    <div>
      {renderInput('jobTitle', 'Job Title', 'Enter your job title')}
      {renderInput('employer', 'Employer', 'Enter your employer')}
      {renderInput('city', 'City', 'Enter your work city')}
      {renderInput('country', 'Country', 'Enter your work country')}
      {renderInput('startDate', 'Start Date', 'Select start date', true)}
      {renderInput('endDate', 'End Date', 'Select end date', true)}
      {renderInput('description', 'Description', 'Describe your role & achievements', true)}
    </div>
  );  
};

export default ExperienceForm;
