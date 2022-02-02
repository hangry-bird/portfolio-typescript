//App.tsx
import React, { useState } from 'react';
import ResumeTitle from '../Container/resumeTitle';
import ResumeAboutMe from '../Container/resumeAboutMe';
import ResumeSkill from '../Container/resumeSkill';

const ResumePage = () => {

  return (
    <div className="resume-page">
        <ResumeTitle />
        <ResumeAboutMe />
        <ResumeSkill />
    </div>
  );
}

export default ResumePage;