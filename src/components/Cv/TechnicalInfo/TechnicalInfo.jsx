import "./TechnicalInfo.css"
import SectionsHeader from "../SectionsHeader"
import './Experience.css'
import Experience from './Experience'
import Education from "./Education"


export default function TechnicalInfo() {
  return (
    <div className="technical-info">
      <section className="profile-section">
        <SectionsHeader text="Profile" iconName="profile" />
        <p>Passionate web developer with hands-on experience in building responsive and user-friendly websites using modern technologies. Skilled in HTML, CSS, JavaScript, and React, with a strong eye for detail and clean code practices.</p>
      </section>

      <section className="experience-section">
        <SectionsHeader text="Experience" iconName="experience" />
        <ul className='exp-list'>
          <Experience
            title="Senior Graphic Designer"
            company="Brightline Agency" 
            location="New York, Ny" 
            from="June 2020" 
            to="Present" 
            text="Boosted engagement by 30% through brand campaigns and created identity." 
          />
          <Experience
            title="Senior Graphic Designer"
            company="Brightline Agency" 
            location="New York, Ny" 
            from="June 2020" 
            to="Present" 
            text="Boosted engagement by 30% through brand campaigns and created identity pachages for social media and prints." 
          />
      </ul>
      </section>

      <section className="education">

      <SectionsHeader iconName='education' text="Education" />
        <Education 
          title="Bachelor of Engineering Mechatronics" 
          college='Canadian International College' 
          location='New York, NY' 
          gradYear='2017' 
        />
      </section>

      <section className="portofolio">
        
      </section>
    </div>
  )
}