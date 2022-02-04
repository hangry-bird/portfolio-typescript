import React from 'react';

import Arrow from 'src/assets/images/footer/right_arrow_icon.png'

const ResumeFooter = () => {

  return (
    <div className='resume-container footer'>

      <div className='footer-area'>
        <label>포트폴리오 보러가기</label>
        <img src={Arrow} alt='오른쪽 화살표 아이콘 이미지' />
      </div>
    </div>
  );
}

export default ResumeFooter;