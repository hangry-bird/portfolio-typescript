import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';

import HTML5 from 'src/assets/images/skill/html5.png'
import CSS3 from 'src/assets/images/skill/css3.png'
import JavaScript from 'src/assets/images/skill/javascript.png'
import JQuery from 'src/assets/images/skill/jquery.png'

import ReactIcon from 'src/assets/images/skill/react.png'
import Redux from 'src/assets/images/skill/redux.png'

import NodeJS from 'src/assets/images/skill/nodejs.png'
import Python from 'src/assets/images/skill/python.png'
import DotNet from 'src/assets/images/skill/dotnet.png'

const ResumeSkill = () => {

  return (
    <div className='resume-container skill'>
      <ResumeMiddleTitle
        title='스킬'
      />

      <div className='skill-box-area'>
        <div className='skill-box-wrap'>
          <div className='skill-box'>
            <img src={HTML5} alt='html5' />
            <label>HTML5</label>
          </div>
          <div className='skill-box'>
            <img src={CSS3} alt='css3' style={{ width: '36px', height: '40px'}} />
            <label>CSS3</label>
          </div>
          <div className='skill-box'>
            <img src={JavaScript} alt='javascript' />
            <label>Javascript</label>
          </div>
          <div className='skill-box'>
            <img src={JQuery} alt='jQuery' />
            <label>jQuery</label>
          </div>
        </div>

        <div className='skill-box-wrap'>
          <div className='skill-box'>
            <img src={ReactIcon} alt='react' />
            <label>React</label>
          </div>
          <div className='skill-box'>
            <img src={Redux} alt='redux' />
            <label>Redux</label>
          </div>
          <div className='skill-box'></div>
          <div className='skill-box'></div>
        </div>

        <div className='skill-box-wrap'>
          <div className='skill-box'>
            <img src={NodeJS} alt='node js' />
            <label>Node.js</label>
          </div>
          <div className='skill-box'>
            <img src={Python} alt='python' />
            <label>Python</label>
          </div>
          <div className='skill-box'>
            <img src={DotNet} alt='.Net' />
            <label>.Net</label>
          </div>
          <div className='skill-box'></div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ResumeSkill;