import { CalendarOutlined, FlagOutlined, HomeOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

interface PersonalFormData {
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

interface EducationFormData {
  degree: string;
  schoolName: string;
  startDate: Date | null;
  endDate: Date | null;
  city: string;
  country: string;
}

interface ExperienceFormData {
  jobTitle: string;
  employer: string;
  city: string;
  country: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
}

interface CVPreviewProps {
  personalFormData: PersonalFormData;
  educationFormData: EducationFormData;
  selectedDate: Date | null;
  experienceFormData: ExperienceFormData;
  skills: string[];
}

const formatDate = (inputDate: Date | null, isBirthDate: boolean = false) => {
  if (!inputDate) return '';

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');

  if (isBirthDate) {
    const day = String(inputDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  return `${month}-${year}`;
};

const CVPreview: React.FC<CVPreviewProps> = ({ personalFormData, educationFormData, experienceFormData, skills }) => {
  return (
    <Card>
      <h2 style={{ fontSize: '32px', marginTop: '20px', textAlign: 'center' }}>{personalFormData.fullName}</h2>
      <h2 style={{ fontSize: '24px', textAlign: 'center' }}>{personalFormData.jobTitle}</h2>
      <div className="CVPreview-container">
        <div className="CVPreview-field">
          <div className="CVPreview-row" style={{ marginTop: '5px' }}>
            {personalFormData.emailAddress && <MailOutlined />}{personalFormData.emailAddress}
            {personalFormData.phoneNumber && <PhoneOutlined />}{personalFormData.phoneNumber}
            {personalFormData.address && <HomeOutlined />}{personalFormData.address}
            {personalFormData.birthDate && <CalendarOutlined />}{formatDate(personalFormData.birthDate, true)}
            {personalFormData.nationality && <FlagOutlined />}{personalFormData.nationality}
            {personalFormData.gender && <UserOutlined />}{personalFormData.gender}
            {personalFormData.linkedIn && <LinkedinOutlined />}{personalFormData.linkedIn}
          </div>
        </div>
      </div>
      <div className="CVPreview-sections">
        {educationFormData.degree || educationFormData.schoolName || (educationFormData.startDate && educationFormData.endDate) ? (
          <div className="CVPreview-section">
            <div className="CVPreview-container">
              <h2 style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Education</h2>
              <div className="CVPreview-row" style={{ marginTop: '5px' }}>
                {educationFormData.degree && <span style={{ fontWeight: 'bold' }}>{educationFormData.degree},</span>}
                {educationFormData.schoolName && <span style={{ fontWeight: 'bold' }}>{educationFormData.schoolName}</span>}
                {educationFormData.startDate && educationFormData.endDate && (
                  <span>
                    {formatDate(educationFormData.startDate)} - {formatDate(educationFormData.endDate)} | {educationFormData.city}, {educationFormData.country}
                  </span>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {experienceFormData.jobTitle || experienceFormData.employer || (experienceFormData.startDate && experienceFormData.endDate) || experienceFormData.description ? (
          <div className="CVPreview-section">
            <div className="CVPreview-container">
              <h2 style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Experience</h2>
              <div className="CVPreview-row" style={{ marginTop: '5px' }}>
                {experienceFormData.jobTitle && <span style={{ fontWeight: 'bold' }}>{experienceFormData.jobTitle},</span>}
                {experienceFormData.employer && <span style={{ fontWeight: 'bold' }}>{experienceFormData.employer},</span>}
                {experienceFormData.startDate && experienceFormData.endDate && (
                  <span>
                    {formatDate(experienceFormData.startDate)} - {formatDate(experienceFormData.endDate)} | {experienceFormData.city}, {experienceFormData.country}
                  </span>
                )}
                {experienceFormData.description && <span>{experienceFormData.description}</span>}
              </div>
            </div>
          </div>
        ) : null}
        {skills.length > 0 ? (
          <div className="CVPreview-section">
            <div className="CVPreview-container">
              <h2 style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Skills</h2>
              <div className="CVPreview-row" style={{ marginTop: '5px' }}>
                <div className="CVPreview-field">
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default CVPreview;