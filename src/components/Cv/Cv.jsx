import Profile from "./GeneralInfo/Profile.jsx"
import TechnicalInfo from "./TechnicalInfo/TechnicalInfo"
import './Cv.css'

export default function Cv({ 
  userImg,
  skills, 
  contactState, 
  interests, 
  profileDescription,
  experience,
  education,
  projects,
  nameProf,
}) {
  return (
    <>
      <div className="cv-wrapper">
        <section className="cv-section">
          <Profile 
            userImg={userImg}
            nameProf={nameProf}
            contactState={contactState}
            skills={skills} 
            interests={interests}
          />
          <TechnicalInfo
            profileDescription={profileDescription}
            experience={experience}
            education={education}
            projects={projects}
          />
        </section>
      </div>
    </>
  )
}