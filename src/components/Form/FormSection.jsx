import { Children, useState } from "react"

export default function FormSection({ name, children, demo=false }) {
  //      replace demo with false !!!!!!!!!
  const [isOpen, setIsOpen] = useState(demo);

  return (
    <fieldset className="wrapper">
      <legend 
        className="click-drop" 
        onClick={() => setIsOpen(prev => !prev)} 
      >
        <span className="section-name">{name}</span>
        <span className="open-close-arrow">{isOpen ? "▲" : "▼"}</span>
      </legend>
      { isOpen && (
        <div className="drop-window">
          {children}
        </div>
      )}
    </fieldset>
  )
}