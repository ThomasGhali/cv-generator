export default function Portofolio({ projectName, projectFor, projectText}) {
  return (
    <div className="project">
      <div className="project__header">
        <span className="project__name">{projectName} </span>
        <span className="project__for">for {projectFor}: </span>
      </div>
      <p className="project__info">{projectText}</p>
    </div>
  )
}