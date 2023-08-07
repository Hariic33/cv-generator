import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ExperienceFormData {
  jobTitle: string;
  employer: string;
  city: string;
  country: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}

interface ExperienceFormProps {
  onInputChange: (name: keyof ExperienceFormData, value: string | Date | null) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ onInputChange }) => {
  const initialFormData: ExperienceFormData = {
    jobTitle: '',
    employer: '',
    city: '',
    country: '',
    startDate: null,
    endDate: null,
    description: '',
  };

  const [formData, setFormData] = useState<ExperienceFormData>(initialFormData);

  const handleInputChange = (name: keyof ExperienceFormData, value: string | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onInputChange(name, value);
  };

  const renderInputField = (name: keyof ExperienceFormData, label: string, placeholder: string, showDatePicker = false) => {
    const value = formData[name];
    const isDescription = name === 'description';
  
    return (
      <div>
        <label htmlFor={name}>
          {label}
        </label>
        {isDescription ? (
          <textarea
            name={name}
            value={value as string}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(name, e.target.value)}
            placeholder={placeholder}
            style={{ width: '100%', minHeight: '100px', maxHeight: '200px', resize: 'vertical', overflowY: 'auto' }}
          />
        ) : (
          <>
            {showDatePicker ? (
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
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      {renderInputField('jobTitle', 'Job Title', 'Enter your job title')}
      {renderInputField('employer', 'Employer', 'Enter your employer')}
      {renderInputField('city', 'City', 'Enter your work city')}
      {renderInputField('country', 'Country', 'Enter your work country')}
      {renderInputField('startDate', 'Start Date', 'Select start date', true)}
      {renderInputField('endDate', 'End Date', 'Select end date', true)}
      {renderInputField('description', 'Description', 'Describe your role & achievements')}
    </div>
  );
};

export default ExperienceForm;