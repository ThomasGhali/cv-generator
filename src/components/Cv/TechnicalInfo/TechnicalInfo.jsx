import "./TechnicalInfo.css"
import SectionsHeader from "../SectionsHeader"
import Experience from './Experience'
import Education from "./Education"
import Portofolio from './Portofolio'


export default function TechnicalInfo({ profileDescription, experience, education, projects }) {
  const viewExperience = () => {
    return experience.map(((exp, index) => (
      <Experience key={index} {...exp} />
    )))
  }

  function viewPortofolio() {
    return projects.map((project, index) => (
      <Portofolio key={index} {...project} />
    ))
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
          degree={education.degree}
          location={education.location}
          gradYear={education.gradYear}
        />
      </section>

      <section className="portofolio">
        <SectionsHeader iconName="portofolio" text="Portofolio" />
        {viewPortofolio()}
      </section>
    </div>
  )
}