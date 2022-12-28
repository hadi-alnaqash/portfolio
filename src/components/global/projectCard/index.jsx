import './style.scss'

const ProjectCard = ({img, liveURL, repoURL}) => {
  return (
    <div className='projectCard'>
        <div className="content">
            <div className="image">
                <img src={img} />
            </div>
            <p className='title'>TWINDER</p>
            <p className='desc'>
                A live Geolocation app for finding tweets and twitter users around you.
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