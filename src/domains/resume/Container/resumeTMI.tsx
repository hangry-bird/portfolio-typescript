import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';

import Bicycle from 'src/assets/images/hobby/bicycle_icon.png'
import Popcorn from 'src/assets/images/hobby/popcorn_icon.png'

const ResumeTMI = () => {

  return (
    <div className='resume-container tmi'>
      <ResumeMiddleTitle
        title='TMI'
        subTitle='취미'
      />

      <div className='hobby-area'>
        <div className='hobby-wrap'>
          <div className='hobby-box'>
            <img src={Bicycle} alt="자전거 아이콘 이미지" />
            <label>로드 싸이클</label>
          </div>
          <div className='hobby-box'>
            <img src={Popcorn} alt="팝콘 아이콘 이미지" />
            <label>영화 감상</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeTMI;