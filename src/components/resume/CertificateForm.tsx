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
      <input
        type="text"
        name="name"
        placeholder="Certificate Name"
        value={certificateData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="link"
        placeholder="Certificate Link"
        value={certificateData.link}
        onChange={handleInputChange}
      />
      <textarea
        name="additionalInfo"
        placeholder="Additional Information (optional)"
        value={certificateData.additionalInfo}
        onChange={handleInputChange}
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
