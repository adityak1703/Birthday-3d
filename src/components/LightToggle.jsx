import { useState } from 'react'
import './LightToggle.css'

function LightToggle({ onToggle }) {
  const [isLit, setIsLit] = useState(false)

  const handleToggle = () => {
    const newState = !isLit
    setIsLit(newState)
    onToggle(newState)
  }

  return (
    <button 
      className={`light-toggle ${isLit ? 'lit' : 'dim'}`}
      onClick={handleToggle}
      aria-label={isLit ? 'Dim lights' : 'Light up'}
      title={isLit ? 'Dim lights' : 'Light up'}
    >
      {isLit ? (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.23-1.98.14-2.97-.37-4.25-4.04-7.64-8.32-7.67-4.28-.03-7.79 3.28-8.16 7.53C-1.54 15.3 1.28 19 5.14 20" />
            <path d="M12 8v4" />
            <path d="M12 2v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <span>Dim</span>
        </>
      ) : (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.23-1.98.14-2.97-.37-4.25-4.04-7.64-8.32-7.67-4.28-.03-7.79 3.28-8.16 7.53C-1.54 15.3 1.28 19 5.14 20" />
          </svg>
          <span>Light Up</span>
        </>
      )}
    </button>
  )
}

export default LightToggle
