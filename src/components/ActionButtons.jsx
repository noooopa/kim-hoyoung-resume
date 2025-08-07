import { useRef, useEffect } from 'react'
import { exportToPDF, printPage, addPrintStyles, removePrintStyles } from '../utils/pdfUtils'

const ActionButtons = ({ pageType = 'resume', contentRef }) => {

  useEffect(() => {
    // 컴포넌트 마운트 시 인쇄 스타일 추가
    addPrintStyles()
    
    // 컴포넌트 언마운트 시 인쇄 스타일 제거
    return () => {
      removePrintStyles()
    }
  }, [])

  const handlePDFExport = async () => {
    const filename = pageType === 'resume' ? '김효영_이력서.pdf' : '김효영_자기소개서.pdf'
    await exportToPDF(contentRef, filename)
  }

  const handlePrint = () => {
    printPage()
  }

  return (
    <>
      {/* PDF 내보내기 버튼 */}
      <button 
        className="pdf-button" 
        onClick={handlePDFExport}
        title="PDF로 내보내기"
      >
        📄 PDF
      </button>

      {/* 인쇄 버튼 */}
      <button 
        className="print-button" 
        onClick={handlePrint}
        title="인쇄하기"
      >
        🖨️ 인쇄
      </button>
    </>
  )
}

export default ActionButtons 