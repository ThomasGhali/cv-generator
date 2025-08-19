import "./Profile.css"
import SectionsHeader from "../SectionsHeader"

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
          
        <SectionsHeader text="Contact" iconName="contact" />

        </section>
      </div>
    </>
  )
}