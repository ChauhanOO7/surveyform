import React, { useContext } from 'react';
import { FormContext } from '../context/Formcontext';

const HealthSection = () => {
  const { formData, handleChange, errors } = useContext(FormContext);

  return (
    <div>
      <div>
        <label>Exercise Frequency:</label>
        <select value={formData.health.exerciseFrequency} onChange={(e) => handleChange('health', 'exerciseFrequency', e.target.value)}>
          <option value="">Select frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Rarely">Rarely</option>
        </select>
        {errors.exerciseFrequency && <p>{errors.exerciseFrequency}</p>}
      </div>

      <div>
        <label>Diet Preference:</label>
        <select value={formData.health.dietPreference} onChange={(e) => handleChange('health', 'dietPreference', e.target.value)}>
          <option value="">Select preference</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        {errors.dietPreference && <p>{errors.dietPreference}</p>}
      </div>
    </div>
  );
};

export default HealthSection;
