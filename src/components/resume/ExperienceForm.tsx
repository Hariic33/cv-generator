import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ExperienceFormData } from '../data/types';

interface ExperienceFormProps {
  onInputChange: (name: string, value: string | Date | null) => void;
  formData: ExperienceFormData;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ onInputChange, formData }) => {
  const renderInputField = (
    name: keyof ExperienceFormData,
    label: string,
    placeholder: string,
    showDatePicker = false
  ) => {
    const value = formData[name];

    const handleDateChange = (date: Date | null) => {
      onInputChange(name, date);
    };

    const inputElement = showDatePicker ? (
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={handleDateChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText={`Select ${label.toLowerCase()}`}
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value instanceof Date ? value.toISOString().substr(0, 10) : value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(name, e.target.value)}
        placeholder={placeholder}
      />
    );

    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {showDatePicker && <br />}
        {name === 'description' ? (
          <textarea
            name={name}
            value={value as string}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(name, e.target.value)}
            placeholder={placeholder}
            className="textarea"
          />
        ) : (
          inputElement
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
      {renderInputField('description', 'Description', 'Describe your role & achievements', true)}
    </div>
  );
};

export default ExperienceForm;
