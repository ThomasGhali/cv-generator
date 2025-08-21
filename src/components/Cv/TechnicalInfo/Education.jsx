export default function Education({ institution, degree, location, gradYear }) {
  return (
    <>
    <div className="edu">
      <h1 className="edu__title">
        {degree}
      </h1>
      <div className="edu__info">
        <span className="college">{institution} | </span>
        <span className="location">{location}</span>
      </div>
      <span className="grad">Graduated: {gradYear}</span>
    </div>

    </>
  )
}