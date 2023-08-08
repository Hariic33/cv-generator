'use client';
import React, { useState } from 'react';
import { Card } from 'antd';
import PersonalForm, { PersonalFormData } from '@/components/PersonalForm';
import EducationForm from '@/components/EducationForm';
import ExperienceForm from '@/components/ExperienceForm';
import Skills from '@/components/Skills';
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

  const [experienceFormData, setExperienceFormData] = useState({
    jobTitle: '',
    employer: '',
    city: '',
    country: '',
    startDate: null,
    endDate: null,
    description: '',
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [isEducationFormVisible, setEducationFormVisible] = useState(false);
  const [isExperienceFormVisible, setExperienceFormVisible] = useState(false);
  const [isSkillsFormVisible, setSkillsFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePersonalFormInputChange = (name: string, value: string) => {
    setPersonalFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormInputChange = (formType: 'education' | 'experience', name: string, value: string | Date | null) => {
    if (formType === 'education') {
      setEducationFormData(prevData => ({ ...prevData, [name]: value }));
    } else if (formType === 'experience') {
      setExperienceFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Personal Form Data:', personalFormData);
    console.log('Education Form Data:', educationFormData);
    console.log('Experience Form Data:', experienceFormData);
    console.log('Skills:', skills);
  };

  const toggleFormVisibility = (formType: 'education' | 'experience' | 'skills') => {
    if (formType === 'education') {
      setEducationFormVisible(prevVisible => !prevVisible);
    } else if (formType === 'experience') {
      setExperienceFormVisible(prevVisible => !prevVisible);
    } else if (formType === 'skills') {
      setSkillsFormVisible(prevVisible => !prevVisible);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setPersonalFormData(prevData => ({ ...prevData, birthDate: date }));
  };

  return (
    <main className="flex min-h-screen p-24">
      <div className="input-container flex-1 overflow-y-auto" style={{ height: '100vh' }}>
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
              <p className="text-xl font-semibold flex-1" style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>
                Education
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('education')}
                  className={isEducationFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isEducationFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isEducationFormVisible && (
              <EducationForm onInputChange={(name, value) => handleFormInputChange('education', name, value)} />
            )}
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1" style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>
                Experience
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('experience')}
                  className={isExperienceFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isExperienceFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isExperienceFormVisible && (
              <ExperienceForm onInputChange={(name, value) => handleFormInputChange('experience', name, value)} />
            )}
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1" style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>
                Skills
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('skills')}
                  className={isSkillsFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isSkillsFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isSkillsFormVisible && (
              <Skills onAddSkill={(skill) => setSkills(prevSkills => [...prevSkills, skill])}
              />
            )}
            <button
              type="submit"
              className="button-save" style={{ textAlign: 'center' }}
            >
              Download
            </button>
          </form>
        </div>
      </div>
      <div className="cv-preview-container flex-1 ml-8 overflow-y-auto" style={{ height: '100vh' }}>
        <Card className="bg-white rounded shadow">
          <div className="CVPreview-container">
            <CVPreview
              personalFormData={personalFormData}
              educationFormData={educationFormData}
              selectedDate={selectedDate}
              experienceFormData={experienceFormData}
              skills={skills}
            />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Page;