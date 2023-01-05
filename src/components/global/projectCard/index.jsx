import './style.scss'

const ProjectCard = ({img, liveURL, repoURL, title, desc}) => {
  return (
    <div className='projectCard'>
        <div className="content">
            <div className="image">
                <img src={img} />
            </div>
            <p className='title'>{title}</p>
            <p className='desc'>
                {desc}
            </p>
            <div className="buttons">
               <a href={liveURL}><button className='live'>View Live</button></a>
               <a href={repoURL}><button className='repo'>Github Repo</button></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard