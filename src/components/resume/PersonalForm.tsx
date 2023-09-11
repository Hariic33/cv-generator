import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PersonalFormData } from '../data/types';

interface PersonalFormProps {
  formData: PersonalFormData;
  onInputChange: (name: string, value: string | Date | null) => void;
  onDateChange: (date: Date | null) => void;
  selectedDate: Date | null;
}

const renderInputField = (
  name: keyof PersonalFormData,
  label: string,
  placeholder: string,
  recommendationType: string | undefined,
  inputType: string = 'text',
  additionalProps: any = {}
) => {
  const { formData, selectedDate, onInputChange, onDateChange } = additionalProps;
  const value = name === 'birthDate' ? selectedDate : formData[name];

  return (
    <div key={name}>
      <label htmlFor={name}>
        {label} {recommendationType && <span className="recommendation-label">({recommendationType})</span>}
      </label>
      {name === 'birthDate' ? (
        <>
          <br />
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => onDateChange(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="Select a date"
          />
        </>
      ) : (
        <input
          type={inputType}
          name={name}
          value={value instanceof Date ? value.toLocaleDateString() : value || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(name, e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const PersonalForm: React.FC<PersonalFormProps> = (props) => (
  <div>
    {renderInputField('fullName', 'Full Name', 'Enter your full name', 'required', 'text', props)}
    {renderInputField('jobTitle', 'Job Title', 'Enter your job title', 'optional', 'text', props)}
    {renderInputField('emailAddress', 'Email Address', 'Enter your email address', 'recommended', 'email', props)}
    {renderInputField('phoneNumber', 'Phone Number', 'Enter your phone number', 'recommended', 'tel', props)}
    {renderInputField('address', 'Address', 'Enter your address', 'recommended', 'text', props)}
    {renderInputField('birthDate', 'Date of Birth', '', 'optional', 'date', props)}
    {renderInputField('nationality', 'Nationality', 'Enter your nationality', 'optional', 'text', props)}
    {renderInputField('gender', 'Gender', 'Enter your gender', 'optional', 'text', props)}
    {renderInputField('linkedIn', 'LinkedIn', 'Enter your LinkedIn', 'optional', 'url', props)}
  </div>
);

export default PersonalForm;
