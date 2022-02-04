//App.tsx
import React, { useState } from 'react';

type Props = {
  // title: string,
  // subTitle: string
  [key: string]: string
};

const ResumeMiddleTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="resume-middle-title">
      <h2>{title}</h2>
      {subTitle ? <h4 style={{paddingLeft: '12px'}}>{subTitle}</h4> : <></>}
      
    </div>
  );
}

export default ResumeMiddleTitle;