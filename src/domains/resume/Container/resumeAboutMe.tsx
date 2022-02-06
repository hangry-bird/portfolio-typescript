import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';
import Photo from 'src/assets/images/photo/hsh.jpg'

import PhoneIcon from 'src/assets/images/contact/phone_icon.png'
import EmailIcon from 'src/assets/images/contact/email_icon.png'
import GithubIcon from 'src/assets/images/contact/github_icon.png'

import CopyIcon from 'src/assets/images/contact/copy_icon.png'

import { toast } from 'react-toastify';

const ResumeAboutMe = () => {

  const onClickCopy = (event: React.MouseEvent<HTMLDivElement>, copyText: string) => {
    event.preventDefault();
    // const target = event.target as HTMLDivElement;
    // const text = target.innerText;
    // const text = copyText;

    if (!document.queryCommandSupported("copy")) { return alert('복사하기가 지원되지 않는 브라우저입니다.'); }
    const textarea = document.createElement('textarea');
    textarea.value = copyText ? copyText : '';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.position = 'fixed';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    toast.success('클립보드에 복사되었습니다.');
  }

  return (
    <div className='resume-container aboutMe'>
      <ResumeMiddleTitle
        title='소개'
      />
      <div className='aboutMe-content'>
        <div className='aboutMe-privacy'>
          <img src={Photo} alt='이력서 작성자 본인 사진' />
          <div className='aboutMe-contact'>
            <div><img src={PhoneIcon} alt='Phone Number' /><span>010-9464-8841</span><img src={CopyIcon} className='copy' alt='Phone Number Copy' onClick={(e) => onClickCopy(e, '010-9464-8841')} /></div>
            <div><img src={EmailIcon} alt='Email Address' /><a href='mailto:"starcjs7@gmail.com"'>starcjs7@gmail.com</a><img src={CopyIcon} className='copy' alt='email address Copy' onClick={(e) => onClickCopy(e, 'starcjs7@gmail.com')} /></div>
            <div><img src={GithubIcon} alt='Github Link' /><a href='https://github.com/hangry-bird' target='_blank'>github.com/hangry-bird</a><img src={CopyIcon} className='copy' alt='github link Copy' onClick={(e) => onClickCopy(e, 'github.com/hangry-bird')} /></div>
          </div>
        </div>

        <div className='about-introduction'>
          <p><span><b>React/Node</b>, .NET/jQuery 환경에서 개발 중인 <b>4년 차 웹 개발자</b>입니다.</span></p>
          <br />
          <p><span>현재 자사 <b>전송망 관제 웹 솔루션</b>에 대한 <b>설계, 개발</b>, 구축, 유지보수 등을 하고 있으며</span></p>
          <br />
          <p><span>프로젝트를 진행하면서 <b>팀원들과 소통을 중요시</b> 하고</span></p>
          <p><span>UI/UX를 중심으로 사용자들을 위한 솔루션 기능들을 개발하며</span></p>
          <p><span>디자인 패턴과 디렉터리, Route, API 구조 등을 설계하는 등</span></p>
          <br />
          <p><span>스스로에 대해 <b>영역 간의 구분과 한계를 두지 않고 개발</b>하고 있습니다.</span></p>
        </div>
      </div>
    </div>
  );
}

export default ResumeAboutMe;