export default function ExperienceSetion({ title, company, location, from, to, text }) {
  return (
    <>
      <li className="exp">
        <div className="exp-wrapper">
          <div className="exp__info">
            <h1 className="exp__title">
              {title}
            </h1>
            <div className="exp__place">
              <span className="exp__company">{company} | </span>
              <span className="exp__location">{location}</span>
            </div>
            <div className="exp__date">
              <span className="exp__date-from">{from} - </span>
              <span className="exp__date-to">{to}</span>
            </div>
          </div>
          <div className="exp-text">
            {text}
          </div>
        </div>
      </li>
    </>
  )
}