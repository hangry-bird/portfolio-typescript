//App.tsx
import React, { useState } from 'react';
import ResumeTitle from '../Container/resumeTitle';
import ResumeAboutMe from '../Container/resumeAboutMe';
import ResumeSkill from '../Container/resumeSkill';
import ResumeExperience from '../Container/resumeExperience';
import ResumeTMI from '../Container/resumeTMI';
import ResumeFooter from '../Container/resumeFooter';

const ResumePage = () => {

  return (
    <div className="resume-page">
        <ResumeTitle />
        <ResumeAboutMe />
        <ResumeSkill />
        <ResumeExperience />
        <ResumeTMI />
        <ResumeFooter />
    </div>
  );
}

export default ResumePage;