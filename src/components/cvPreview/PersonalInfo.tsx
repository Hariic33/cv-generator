import React from 'react';
import { CalendarOutlined, FlagOutlined, HomeOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { PersonalFormData } from '../types';

interface PersonalInfoProps {
  personalFormData: PersonalFormData;
  formatDate: (inputDate: Date | null, isBirthDate: boolean) => string;
}

interface Icons {
  [key: string]: React.ReactNode;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalFormData, formatDate }) => {
  const getIcon = (field: keyof Icons) => {
    const icons: Icons = {
      emailAddress: <MailOutlined />,
      phoneNumber: <PhoneOutlined />,
      address: <HomeOutlined />,
      birthDate: <CalendarOutlined />,
      nationality: <FlagOutlined />,
      gender: <UserOutlined />,
      linkedIn: <LinkedinOutlined />,
    };

    return icons[field] || null;
  };

  return (
    <div className="CVPreview-container">
      <div className="CVPreview-row" style={{ marginTop: '5px', marginBottom: '30px', justifyContent: 'center' }}>
        {Object.entries(personalFormData).map(([field, value]) => field !== 'fullName' && field !== 'jobTitle' && field !== 'birthDate' && value ? (
          <div className="CVPreview-field" style={{ justifyContent: 'center' }} key={field}>
            <span style={{ marginRight: '5px' }}>{getIcon(field)}</span>
            <span>{value}</span>
          </div>
        ) : field === 'birthDate' && value ? (
          <div className="CVPreview-field" style={{ justifyContent: 'center' }} key={field}>
            <span style={{ marginRight: '5px' }}>
              <CalendarOutlined />
            </span>
            <span>{formatDate(value, true)}</span>
          </div>
        ) : null
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
