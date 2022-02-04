import React from 'react';
import ResumeMiddleTitle from '../Templates/resumeMiddleTitle';

import Project from 'src/assets/images/experience/project_icon.png'
import Performance from 'src/assets/images/experience/Performance_icon.png'
import Confirm from 'src/assets/images/experience/confirm_icon.png'

const ResumeExperience = () => {

  return (
    <div className='resume-container experience'>
      <ResumeMiddleTitle
        title='경력'
      />

      <div className='experience-area'>
        <div className='experience-title'>
          <h2>(주)에스티엔인포텍</h2>
          <div>
            <p className='careerEriod'>2018. 11 ~ 현재</p>
            <p className='position'>Web Developer</p>
          </div>
        </div>
        <div className='experience-project'>
          <div className='experience-category'>
            <img src={Project} alt='프로젝트 이미지' />
            <label>프로젝트</label>
          </div>
          <div className='project-box'>
            <div className='project-title'>
              <h3>1. React, Node 기반 전송망 관제 웹 사이트 구현</h3>
            </div>
            <div className='description-wrap'>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>React 기반의 컴포넌트 구조와 Redux를 이용한 상태관리 도입을 통한 Front-End 설계</label></p>
                </div>
              </div>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>Node.js의 Express Framework를 이용하여 API 초기 구조 설계 및 개발</label></p>
                </div>
              </div>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>Android Native의 WebView를 이용해 모바일 페이지와 Firebase를 연동하여 App Push 기능 구현</label></p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-title'>
              <h3>2. Python을 이용한 데이터 처리 프로그램과 웹 페이지 구현</h3>
            </div>
            <div className='description-wrap'>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>네트워크 장비의 Flow Data(sFlow), Syslog 데이터에 대한 전처리 로직 개발</label></p>
                </div>
              </div>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>Windows, Linux 서버들의 Process, Service 목록 수집 후 DB 저장 및 웹 표출</label></p>
                </div>
              </div>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-title'>
              <h3>3. pixi.js를 활용한 전송 장비 유니트 실장도 시각화 구현</h3>
            </div>
            <div className='description-wrap'>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>pixi.js 라이브러리를 사용하여 전송장비에 대한 유니트 화면을 웹 사이트에서 시각화</label></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='experience-improve'>
          <div className='experience-category'>
            <img src={Performance} alt='개선 아이콘' />
            <label>개선</label>
          </div>

          <div className='improve-box'>
            <div className='improve-title'>
              <img src={Confirm} alt="체크모양 이미지" />
              <h3>라이브러리를 활용한 추가 기능 개발 및 속도 개선</h3>
            </div>
            <div className='description-wrap'>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>Ant D-Tree에서 사용자가 Node를 Load할 때에만 데이터를 조회하여 성능 개선</label></p>
                </div>
              </div>
            </div>
          </div>

          <div className='improve-box'>
            <div className='improve-title'>
              <img src={Confirm} alt="체크모양 이미지" />
              <h3>사용자가 필요로 하는 기능을 분석하여 구현 가능</h3>
            </div>
            <div className='description-wrap'>
              <div className='description-box'>
                <span>-</span>
                <div className='description'>
                  <p><label>전송장비 유니트 실장도를 웹 사이트에서 사용자가 관제 및 관리할 수 있도록 기능 개발</label></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeExperience;