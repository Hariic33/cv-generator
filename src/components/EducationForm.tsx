import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface EducationFormData {
  degree: string;
  schoolName: string;
  startDate: Date | null;
  endDate: Date | null;
  city: string;
  country: string;
}

interface EducationFormProps {
  onInputChange: (name: string, value: string | Date | null) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ onInputChange }) => {
  const initialFormData: EducationFormData = {
    degree: '',
    schoolName: '',
    startDate: null,
    endDate: null,
    city: '',
    country: '',
  };

  const [formData, setFormData] = useState<EducationFormData>(initialFormData);

  const handleInputChange = (name: string, value: string | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onInputChange(name, value);
  };

  const renderInputField = (name: keyof EducationFormData, label: string, placeholder: string, showDatePicker = false) => {
    const value = formData[name];
    return (
      <div>
        <label htmlFor={name}>
          {label}
        </label>
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
      </div>
    );
  };

  return (
    <div>
      {renderInputField('degree', 'Degree', 'Enter your degree')}
      {renderInputField('schoolName', 'School Name', 'Enter your school name')}
      {renderInputField('startDate', 'Start Date', 'Select start date', true)}
      {renderInputField('endDate', 'End Date', 'Select end date', true)}
      {renderInputField('city', 'City', 'Enter your schools city')}
      {renderInputField('country', 'Country', 'Enter your school country')}
    </div>
  );
};

export default EducationForm;