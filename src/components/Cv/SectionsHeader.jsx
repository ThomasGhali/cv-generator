import './SectionsHeader.css'
import contact from '../../assets/contact.png'
import skills from '../../assets/skills.png'
import interests from '../../assets/interests.png'
import profile from '../../assets/profile.png'
import experience from '../../assets/experience.png'
import education from '../../assets/education.png'
import portofolio from '../../assets/portofolio.png'

const icons = {
  contact,
  skills,
  interests,
  profile,
  experience,
  education,
  portofolio,
};
// in the future it should be passed th icon name
export default function SectionsHeader({ iconName, text, font }) {

  return (
    <>
      <div className="header">
        <img src={icons[iconName]} className='header__icon' />
        <div className="header__info">
          <div 
            className="header__name" 
            style={{
              color: font === 'gold' ?
              'rgb(255, 191, 0)' :
              'black'
            }}
          >
            {text}
          </div>
          <div className="header__line"></div>
        </div>
      </div>
    </>
  )
}