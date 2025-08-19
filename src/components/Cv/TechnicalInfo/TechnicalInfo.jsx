import "./TechnicalInfo.css"
import SectionsHeader from "../SectionsHeader"
import Experience from "./Experience"

export default function TechnicalInfo() {
  return (
    <div className="technical-info">
      <section className="profile-section">
        <SectionsHeader text="Profile" iconName="profile" />
        <p>Passionate web developer with hands-on experience in building responsive and user-friendly websites using modern technologies. Skilled in HTML, CSS, JavaScript, and React, with a strong eye for detail and clean code practices.</p>
      </section>

      <section className="experience-section">
        <SectionsHeader text="Experience" iconName="experience" />
        <Experience />
      </section>
    </div>
  )
}