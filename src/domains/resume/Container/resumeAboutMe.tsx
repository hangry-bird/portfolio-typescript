import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';
import Photo from 'src/assets/images/photo/hsh.jpg'

import PhoneIcon from 'src/assets/images/icon/phone_icon.png'
import EmailIcon from 'src/assets/images/icon/email_icon.png'
import GithubIcon from 'src/assets/images/icon/github_icon.png'

const ResumeAboutMe = () => {

  return (
    <div className='resume-container aboutMe'>
      <ResumeMiddleTitle
        title='소개'
      />
      <div className='aboutMe-content'>
        <div className='aboutMe-privacy'>
          <img src={Photo} alt="이력서 작성자 본인 사진" />
          <div className='aboutMe-contact'>
            <div><img src={PhoneIcon} alt="Phone Number" /><label>010-9464-8841</label></div>
            <div><img src={EmailIcon} alt="Email Address" /><label>starcjs7@gmail.com</label></div>
            <div><img src={GithubIcon} alt="Github Link" /><label>github.com/hangry-bird</label></div>
          </div>
        </div>

        <div className='about-introduction'>
          <p><label><b>React/Node</b>, .NET/jQuery 환경에서 개발 중인 <b>4년 차 웹 개발자</b>입니다.</label></p>
          <br />
          <p><label>현재 자사 <b>전송망 관제 웹 솔루션</b>에 대한 <b>설계, 개발</b>, 구축, 유지보수 등을 하고 있으며</label></p>
          <br />
          <p><label>프로젝트를 진행하면서 <b>팀원들과 소통을 중요시</b> 하고</label></p>
          <p><label>UI/UX를 중심으로 사용자들을 위한 솔루션 기능들을 개발하며</label></p>
          <p><label>디자인 패턴과 디렉터리, Route, API 구조 등을 설계하는 등</label></p>
          <br />
          <p><label>스스로에 대해 <b>영역 간의 구분과 한계를 두지 않고 개발</b>하고 있습니다.</label></p>
        </div>
      </div>
    </div>
  );
}

export default ResumeAboutMe;