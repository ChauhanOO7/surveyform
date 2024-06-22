import React, { useContext } from 'react';
import { FormContext } from '../context/Formcontext';

const Summary = () => {
  const { formSummary, additionalQuestions } = useContext(FormContext);

  return (
    <div className='information'>
      <h2>Form Summary</h2>
      <p><strong>Full Name:</strong> {formSummary.fullName}</p>
      <p><strong>Email:</strong> {formSummary.email}</p>
      <p><strong>Survey Topic:</strong> {formSummary.surveyTopic}</p>

      {formSummary.surveyTopic === 'Technology' && (
        <>
          <p><strong>Favorite Programming Language:</strong> {formSummary.technology.favoriteLanguage}</p>
          <p><strong>Years of Experience:</strong> {formSummary.technology.yearsOfExperience}</p>
        </>
      )}

      {formSummary.surveyTopic === 'Health' && (
        <>
          <p><strong>Exercise Frequency:</strong> {formSummary.health.exerciseFrequency}</p>
          <p><strong>Diet Preference:</strong> {formSummary.health.dietPreference}</p>
        </>
      )}

      {formSummary.surveyTopic === 'Education' && (
        <>
          <p><strong>Highest Qualification:</strong> {formSummary.education.highestQualification}</p>
          <p><strong>Field of Study:</strong> {formSummary.education.fieldOfStudy}</p>
        </>
      )}

      <p><strong>Feedback:</strong> {formSummary.feedback}</p>

      <h2>Additional Questions</h2>
      {additionalQuestions.length > 0 ? (
        additionalQuestions.map((question, index) => (
          <div key={index}>
            <p><strong>Question {index + 1}:</strong> {question.Questions}</p>
          </div>
        ))
      ) : (
        <p>No additional questions available.</p>
      )}
    </div>
  );
};

export default Summary;
