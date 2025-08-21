import "./TechnicalInfo.css"
import SectionsHeader from "../SectionsHeader"
import Experience from './Experience'
import Education from "./Education"
import Portofolio from './Portofolio'


export default function TechnicalInfo({ profileDescription, experience, education }) {
  const viewExperience = () => {
    return experience.map(((exp, index) => (
      <Experience
        key={index}
        position={exp.position}
        company={exp.company}
        location={exp.location}
        from={exp.from}
        to={exp.to}
        text={exp.text}
      />
    )))
  }

  return (
    <div className="technical-info">
      <section className="profile-section">
        <SectionsHeader text="Profile" iconName="profile" />
        <p>{profileDescription}</p>
      </section>

      <section className="experience-section">
        <SectionsHeader text="Experience" iconName="experience" />
        <ul className="exp-list">
          {viewExperience()}
        </ul>
      </section>

      <section className="education">
        <SectionsHeader iconName="education" text="Education" />
        <Education
          institution={education.institution}
          college={education.degree}
          location={education.location}
          gradYear={education.gradYear}
        />
      </section>

      <section className="portofolio">
        <SectionsHeader iconName="portofolio" text="Portofolio" />
        <Portofolio
          projectName="Social Media Campaign"
          projectFor="Eco Wave Brand"
          projectText="transformed their social media presence with cohesive visuals and engagin graphics."
        />
        <Portofolio
          projectName="Social Media Campaign"
          projectFor="Eco Wave Brand"
          projectText="transformed their social media presence with cohesive visuals and engagin graphics."
        />
      </section>
    </div>
  )
}