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

interface CVPreviewProps {
  personalFormData: PersonalFormData;
  educationFormData: EducationFormData;
  selectedDate: Date | null;
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

const CVPreview: React.FC<CVPreviewProps> = ({ personalFormData, educationFormData }) => {
  const renderField = (icon: React.ReactNode, value: string) => {
    return value.trim() !== '' ? (
      <div className="CVPreview-field">
        <p>
          <strong>{icon} </strong> {value}
        </p>
      </div>
    ) : null;
  };

  return (
    <Card className="bg-white rounded shadow">
      <h2 style={{ fontSize: '32px', marginTop: '20px', textAlign: 'center' }}>{personalFormData.fullName}</h2>
      <div className="cv-preview-container">
        <h2 style={{ fontSize: '24px', textAlign: 'center' }}>{personalFormData.jobTitle}</h2>
        <div className="CVPreview-container">
          <div className="CVPreview-row" style={{ marginTop: '5px' }}>
            {renderField(<MailOutlined />, personalFormData.emailAddress)}
            {renderField(<PhoneOutlined />, personalFormData.phoneNumber)}
            {renderField(<HomeOutlined />, personalFormData.address)}
            {renderField(<CalendarOutlined />, personalFormData.birthDate ? formatDate(personalFormData.birthDate, true) : '')}
            {renderField(<FlagOutlined />, personalFormData.nationality)}
            {renderField(<UserOutlined />, personalFormData.gender)}
            {renderField(<LinkedinOutlined />, personalFormData.linkedIn)}
          </div>
          {educationFormData.degree.trim() !== '' && (
            <h2 style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>Education</h2>
          )}
          <div className="education-form-container">
            {educationFormData.degree.trim() !== '' && (<p><strong>{educationFormData.degree},</strong></p>)}
            {educationFormData.schoolName.trim() !== '' && (<p><strong>{educationFormData.schoolName}</strong></p>)}          
            {educationFormData.startDate && educationFormData.endDate && (
              <p>
                {`${formatDate(educationFormData.startDate)} - ${formatDate(educationFormData.endDate)}`}
                {' | ' + educationFormData.city + ', ' + educationFormData.country}
              </p>)}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CVPreview;