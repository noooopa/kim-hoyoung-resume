import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// PDF 내보내기 함수
export const exportToPDF = async (elementRef, filename = 'resume.pdf') => {
  try {
    // 테마 토글 버튼과 인쇄 버튼들을 임시로 숨김
    const buttonsToHide = document.querySelectorAll('.theme-toggle, .print-button, .pdf-button')
    buttonsToHide.forEach(btn => btn.style.display = 'none')

    // PDF용 스타일 임시 적용
    const originalStyles = applyPDFStyles()

    // HTML을 캔버스로 변환
    const canvas = await html2canvas(elementRef.current, {
      scale: 2, // 고해상도
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: elementRef.current.scrollWidth,
      height: elementRef.current.scrollHeight,
      scrollX: 0,
      scrollY: 0
    })

    // 캔버스를 이미지로 변환
    const imgData = canvas.toDataURL('image/png')

    // PDF 생성
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // 여러 페이지로 나누어 출력
    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pdfHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    // PDF 다운로드
    pdf.save(filename)

    // 원래 스타일 복원
    restoreOriginalStyles(originalStyles)
    
    // 숨긴 버튼들을 다시 표시
    buttonsToHide.forEach(btn => btn.style.display = 'flex')

  } catch (error) {
    console.error('PDF 생성 중 오류:', error)
    alert('PDF 생성 중 오류가 발생했습니다.')
  }
}

// 인쇄 함수
export const printPage = () => {
  window.print()
}

// 인쇄용 CSS 스타일 추가
export const addPrintStyles = () => {
  const style = document.createElement('style')
  style.id = 'print-styles'
  style.textContent = `
    @media print {
      /* 기본 인쇄 스타일 */
      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      
      /* 페이지 설정 */
      @page {
        size: A4;
        margin: 15mm;
      }
      
             /* 인쇄 시 숨길 요소들 */
       .theme-toggle,
       .print-button,
       .pdf-button,
       .back-link,
       .intro-hint {
         display: none !important;
       }
      
      /* 인쇄용 배경색 */
      body {
        background: white !important;
        color: black !important;
      }
      
      .resume-wrapper {
        background: white !important;
        box-shadow: none !important;
        border: none !important;
        margin: 0 !important;
        padding: 20px !important;
        max-width: none !important;
      }
      
      /* 다크 테마 인쇄 시 조정 */
      .dark-theme .resume-wrapper {
        background: white !important;
        color: black !important;
      }
      
      .dark-theme .resume-wrapper * {
        color: black !important;
      }
      
      /* 섹션 간격 조정 */
      .section {
        margin-bottom: 20px !important;
        page-break-inside: avoid;
      }
      
      /* 프로젝트 카드 인쇄 최적화 */
      .project-card {
        border: 1px solid #ddd !important;
        background: white !important;
        page-break-inside: avoid;
      }
      
      /* 스킬 그리드 인쇄 최적화 */
      .skills-grid {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
        gap: 15px !important;
      }
      
      .skill-item {
        border: 1px solid #ddd !important;
        background: white !important;
        padding: 10px !important;
      }
      
      /* 테이블 인쇄 최적화 */
      .table {
        border-collapse: collapse !important;
        width: 100% !important;
      }
      
      .table th,
      .table td {
        border: 1px solid #ddd !important;
        padding: 8px !important;
        background: white !important;
        color: black !important;
      }
      
      /* 자기소개서 인쇄 최적화 */
      .statement-content {
        background: white !important;
        color: black !important;
      }
      
      .statement-section {
        page-break-inside: avoid;
        margin-bottom: 20px !important;
      }
      
      /* 프로필 이미지 인쇄 최적화 */
      .profile-image img {
        max-width: 150px !important;
        height: auto !important;
      }
      
             /* 링크 인쇄 최적화 */
       a {
         color: black !important;
         text-decoration: none !important;
       }
      
      /* 페이지 나누기 방지 */
      .profile-section,
      .section {
        page-break-inside: avoid;
      }
      
      /* 헤더 인쇄 최적화 */
      .statement-header {
        background: white !important;
        color: black !important;
        border-bottom: 2px solid #000 !important;
        padding-bottom: 10px !important;
        margin-bottom: 20px !important;
      }
    }
  `
  document.head.appendChild(style)
}

// PDF용 스타일 적용
const applyPDFStyles = () => {
  const originalStyles = {}
  
  // 인쇄 스타일 적용
  addPrintStyles()
  
  // 추가로 PDF에서 숨길 요소들
  const elementsToHide = document.querySelectorAll('.intro-hint, .back-link')
  elementsToHide.forEach(el => {
    originalStyles[el] = el.style.display
    el.style.display = 'none'
  })
  
  // 링크 밑줄 제거
  const links = document.querySelectorAll('a')
  links.forEach(link => {
    originalStyles[link] = link.style.textDecoration
    link.style.textDecoration = 'none'
  })
  
  return originalStyles
}

// 원래 스타일 복원
const restoreOriginalStyles = (originalStyles) => {
  // 인쇄 스타일 제거
  removePrintStyles()
  
  // 숨긴 요소들 복원
  Object.keys(originalStyles).forEach(element => {
    if (originalStyles[element] !== undefined) {
      element.style.display = originalStyles[element]
      element.style.textDecoration = originalStyles[element]
    }
  })
}

// 인쇄용 CSS 스타일 제거
export const removePrintStyles = () => {
  const style = document.getElementById('print-styles')
  if (style) {
    style.remove()
  }
} 