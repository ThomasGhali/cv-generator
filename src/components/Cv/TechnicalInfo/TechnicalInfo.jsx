import "./TechnicalInfo.css"
import SectionsHeader from "../SectionsHeader"
import Experience from './Experience'
import Education from "./Education"
import Portofolio from './Portofolio'


export default function TechnicalInfo({ profileDescription }) {
  function viewExperience() {
    
  }

  return (
    <div className="technical-info">
      <section className="profile-section">
        <SectionsHeader text="Profile" iconName="profile" />
        <p>{profileDescription}</p>
      </section>

      <section className="experience-section">
        <SectionsHeader text="Experience" iconName="experience" />
        <ul className='exp-list'>
          {viewExperience()}
          {/* <Experience
            title="Senior Graphic Designer"
            company="Brightline Agency" 
            location="New York, Ny" 
            from="June 2020" 
            to="Present" 
            text="Boosted engagement by 30% through brand campaigns and created identity pachages for social media and prints." 
          /> */}
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
        <SectionsHeader iconName='portofolio' text='Portofolio' />
        <Portofolio 
          projectName='Social Media Campaign' 
          projectFor="Eco Wave Brand" 
          projectText='transformed their social media presence with cohesive visuals and engagin graphics.' 
        />
        <Portofolio 
          projectName='Social Media Campaign' 
          projectFor="Eco Wave Brand" 
          projectText='transformed their social media presence with cohesive visuals and engagin graphics.' 
        />

      </section>
    </div>
  )
}