'use client';
import React, { useState } from 'react';
import './css/globals.css';
import { Card } from 'antd';
import PersonalForm from '@/components/resume/PersonalForm';
import EducationForm from '@/components/resume/EducationForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import Skills from '@/components/resume/Skills';
import Languages from '@/components/resume/Languages';
import CertificateForm from '@/components/resume/CertificateForm';
import { Certificate } from '@/components/data/types';
import Hobbies from '@/components/resume/Hobbies';
import ReferenceForm from '@/components/resume/ReferenceForm';
import CVPreview, { TemplateKey } from '@/components/cvPreview/CVPreview';
import { initialPersonalFormData, initialEducationFormData, initialExperienceFormData, initialReferenceFormData } from '@/components/data/initialFormData';
import FormSection from '@/components/resume/FormSection';

function useFormWithVisibility<T>(initialData: T, initialVisibility = false) {
  const [formData, setFormData] = useState<T>(initialData);
  const [isVisible, setIsVisible] = useState(initialVisibility);
  return [formData, setFormData, isVisible, setIsVisible] as const;
}

const Page: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [personalFormData, setPersonalFormData, ,] = useFormWithVisibility(initialPersonalFormData);
  const [educationFormData, setEducationFormData, isEducationFormVisible, setEducationFormVisible] = useFormWithVisibility(initialEducationFormData);
  const [experienceFormData, setExperienceFormData, isExperienceFormVisible, setExperienceFormVisible] = useFormWithVisibility(initialExperienceFormData);
  const [skills, setSkills, isSkillsFormVisible, setSkillsFormVisible] = useFormWithVisibility<string[]>([]);
  const [languages, setLanguages, isLanguagesFormVisible, setLanguagesFormVisible] = useFormWithVisibility<{ name: string; level: string }[]>([]);
  const [certificates, setCertificates, isCertificatesFormVisible, setCertificatesFormVisible] = useFormWithVisibility<Certificate[]>([]);
  const [hobbies, setHobbies, isHobbiesFormVisible, setHobbiesFormVisible] = useFormWithVisibility<string[]>([]);
  const [referenceFormData, setReferenceFormData, isReferenceFormVisible, setReferenceFormVisible] = useFormWithVisibility(initialReferenceFormData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>('template1');

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Personal Form Data:', personalFormData);
    console.log('Education Form Data:', educationFormData);
    console.log('Experience Form Data:', experienceFormData);
    console.log('Skills:', skills);
    console.log('Languages:', languages);
    console.log('Certificates:', certificates)
    console.log('Hobbies:', hobbies);
    console.log('Reference Form Data:', referenceFormData);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setPersonalFormData(prevData => ({ ...prevData, birthDate: date }));
  };

  const handleAddCertificate = (certificate: Certificate) => {
    setCertificates((prevCertificates) => [...prevCertificates, certificate]);
  };

  const handleRemoveCertificate = (index: number) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  const toggleFormVisibility = (formType: 'education' | 'experience' | 'skills' | 'languages' | 'certificates' | 'hobbies' | 'references') => {
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
    } else if (formType === 'references') {
      setReferenceFormVisible((prevVisible) => !prevVisible);
    }
  };

  const handleTemplateChange = (newTemplate: TemplateKey) => {
    setSelectedTemplate(newTemplate);
  };

  return (
    <main className="flex">
      <div className="flex-1 overflow-y-auto">
        <h2 className="mb-4 center">Resume</h2>
        <p className="form-header">Personal Information</p>
        <form onSubmit={handleSave}>
          <div className="template-selector">
            <label>Select Template </label>
            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateChange(e.target.value as TemplateKey)}
              aria-label="Select Template"
            >
              <option value="template1">Light</option>
              <option value="template2">Dark</option>
            </select>
          </div>
          <div className="mb-4">
            <PersonalForm
              formData={personalFormData}
              onInputChange={(name, value) => setPersonalFormData((prevData) => ({ ...prevData, [name]: value }))}
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </div>
          <FormSection
            title="Education"
            isVisible={isEducationFormVisible}
            onToggle={() => toggleFormVisibility('education')}
          >
            <EducationForm
              formData={educationFormData}
              onInputChange={(name, value) => setEducationFormData((prevData) => ({ ...prevData, [name]: value }))}
            />
          </FormSection>
          <FormSection
            title="Experience"
            isVisible={isExperienceFormVisible}
            onToggle={() => toggleFormVisibility('experience')}
          >
            <ExperienceForm
              formData={experienceFormData}
              onInputChange={(name, value) => setExperienceFormData((prevData) => ({ ...prevData, [name]: value }))}
            />
          </FormSection>
          <FormSection
            title="Skills"
            isVisible={isSkillsFormVisible}
            onToggle={() => toggleFormVisibility('skills')}
          >
            <Skills
              skills={skills}
              onAddSkill={(skill) => setSkills((prevSkills) => [...prevSkills, skill])}
              onRemoveSkill={(index) => {
                const updatedSkills = [...skills];
                updatedSkills.splice(index, 1);
                setSkills(updatedSkills);
              }}
            />
          </FormSection>
          <FormSection
            title="Languages"
            isVisible={isLanguagesFormVisible}
            onToggle={() => toggleFormVisibility('languages')}
          >
            <Languages languages={languages} onLanguagesChange={setLanguages} />
          </FormSection>
          <FormSection
            title="Certificates"
            isVisible={isCertificatesFormVisible}
            onToggle={() => toggleFormVisibility('certificates')}
          >
            <CertificateForm
              onAddCertificate={handleAddCertificate}
              onRemoveCertificate={handleRemoveCertificate}
              certificates={certificates}
            />
          </FormSection>
          <FormSection
            title="Hobbies"
            isVisible={isHobbiesFormVisible}
            onToggle={() => toggleFormVisibility('hobbies')}
          >
            <Hobbies
              hobbies={hobbies}
              onAddHobby={(hobby) => setHobbies((prevHobbies) => [...prevHobbies, hobby])}
              onRemoveHobby={(index) => {
                const updatedHobbies = [...hobbies];
                updatedHobbies.splice(index, 1);
                setHobbies(updatedHobbies);
              }}
            />
          </FormSection>
          <FormSection
            title="References"
            isVisible={isReferenceFormVisible}
            onToggle={() => toggleFormVisibility('references')}
          >
            <ReferenceForm
              formData={referenceFormData}
              onInputChange={(name, value) => setReferenceFormData((prevData) => ({ ...prevData, [name]: value }))}
            />
          </FormSection>
          <button
            type="submit"
            className="button-save center"
          >
            Download
          </button>
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
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
              referenceFormData={referenceFormData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Page;