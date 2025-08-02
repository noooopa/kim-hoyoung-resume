import './App.css'

function App() {
  return (
    <main className="resume-wrapper">
      {/* header */}
      <header className="resume-header">
        <h1>김호영 <span className="tag">1995 Born</span></h1>
        <div className="contact-line">
          <span>📞 010-****-6280</span>
          <span>✉️ gyd******@naver.com</span>
          <span>🏠 서울 관악구 은성로 16가길</span>
          <span className="tag">희망 3,200 ~ 3,400 만원</span>
        </div>
        <div className="contact-line">
          {['Vue.js','React','TypeScript','MySQL Workbench','IntelliJ IDEA','VS Code'].map(s=>(
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </header>

      {/* career */}
      <section className="section">
        <h2 className="section-title">경력 (총 4년 10개월)</h2>

        <article className="exp-item">
          <h3>엘림기전 | 전기설비 — 전기 시공기사</h3>
          <p className="exp-period">2023.10 ~ 2024.12 (1년 3개월)</p>
          <ul>
            <li>신축 공장 전력 인입·배선 공사 총괄</li>
            <li>분전반·제어반 설치 및 안전 점검 → 공사비 5 % 절감</li>
            <li>CAD 도면·자재 산출 및 팀 조정</li>
          </ul>
        </article>

        <article className="exp-item">
          <h3>엘림기전 | 현장팀 — 전기 시공·유지보수</h3>
          <p className="exp-period">2018.05 ~ 2022.12 (4년 8개월)</p>
          <ul>
            <li>빌딩·오피스텔 전기 설비 시공 50+건 수행</li>
            <li>PLC 패널 배선·시험 운전, LED 체계 전환</li>
            <li>현장 안전교육 담당</li>
          </ul>
        </article>

        <article className="exp-item">
          <h3>가이즈건축 — 전기공사 보조</h3>
          <p className="exp-period">2017.10 ~ 2018.04 (7개월)</p>
          <ul>
            <li>공동주택 분전반 배치·배선 지원</li>
            <li>전력 사용량 계측 → 효율 3 % 개선</li>
          </ul>
        </article>
      </section>

      {/* education */}
      <section className="section">
        <h2 className="section-title">학력</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>2011 ~ 2014</th>
              <td>동아공업고등학교 전기과 졸업</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* license */}
      <section className="section">
        <h2 className="section-title">자격 / 면허 / 수상</h2>
        <table className="table">
          <tbody>
            <tr><th>2025.04</th><td>2종 소형 운전면허 — 경찰청</td></tr>
            <tr><th>2015.04</th><td>1종 보통 운전면허 — 경찰청</td></tr>
            <tr><th>2012.07</th><td>자동차정비기능사 — 한국산업인력공단</td></tr>
            <tr><th>2010.06</th><td>ITQ 아래한글 A등급 — KPC</td></tr>
            <tr><th>2010.04</th><td>ITQ 엑셀 A등급 — KPC</td></tr>
            <tr><th>2010.03</th><td>ITQ 파워포인트 A등급 — KPC</td></tr>
          </tbody>
        </table>
      </section>

      {/* intro */}
      <section className="section">
        <h2 className="section-title">한 줄 자기소개</h2>
        <p><strong>"전기 시공 + 프론트엔드 개발"</strong> 두 분야를 잇는 하이브리드형 인재! 현장 품질 관리부터 React·Vue 기반 시스템 프로토타입까지, 전기와 IT를 연결해 생산성을 끌어올립니다.</p>
      </section>
    </main>
  )
}

export default App
