import "./Profile.css"
import SectionsHeader from "../SectionsHeader"
import templateImg from '../../../assets/user-img-template.png'

function Skill({ range, skillName }) {
  return (
    <div className="skill">
      <span>{skillName}</span>
      <div className="level" style={{backgroundImage : `linear-gradient(to right, rgb(255, 191, 0) ${range}%, grey ${range}%)`}}></div>
    </div>
  )
}

export default function Profile({ userImg, skills, contactState, interests, nameProf }) {
  const {email, phone, website} = contactState;
  function viewSkills() {
    return skills.map((skill, index) => (
      <Skill 
        key={index}
        range={skill.range} 
        skillName={skill.skillName} 
      />
    ))
  }

  function viewInterests() {
    return interests.map((interest, index) => (
      <p key={index}>{interest}</p>
    ))
  }

  return (
    <>
      <div className="profile-wrapper">
        <section className="profile">
            <img className="profile__img" src={userImg || templateImg} alt="user image" />

          <div className="profile__name-title">
            <span className="profile__name">
              {nameProf[0]}
            </span>
            <span>
            {nameProf[1]}
            </span>
          </div>
          
          <section className="contact profile-section">
            <SectionsHeader text="Contact" iconName="contact" font="gold" />
            <div className="contact__info">
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Email</span>
                <p >{email}</p>
              </div>
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Phone</span>
                <p>{phone}</p>
                </div>
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Website</span>
                <p>{website}</p>
              </div>
            </div>
          </section>

          {skills.length > 0 && <section className="skills profile-section">
            <SectionsHeader text="Skills" iconName="skills" font="gold" />
            {viewSkills()}
          </section>}

          {interests.length > 0 &&
            <section className="interests profile-section">
            <SectionsHeader text="Interests" iconName="interests" font="gold" />
            {viewInterests()}
          </section>}
        </section>
      </div>
    </>
  )
}