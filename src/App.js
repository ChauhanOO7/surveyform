import React from 'react';
import { FormProvider } from './context/Formcontext';
import SurveyForm from './components/SurveyForm';
import './App.css';

const App = () => {
  return (
    <FormProvider>
        <SurveyForm />
    </FormProvider>
  );
};

export default App;