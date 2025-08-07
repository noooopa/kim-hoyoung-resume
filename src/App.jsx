import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import PersonalStatement from './PersonalStatement'
import ActionButtons from './components/ActionButtons'
import './App.css'
// React Icons import
import { FaReact, FaVuejs, FaJs, FaDatabase, FaCode, FaJava } from 'react-icons/fa'
import { SiTypescript, SiMysql } from 'react-icons/si'
import { VscCode, VscTerminalBash } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'

function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const resumeRef = useRef(null)

  useEffect(() => {
    // 로컬 스토리지에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    if (newTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }

  return (
    <div className="page-container">
      {/* 상단 버튼 영역 */}
      <div className="top-buttons-container">
        <ActionButtons pageType="resume" contentRef={resumeRef} />
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <main className="resume-wrapper" ref={resumeRef}>

      {/* 프로필 이미지와 한줄 자기소개 */}
      <section className="profile-section">
        <div className="profile-container">
          <div className="profile-image">
            <img src="profile.jpg" alt="프로필 이미지" />
          </div>
          <div className="profile-info">
            <div className="intro-container">
              <Link to="/statement" className="intro-link">
                <p><strong>"경험을 중시하는 개발자"</strong> 저의 여정은 아직 진행형입니다.</p>
              </Link>
              <p className="intro-hint">클릭시 자기소개서로 이동합니다</p>
            </div>
            <div className="contact-info">
              <p><strong>Name:</strong> 김효영 (Kim Hyo Young)</p>
              <p><strong>Phone:</strong> 010-9553-6280</p>
              <p><strong>Email:</strong> gydud1477@naver.com</p>
              <p><strong>Address:</strong> 서울 관악구 문성로</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/noooopa" target="_blank" rel="noopener noreferrer">github.com/noooopa</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="section">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon">
              <FaReact />
            </div>
            <div className="skill-info">
              <h5>React</h5>
              <div className="skill-level">⭐⭐⭐☆☆</div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <FaVuejs />
            </div>
            <div className="skill-info">
              <h5>Vue.js</h5>
              <div className="skill-level">⭐☆☆☆☆</div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <SiTypescript />
            </div>
            <div className="skill-info">
              <h5>TypeScript</h5>
              <div className="skill-level">⭐⭐☆☆☆</div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <SiMysql />
            </div>
            <div className="skill-info">
              <h5>MySQL</h5>
              <div className="skill-level">⭐⭐☆☆☆</div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <VscCode />
            </div>
            <div className="skill-info">
              <h5>VS Code</h5>
              <div className="skill-level">⭐⭐⭐☆☆</div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <BiCodeAlt />
            </div>
            <div className="skill-info">
              <h5>IntelliJ IDEA</h5>
              <div className="skill-level">⭐⭐⭐☆☆</div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 경험 */}
      <section className="section">
        <h2 className="section-title">프로젝트 경험</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h4>HobbyMe 취미 공유 웹 사이트</h4>
            <p><strong>설명:</strong> html과 css를 활용한 반응형 커뮤니티 웹사이트 개발</p>
            <p><strong>기능:</strong> 회원가입, 로그인, 게시글 작성, 댓글 작성, 좋아요 기능</p>
            <p><strong>기술:</strong> html, css, javascript, Bootstrap</p>
            <p><strong>역할:</strong> 프론트엔드, 공지사항, 쿠폰기능</p>
            <p><strong>성과:</strong> 반응형 구현, 관리자 쿠폰, 공지사항 기능 구현</p>
          </div>

          <div className="project-card">
            <h4>WooriZip 인테리어 쇼핑 웹 사이트트</h4>
            <p><strong>설명:</strong> 인테리어어 경험을 바탕으로 쇼핑, 커뮤니티 웹 사이트 개발</p>
            <p><strong>기능:</strong> 반응형 웹, 커뮤니티 기능, 쇼핑몰 기능</p>
            <p><strong>기술:</strong> html, css, javascript</p>
            <p><strong>역할:</strong> 프론트엔드</p>
            <p><strong>성과:</strong> 모던한 UI/UX와 반응형 구현</p>
          </div>
        </div>
      </section>

      {/* 경력 */}
      <section className="section">
        <h2 className="section-title">경력</h2>

        <article className="exp-item">
          <h3>엘림기전 | 전기설비</h3>
          <p className="exp-period">2018.05 ~ 2024.12 (7년 3개월)</p>
          <ul>
            <li>블로우 장비 배선작업</li>
            <li>분전반·제어반 배선 및 설치</li>
            <li>자재관리 및 현장 이슈 조율</li>
          </ul>
        </article>

        <article className="exp-item">
          <h3>가이즈건축 | 현장관리</h3>
          <p className="exp-period">2017.10 ~ 2018.04 (7개월)</p>
          <ul>
            <li>호텔 건축 현장 일정 조율</li>
            <li>공정 별 작업 인원 체크</li>
            <li>식당 및 식수 인원 관리</li>
          </ul>
        </article>
      </section>

      {/* 학력 */}
      <section className="section">
        <h2 className="section-title">학력</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>2010 ~ 2013</td>
              <td>동아공업고등학교 자동차과</td>
              <td>졸업</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 자격증 */}
      <section className="section">
        <h2 className="section-title">자격 / 면허 / 수상</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>2025.04</td>
              <td>2종 소형 운전면허</td>
              <td>경찰청</td>
            </tr>
            <tr>
              <td>2015.04</td>
              <td>1종 보통 운전면허</td>
              <td>경찰청</td>
            </tr>
            <tr>
              <td>2012.07</td>
              <td>자동차정비기능사</td>
              <td>한국산업인력공단</td>
            </tr>
            <tr>
              <td>2010.06</td>
              <td>ITQ 아래한글 A등급</td>
              <td>KPC</td>
            </tr>
            <tr>
              <td>2010.04</td>
              <td>ITQ 엑셀 A등급</td>
              <td>KPC</td>
            </tr>
            <tr>
              <td>2010.03</td>
              <td>ITQ 파워포인트 A등급</td>
              <td>KPC</td>
            </tr>
          </tbody>
        </table>
      </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/statement" element={<PersonalStatement />} />
      </Routes>
    </Router>
  )
}

export default App
