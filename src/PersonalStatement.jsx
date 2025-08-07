import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ActionButtons from './components/ActionButtons'
import './App.css'
import './PersonalStatement.css'

function PersonalStatement() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const statementRef = useRef(null)

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
        <div className="action-buttons">
          <ActionButtons pageType="statement" contentRef={statementRef} />
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <main className="resume-wrapper" ref={statementRef}>

      <header className="statement-header">
        <h1>자기소개서</h1>
        <Link to="/" className="back-link">← 돌아가기</Link>
      </header>

      <section className="statement-content">
        <div className="title-block">
          <h2>"경험을 중시하는 개발자"</h2>
          <p>저의 여정은 아직 진행형입니다.</p>
          <p>새로운 팀에서 그 경험치를 EXP +100으로 끌어올릴 준비, 되어 있습니다.</p>
        </div>

        <div className="statement-section">
          <h3>1. HOOK ― 경험으로 증명</h3>
          <p>"<strong>공장 소음 속에서도, 사람 목소리가 먼저 들렸습니다.</strong>"</p>
            <p>고등학교 방학때 들어간 벨브 · 감속기 생산직에서 현장 이슈를 조율해 불량률을 낮췄고, </p>
            <p>막내에서 <strong>CS → 영업관리</strong>까지 역할을 확장했습니다.</p>
          <p>현장이 길러준 <strong>빠른 판단력·추진력·사회성</strong> 덕분에 저는 새 팀에서도 먼저 목소리를 듣고 길을 찾았습니다.</p>
          <p>이른 독립이 심어준 "<strong>경험 GPS</strong>"가 오늘도 제 나침반입니다.</p>
        </div>

        <div className="statement-section">
          <h3>2. 왜 개발자인가? ― 문제 해결의 짜릿함</h3>
          <p>
            분석으로 문제의 뿌리를 찾고, 코드 한 줄로 해답을 끌어낼 때 
            느끼는 전율이 저를 개발자의 길로 이끌었습니다.
          </p>
          <p>"<strong>어제의 불편을 오늘 지운다</strong>"</p>
          <p>
            이 직관적 가치를 가장 빠르게 실현할 수 있는 무대가 프론트엔드라고 확신합니다.
          </p>
        </div>

        <div className="statement-section">
          <h3>3. 노력으로 쌓은 기반 ― 6개월, 그리고 현업과의 연결</h3>
          <ul>
            <li><strong>6개월 집중 부트캠프</strong> : React·TypeScript·Git Flow 기반 팀 프로젝트 2개 완수</li>
            <li><strong>현업 멘토링 & 카페 공부모임</strong> : 주 1회 코드리뷰·기술 Q&A로 실전 감각 습득</li>
            <li><strong>학습 루틴</strong> : 레퍼런스 학습, velog 트랜딩 학습</li>
          </ul>
        </div>

        <div className="statement-section">
          <h3>4. 개발 역량 ― UX 집착과 트렌드 추격</h3>
          <ul>
            <li><strong>Figma</strong> 자체 학습, 픽셀 검수로 UI/UX 일관성 유지</li>
            <li>Web Design 레퍼런스(Dribbble·Behance) 분석 → 프로젝트 레이아웃 적용</li>
            <li>최신 스택 빠르게 체크하고 실험하며 포트폴리오에 반영</li>
          </ul>
        </div>

        <div className="statement-section">
          <h3>5. 성격 ― 집요함이 만든 '1픽셀의 차이'</h3>
          <p>저의 취미인 다트·스케이트보드는 한 번의 시도로 성공할 수 없습니다. </p>
          <p>수백 번 던지고 넘어지며 자세를 교정해야만 완성됩니다.</p>
          <p>코드 역시 같습니다. "<strong>될 때까지 파본다</strong>" 는 집요함이 제 DNA입니다.</p>
        </div>

        <div className="statement-section">
          <h3>6. 성장 포부 ― 흐름을 이끄는 개발자</h3>
          <ol>
            <li><strong>1년 차</strong> : 사내 Design System 기여, 렌더링·접근성 개선</li>
            <li><strong>3년 차</strong> : FE×UX 태스크포스 리딩, <strong>생성형 AI</strong> 기반 A/B 테스트 자동화 구축</li>
            <li><strong>장기</strong> : 프론트 기획·개발·데이터 분석을 잇는 풀스택 역량으로 프로젝트 선도</li>
          </ol>
        </div>

        <div className="statement-section">
          <h3>7. 경력보다 '개발자적 면모'를 선택한 이유</h3>
          <p>이전 사회 경험이 개발과 직접적 연관은 없었지만, <strong>팀워크·커뮤니케이션</strong>을 몸으로 배웠습니다. </p>
          <p>이제 그 자산을 기술로 확장해, 사용자의 복잡함을 없애는 경험 중심 서비스를 만들고자 합니다.</p>
        </div>
      </section>
      </main>
    </div>
  )
}

export default PersonalStatement 