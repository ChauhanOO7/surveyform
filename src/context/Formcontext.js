import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    technology: {
      favoriteLanguage: '',
      yearsOfExperience: '',
    },
    health: {
      exerciseFrequency: '',
      dietPreference: '',
    },
    education: {
      highestQualification: '',
      fieldOfStudy: '',
    },
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [formSummary, setFormSummary] = useState(null);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const handleChange = (section, field, value) => {
    if (section === 'formData') {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  return (
    <FormContext.Provider value={{ formData, errors, setErrors, handleChange,additionalQuestions, setAdditionalQuestions,formSummary, setFormSummary }}>
      {children}
    </FormContext.Provider>
  );
};
