import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface PersonalFormData {
  fullName: string;
  jobTitle: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  birthDate: Date | null;
  nationality: string;
  gender: string;
  linkedIn: string;
}

interface PersonalFormProps {
  formData: PersonalFormData;
  onInputChange: (name: string, value: string) => void;
  onDateChange: (date: Date | null) => void;
  selectedDate: Date | null;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ formData, onInputChange, selectedDate, onDateChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const renderInputField = (name: keyof PersonalFormData, label: string, placeholder: string, recommendationType: string) => {
    let value = formData[name];
    if (value instanceof Date) {
      value = value.toLocaleDateString();
    }
    
    return (
      <div>
        <label htmlFor={name}>
          {label} {recommendationType && <span style={{ fontSize: '12px', color: 'gray' }}>({recommendationType})</span>}
        </label>
        <input
          type="text"
          name={name}
          value={value || ''}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
    );
  };

  const handleDateChange = (date: Date | null) => {
    onDateChange(date);
  };

  return (
    <div>
      {renderInputField('fullName', 'Full Name', 'Enter your full name', 'required')}
      {renderInputField('jobTitle', 'Job Title', 'Enter your job title', 'optional')}
      {renderInputField('emailAddress', 'Email Address', 'Enter your email address', 'recommended')}
      {renderInputField('phoneNumber', 'Phone Number', 'Enter your phone number', 'recommended')}
      {renderInputField('address', 'Address', 'Enter your address', 'recommended')}
      <div>
        <label htmlFor="birthDate">
          Date of Birth <span style={{ fontSize: '12px', color: 'gray' }}>(optional)</span>
        </label>
        <br />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select a date"
        />
      </div>
      {renderInputField('nationality', 'Nationality', 'Enter your nationality', 'optional')}
      {renderInputField('gender', 'Gender', 'Enter your gender', 'optional')}
      {renderInputField('linkedIn', 'LinkedIn', 'Enter your LinkedIn', 'optional')}
    </div>
  );
};

export default PersonalForm;