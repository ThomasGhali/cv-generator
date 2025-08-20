import Profile from "./GeneralInfo/Profile.jsx"
import TechnicalInfo from "./TechnicalInfo/TechnicalInfo"
import './Cv.css'

export default function Cv({ skills }) {
  return (
    <>
      <div className="cv-wrapper">
        <section className="cv-section">
          <Profile skills={skills} />
          <TechnicalInfo />
        </section>
      </div>
    </>
  )
}