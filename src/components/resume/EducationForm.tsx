import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { EducationFormData } from '../data/types';

interface EducationFormProps {
  onInputChange: (name: string, value: string | Date | null) => void;
  formData: EducationFormData;
}

const EducationForm: React.FC<EducationFormProps> = ({ onInputChange, formData }) => {
  const renderInputField = (
    name: keyof EducationFormData,
    label: string,
    placeholder: string,
    showDatePicker = false
  ) => {
    const value = formData[name];

    const handleChange = (newValue: string | Date | null) => {
      onInputChange(name, newValue);
    };

    const inputElement = showDatePicker ? (
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date: Date | null) => handleChange(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText={`Select ${label.toLowerCase()}`}
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value instanceof Date ? value.toISOString().substr(0, 10) : value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    );

    return (
      <div>
        <label htmlFor={name}>{label}</label>
        {showDatePicker && <br />}
        {inputElement}
      </div>
    );
  };

  return (
    <div>
      {renderInputField('degree', 'Degree', 'Enter your degree')}
      {renderInputField('schoolName', 'School Name', 'Enter your school name')}
      {renderInputField('startDate', 'Start Date', 'Select start date', true)}
      {renderInputField('endDate', 'End Date', 'Select end date', true)}
      {renderInputField('city', 'City', 'Enter your school city')}
      {renderInputField('country', 'Country', 'Enter your school country')}
    </div>
  );
};

export default EducationForm;
