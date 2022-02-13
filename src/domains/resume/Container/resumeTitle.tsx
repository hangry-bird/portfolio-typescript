//App.tsx
import React, { useState } from 'react';
import GawrGura from 'src/assets/images/title/gawr_gura_icon2.gif'

const ResumeTitle = () => {

  return (
    <div className='resume-container title'>
      <div>
        <h1>개발을 재밌어 하는</h1>
        <h1>개발자입니다.</h1>
      </div>

      <div>
        <img src={GawrGura} alt='gawr gura gif image' />
      </div>
    </div>
  );
}

export default ResumeTitle;