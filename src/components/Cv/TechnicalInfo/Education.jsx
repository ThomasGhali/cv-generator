export default function Education({ title, college, location, gradYear }) {
  return (
    <>
    <div className="edu">
      <h1 className="edu__title">
        {title}
      </h1>
      <div className="edu__info">
        <span className="college">{college} | </span>
        <span className="location">{location}</span>
      </div>
      <span className="grad">Graduated: {gradYear}</span>
    </div>

    </>
  )
}