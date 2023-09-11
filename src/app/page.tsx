'use client';
import React, { useState } from 'react';
import { Card } from 'antd';
import PersonalForm from '@/components/resume/PersonalForm';
import EducationForm from '@/components/resume/EducationForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import Skills from '@/components/resume/Skills';
import Languages from '@/components/resume/Languages';
import CertificateForm from '@/components/resume/CertificateForm';
import { Certificate } from '@/components/data/types';
import Hobbies from '@/components/resume/Hobbies';
import CVPreview from '@/components/cvPreview/CVPreview';
import './globals.css';
import { initialPersonalFormData, initialEducationFormData, initialExperienceFormData } from '@/components/data/initialFormData';

const Page: React.FC = () => {
  const [personalFormData, setPersonalFormData] = useState(initialPersonalFormData);
  const [educationFormData, setEducationFormData] = useState(initialEducationFormData);
  const [experienceFormData, setExperienceFormData] = useState(initialExperienceFormData);
  const [isEducationFormVisible, setEducationFormVisible] = useState(false);
  const [isExperienceFormVisible, setExperienceFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [isSkillsFormVisible, setSkillsFormVisible] = useState(false);
  const [languages, setLanguages] = useState<{ name: string; level: string }[]>([]);
  const [isLanguagesFormVisible, setLanguagesFormVisible] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isCertificatesFormVisible, setCertificatesFormVisible] = useState(false);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [isHobbiesFormVisible, setHobbiesFormVisible] = useState(false);

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
    console.log('Languages:', languages);
    console.log('Certificates:', certificates)
    console.log('Hobbies:', hobbies);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setPersonalFormData(prevData => ({ ...prevData, birthDate: date }));
  };

  const handleAddLanguage = (name: string, level: string) => {
    const newLanguage = { name, level };
    setLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
  };

  const handleRemoveLanguage = (index: number) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleAddCertificate = (certificate: Certificate) => {
    setCertificates((prevCertificates) => [...prevCertificates, certificate]);
  };

  const handleRemoveCertificate = (index: number) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  const toggleFormVisibility = (formType: 'education' | 'experience' | 'skills' | 'languages' | 'certificates' | 'hobbies') => {
    if (formType === 'education') {
      setEducationFormVisible((prevVisible) => !prevVisible);
    } else if (formType === 'experience') {
      setExperienceFormVisible((prevVisible) => !prevVisible);
    } else if (formType === 'skills') {
      setSkillsFormVisible((prevVisible) => !prevVisible);
    } else if (formType === 'languages') {
      setLanguagesFormVisible((prevVisible) => !prevVisible);
    } else if (formType === 'certificates') {
      setCertificatesFormVisible((prevVisible) => !prevVisible);
    } else if (formType === 'hobbies') {
      setHobbiesFormVisible((prevVisible) => !prevVisible);
    }
  };

  return (
    <main className="flex min-h-screen p-24">
      <div className="input-container flex-1 overflow-y-auto">
        <div className="max-w-md">
          <h2 className="mb-4 text-2xl font-semibold center">Resume</h2>
          <p className="text-xl font-semibold flex-1 form-header">Personal Information</p>
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
              <p className="text-xl font-semibold flex-1 form-header">
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
              <p className="text-xl font-semibold flex-1 form-header">
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
              <p className="text-xl font-semibold flex-1 form-header">
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
              <Skills
                skills={skills}
                onAddSkill={(skill) => setSkills((prevSkills) => [...prevSkills, skill])}
                onRemoveSkill={(index) => {
                  const updatedSkills = [...skills];
                  updatedSkills.splice(index, 1);
                  setSkills(updatedSkills);
                }}
              />
            )}
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1 form-header">
                Languages
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('languages')}
                  className={isLanguagesFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isLanguagesFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isLanguagesFormVisible && (
              <Languages
                languages={languages}
                onAddLanguage={handleAddLanguage}
                onRemoveLanguage={handleRemoveLanguage}
              />
            )}
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1 form-header">
                Certificates
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('certificates')}
                  className={isCertificatesFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isCertificatesFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isCertificatesFormVisible && (
              <CertificateForm
                onAddCertificate={handleAddCertificate}
                onRemoveCertificate={handleRemoveCertificate}
                certificates={certificates}
              />)}
            <div className="flex mb-4">
              <p className="text-xl font-semibold flex-1 form-header">
                Hobbies
                <button
                  type="button"
                  onClick={() => toggleFormVisibility('hobbies')}
                  className={isHobbiesFormVisible ? 'button-toggle-active' : 'button-toggle'}
                >
                  {isHobbiesFormVisible ? '-' : '+'}
                </button>
              </p>
            </div>
            {isHobbiesFormVisible && (
              <Hobbies
                hobbies={hobbies}
                onAddHobby={(hobby) => setHobbies((prevHobbies) => [...prevHobbies, hobby])}
                onRemoveHobby={(index) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies.splice(index, 1);
                  setHobbies(updatedHobbies);
                }}
              />
            )}
            <button
              type="submit"
              className="button-save center"
            >
              Download
            </button>
          </form>
        </div>
      </div>
      <div className="cv-preview-container flex-1 ml-8 overflow-y-auto">
        <Card className="bg-white rounded shadow">
          <div className="CVPreview-container">
            <CVPreview
              personalFormData={personalFormData}
              educationFormData={educationFormData}
              selectedDate={selectedDate}
              experienceFormData={experienceFormData}
              skills={skills}
              languages={languages}
              certificates={certificates}
              hobbies={hobbies}
            />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Page;