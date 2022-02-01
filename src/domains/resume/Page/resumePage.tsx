//App.tsx
import React, { useState } from 'react';
import ResumeTitle from '../Container/resumeTitle';
import ResumeAboutMe from '../Container/resumeAboutMe';

// const Title = styled.h1`
//     font-size: 50px;
//     padding: 6px 0;
// `;

const ResumePage = () => {

  return (
    <div className="resume-page">
        <ResumeTitle />
        <ResumeAboutMe />
    </div>
  );
}

export default ResumePage;