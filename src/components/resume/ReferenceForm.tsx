import React from 'react';
import { ReferenceFormData } from '../data/types';

interface ReferenceFormProps {
    onInputChange: (name: string, value: string | null) => void;
    formData: ReferenceFormData;
}

const renderInputField = (
    name: keyof ReferenceFormData,
    label: string,
    placeholder: string,
    recommendationType: string | undefined,
    inputType: string = 'text',
    additionalProps: any = {}
) => {
    const { onInputChange } = additionalProps;

    return (
        <div key={name}>
            <label htmlFor={name}>
                {label} {recommendationType && <span className="recommendation-label">({recommendationType})</span>}
            </label>
            <input
                type={inputType}
                name={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(name, e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

const ReferenceForm: React.FC<ReferenceFormProps> = (props) => (
    <div>
        {renderInputField('fullName', 'Full Name', 'Enter the full name', 'required', 'text', props)}
        {renderInputField('jobTitle', 'Job Title', 'Enter the job title', 'optional', 'text', props)}
        {renderInputField('organization', 'Organization', 'Enter the organization', 'optional', 'text', props)}
        {renderInputField('emailAddress', 'Email Address', 'Enter the email address', 'optional', 'email', props)}
        {renderInputField('phoneNumber', 'Phone Number', 'Enter the phone number', 'optional', 'tel', props)}
    </div>
);

export default ReferenceForm;