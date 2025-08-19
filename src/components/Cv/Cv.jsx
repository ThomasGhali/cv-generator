import Profile from "./GeneralInfo/Profile.jsx"
import TechnicalInfo from "./TechnicalInfo/TechnicalInfo"
import './Cv.css'

export default function Cv() {
  return (
    <>
      <div className="cv-wrapper">
        <section className="cv-section">
          <Profile />
          <TechnicalInfo />
        </section>
      </div>
    </>
  )
}