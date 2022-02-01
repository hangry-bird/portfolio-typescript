//App.tsx
import React, { useState } from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';
// import Photo from 'src/assets/images/photo/hsh.jpg'

const ResumeAboutMe = () => {

  return (
    <div className='resume-container aboutMe'>
      <ResumeMiddleTitle
        title='소개'
      />
      <div className='aboutMe-content'>
        {/* <img src={Photo} alt="이력서 작성자 본인 사진" /> */}
      </div>
    </div>
  );
}

export default ResumeAboutMe;