import ProjectCard from '../../global/projectCard'
import './style.scss'
import pic1 from '../../../assets/pic1.png'
import dashboard from '../../../assets/dashboard.png'
import auth from '../../../assets/auth.png'
import AI from '../../../assets/ai.png'

const Projcts = () => {
  return (
    <div id='projects' className='projects section__padding'>
        <p className='sectionTitle'>Featured projects:</p>
        <p className='description'>
            I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
        </p>
        <div className="cards">
            <ProjectCard 
              title={"Modern dashboard"}
              desc={""}
              liveURL={"https://melodic-stardust-45fe11.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/dashBoardDarkMode"}
              img={dashboard} 
            />
            <ProjectCard 
              title={"Auth System"}
              desc={""}
              liveURL={"https://rainbow-fox-483366.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/signInUp-responsive.github.io"}
              img={auth} 
            />
            <ProjectCard 
              title={"AI GPT 3"}
              desc={""}
              liveURL={"https://rainbow-fox-483366.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/signInUp-responsive.github.io"}
              img={AI} 
            />
        </div>
    </div>
  )
}

export default Projcts