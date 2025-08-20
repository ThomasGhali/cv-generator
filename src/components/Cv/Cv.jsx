import Profile from "./GeneralInfo/Profile.jsx"
import TechnicalInfo from "./TechnicalInfo/TechnicalInfo"
import './Cv.css'

export default function Cv({ skills, contactState, interests, profileDescription }) {
  return (
    <>
      <div className="cv-wrapper">
        <section className="cv-section">
          <Profile 
            skills={skills} 
            contactState={contactState}
            interests={interests}
          />
          <TechnicalInfo
            profileDescription={profileDescription}
          />
        </section>
      </div>
    </>
  )
}