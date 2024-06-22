import React, { useContext } from 'react';
import { FormContext } from '../context/Formcontext';

const TechnologySection = () => {
  const { formData, handleChange, errors } = useContext(FormContext);

  return (
    <div>
      <div>
        <label>Favorite Programming Language:</label>
        <select value={formData.technology.favoriteLanguage} onChange={(e) => handleChange('technology', 'favoriteLanguage', e.target.value)}>
          <option value="">Select a language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>
        {errors.favoriteLanguage && <p>{errors.favoriteLanguage}</p>}
      </div>

      <div>
        <label>Years of Experience:</label>
        <input type="number" value={formData.technology.yearsOfExperience} onChange={(e) => handleChange('technology', 'yearsOfExperience', e.target.value)} />
        {errors.yearsOfExperience && <p>{errors.yearsOfExperience}</p>}
      </div>
    </div>
  );
};

export default TechnologySection;
