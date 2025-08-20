import "./Profile.css"
import SectionsHeader from "../SectionsHeader"

function Skill({ skillName, percent }) {
  return (
    <div className="skill">
      <span>{skillName}</span>
      <div className="level" style={{backgroundImage : `linear-gradient(to right, rgb(255, 191, 0) ${percent}%, grey ${percent}%)`}}></div>
    </div>
  )
}

export default function Profile() {
  return (
    <>
      <div className="profile-wrapper">
        <section className="profile">
          <div className="profile__img"></div>
          <div className="profile__name-title">
            <span className="profile__name">
              Nina Lnade
            </span>
            <span>
              Graphic Designer
            </span>
          </div>
          
          <section className="contact profile-section">
            <SectionsHeader text="Contact" iconName="contact" font="gold" />
            <div className="contact__info">
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Email</span>
                <p >thomasmetias29@gmail.com</p>
              </div>
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Phone</span>
                <p>+1 234 567-8900</p>
                </div>
              <div className="contact__section-wrapper">
                <span className="contact__highlight">Website</span>
                <p>thomasghali.com</p>
              </div>
            </div>
          </section>

          <section className="skills profile-section">
            <SectionsHeader text="Skills" iconName="skills" font="gold" />
          </section>

          <section className="interests profile-section">
            <SectionsHeader text="Interests" iconName="interests" font="gold" />
            <p>minimalist arti</p>
            <p>pingpong</p>
            <p>freaking football</p>

          </section>
        </section>
      </div>
    </>
  )
}