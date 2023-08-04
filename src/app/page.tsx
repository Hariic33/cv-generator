'use client';
import React, { useState } from 'react';
import { Card } from 'antd';
import PersonalForm, { PersonalFormData } from '@/components/PersonalForm';
import EducationForm from '@/components/EducationForm';
import CVPreview from '@/components/CVPreview';
import './globals.css';

const Page: React.FC = () => {
  const [personalFormData, setPersonalFormData] = useState<PersonalFormData>({
    fullName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    address: '',
    birthDate: null,
    nationality: '',
    gender: '',
    linkedIn: '',
  });

  const [educationFormData, setEducationFormData] = useState({
    degree: '',
    schoolName: '',
    startDate: null,
    endDate: null,
    city: '',
    country: '',
  });

  const [isEducationFormVisible, setEducationFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePersonalFormInputChange = (name: string, value: string) => {
    setPersonalFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleEducationFormInputChange = (name: string, value: string | Date | null) => {
    setEducationFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Personal Form Data:', personalFormData);
    console.log('Education Form Data:', educationFormData);
  };

  const toggleEducationFormVisibility = () => {
    setEducationFormVisible(prevVisible => !prevVisible);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setPersonalFormData(prevData => ({ ...prevData, birthDate: date }));
  };
  
  return (
    <main className="flex min-h-screen p-24">
      <div className="flex-1">
        <div className="max-w-md">
        <h2 className="mb-4 text-2xl font-semibold" style={{ marginTop: 0, textAlign: 'center' }}>Resume</h2>
        <p className="text-xl font-semibold flex-1" style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Personal Information</p>
          <form onSubmit={handleSave}>
            <div className="mb-4">
              <PersonalForm
                formData={personalFormData}
                onInputChange={handlePersonalFormInputChange}
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
              />
            </div>
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1" style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Education
              <button
                type="button"
                onClick={toggleEducationFormVisibility}
                className={isEducationFormVisible ? 'button-toggle-active' : 'button-toggle'}
              >
                {isEducationFormVisible ? '-' : '+'}
              </button></p>
            </div>
            {isEducationFormVisible && <EducationForm onInputChange={handleEducationFormInputChange} />}
            <button
              type="submit"
              className="button-save" style={{textAlign: 'center' }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 ml-8">
        <Card className="bg-white rounded shadow">
          <div className="cv-preview-container">
            <CVPreview personalFormData={personalFormData} educationFormData={educationFormData} selectedDate={selectedDate} />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Page;