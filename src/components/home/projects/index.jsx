import ProjectCard from '../../global/projectCard'
import './style.scss'
import pic1 from '../../../assets/pic1.png'

const Projcts = () => {
  return (
    <div id='projects' className='projects section__padding'>
        <p className='sectionTitle'>Featured projects:</p>
        <p className='description'>
            I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
        </p>
        <div className="cards">
            <ProjectCard img={pic1} />
            <ProjectCard img={pic1} />
            <ProjectCard img={pic1} />
        </div>
    </div>
  )
}

export default Projcts