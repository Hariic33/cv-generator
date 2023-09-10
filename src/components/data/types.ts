export interface PersonalFormData {
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

export interface EducationFormData {
    degree: string;
    schoolName: string;
    startDate: Date | null;
    endDate: Date | null;
    city: string;
    country: string;
}

export interface ExperienceFormData {
    jobTitle: string;
    employer: string;
    city: string;
    country: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
}

export interface Certificate {
    name: string;
    link: string;
    additionalInfo: string;
  }
  