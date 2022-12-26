import './style.scss'

const ProjectCard = ({img}) => {
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
                <button className='live'>View Live</button>
                <button className='repo'>Github Repo</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard