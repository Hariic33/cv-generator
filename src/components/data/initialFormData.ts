import { PersonalFormData, EducationFormData, ExperienceFormData, ReferenceFormData } from './types';

export const initialPersonalFormData: PersonalFormData = {
  fullName: '',
  jobTitle: '',
  emailAddress: '',
  phoneNumber: '',
  address: '',
  birthDate: null,
  nationality: '',
  gender: '',
  linkedIn: '',
};

export const initialEducationFormData: EducationFormData = {
  degree: '',
  schoolName: '',
  startDate: null,
  endDate: null,
  city: '',
  country: '',
};

export const initialExperienceFormData: ExperienceFormData = {
  jobTitle: '',
  employer: '',
  city: '',
  country: '',
  startDate: null,
  endDate: null,
  description: '',
};

export const initialReferenceFormData: ReferenceFormData = {
  fullName: '',
  jobTitle: '',
  organization: '',
  emailAddress: '',
  phoneNumber: '',
};
