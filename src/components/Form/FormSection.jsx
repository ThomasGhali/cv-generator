import { Children, useState } from "react"

export default function FormSection({ name, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wrapper">
      <div 
        className="click-drop" 
        onClick={() => setIsOpen(prev => !prev)} 
      >
        <span className="section-name">{name}</span>
        <span className="open-close-arrow">{isOpen ? '"▲"' : "▼"}</span>
      </div>
      { isOpen && (
        <div className="drop-window">
          {children}
        </div>
      )}
    </div>
  )
}