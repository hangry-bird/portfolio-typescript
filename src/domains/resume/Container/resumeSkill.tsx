import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';

import PhoneIcon from 'src/assets/images/icon/phone_icon.png'
import EmailIcon from 'src/assets/images/icon/email_icon.png'
import GithubIcon from 'src/assets/images/icon/github_icon.png'

const ResumeSkill = () => {

  return (
    <div className='resume-container skill'>
      <ResumeMiddleTitle
        title='스킬'
      />
      <div className='skill-box-area'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ResumeSkill;