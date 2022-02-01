//App.tsx
import React, { useState } from 'react';

type Props = {
  title: string
};

const ResumeMiddleTitle = ({ title }: Props) => {
  return (
    <div className="resume-middle-title">
      <h2>{title}</h2>
    </div>
  );
}

export default ResumeMiddleTitle;