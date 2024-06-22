import React, { useContext } from 'react';
import { FormContext } from '../context/Formcontext';

const EducationSection = () => {
  const { formData, handleChange, errors } = useContext(FormContext);

  return (
    <div>
      <div>
        <label>Highest Qualification:</label>
        <select value={formData.education.highestQualification} onChange={(e) => handleChange('education', 'highestQualification', e.target.value)}>
          <option value="">Select qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.highestQualification && <p>{errors.highestQualification}</p>}
      </div>

      <div>
        <label>Field of Study:</label>
        <input type="text" value={formData.education.fieldOfStudy} onChange={(e) => handleChange('education', 'fieldOfStudy', e.target.value)} />
        {errors.fieldOfStudy && <p>{errors.fieldOfStudy}</p>}
      </div>
    </div>
  );
};

export default EducationSection;
