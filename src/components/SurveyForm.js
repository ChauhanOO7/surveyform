import React, { useContext,useState } from 'react';
import { FormContext } from '../context/Formcontext';
import TechnologySection from './TechnologySection';
import HealthSection from './HealthSection';
import EducationSection from './EducationSection';
import Summary from './Summary';
import axios from 'axios';
import '../App.css';

const SurveyForm = () => {
  const { formData, errors, setErrors, handleChange,setAdditionalQuestions, setFormSummary } = useContext(FormContext);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validate = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';

    if (formData.surveyTopic === 'Technology') {
      if (!formData.technology.favoriteLanguage) newErrors.favoriteLanguage = 'Favorite Programming Language is required';
      if (!formData.technology.yearsOfExperience) newErrors.yearsOfExperience = 'Years of Experience is required';
    } else if (formData.surveyTopic === 'Health') {
      if (!formData.health.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.health.dietPreference) newErrors.dietPreference = 'Diet Preference is required';
    } else if (formData.surveyTopic === 'Education') {
      if (!formData.education.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
      if (!formData.education.fieldOfStudy) newErrors.fieldOfStudy = 'Field of Study is required';
    }

    if (!formData.feedback || formData.feedback.length < 50) newErrors.feedback = 'Feedback must be at least 50 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      
        if(formData.surveyTopic === 'Technology')
        {
            const response = await axios.get('https://retoolapi.dev/pakRz6/data');
            setAdditionalQuestions(response.data);
            setFormSummary(formData);
            setIsSubmitted(true);
        }

        if(formData.surveyTopic === 'Health')
        {
            const response = await axios.get('https://retoolapi.dev/H1VhfG/data');
            setAdditionalQuestions(response.data);
            setFormSummary(formData);
            setIsSubmitted(true);
        }
    
        if(formData.surveyTopic === 'Education')
        {
            const response = await axios.get('https://retoolapi.dev/Cj3rIH/data');
            setAdditionalQuestions(response.data);
            setFormSummary(formData);
            setIsSubmitted(true);
        }
    } catch (error) {
      console.error('Error fetching additional questions:', error);
    }
  };

  if (isSubmitted) {
    return <Summary />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Survey Form</h1>
        <label>Full Name:</label>
        <input type="text" value={formData.fullName} onChange={(e) => handleChange('formData', 'fullName', e.target.value)} />
        {errors.fullName && <p className='error'>{errors.fullName}</p>}
      </div>

      <div className='email'>
        <label>Email:</label>
        <input type="email" value={formData.email} onChange={(e) => handleChange('formData', 'email', e.target.value)} />
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>

      <div>
        <label>Survey Topic:</label>
        <select value={formData.surveyTopic} onChange={(e) => handleChange('formData', 'surveyTopic', e.target.value)}>
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className='error'>{errors.surveyTopic}</p>}
      </div>

      {formData.surveyTopic === 'Technology' && <TechnologySection />}
      {formData.surveyTopic === 'Health' && <HealthSection />}
      {formData.surveyTopic === 'Education' && <EducationSection />}

      <div className='feedback'>
        <label>Feedback:</label>
        <textarea value={formData.feedback} onChange={(e) => handleChange('formData', 'feedback', e.target.value)} />
        {errors.feedback && <p className='error'>{errors.feedback}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
