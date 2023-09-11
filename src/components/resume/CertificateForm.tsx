import React, { useState } from 'react';
import { Certificate } from '../data/types';

interface CertificateFormProps {
  onAddCertificate: (certificate: Certificate) => void;
  onRemoveCertificate: (index: number) => void;
  certificates: Certificate[];
}

const CertificateForm: React.FC<CertificateFormProps> = ({
  onAddCertificate,
  onRemoveCertificate,
  certificates,
}) => {
  const [certificateData, setCertificateData] = useState<Certificate>({
    name: '',
    link: '',
    additionalInfo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCertificateData({ ...certificateData, [name]: value });
  };

  const handleAddCertificate = () => {
    onAddCertificate(certificateData);
    setCertificateData({ name: '', link: '', additionalInfo: '' });
  };

  return (
    <div>
      {['name', 'link'].map((fieldName) => (
        <input
          type="text"
          name={fieldName}
          placeholder={`Certificate ${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`}
          value={certificateData[fieldName as keyof Certificate]}
          onChange={handleInputChange}
          key={fieldName}
        />
      ))}
      <textarea
        name="additionalInfo"
        value={certificateData.additionalInfo}
        onChange={handleInputChange}
        placeholder="Additional information"
        className="textarea"
      />
      <button onClick={handleAddCertificate}>Add Certificate</button>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>
            {certificate.name} -{' '}
            <button onClick={() => onRemoveCertificate(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateForm;
