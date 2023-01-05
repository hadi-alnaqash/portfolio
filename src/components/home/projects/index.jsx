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
            I have worked on many projects over the course of being a Web Developer, here are a few of my live simple projects
        </p>
        <div className="cards">
            <ProjectCard 
              title={"openAI GPT-3"}
              desc={"Fully Responsive Modern UI/UX Website "}
              liveURL={"https://jocular-moxie-3ea8ac.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/GPT3-responsiveWebPage"}
              img={AI} 
            />
            <ProjectCard 
              title={"Modern dashboard"}
              desc={"Admin Dashboard With Dark Mode Using Material UI"}
              liveURL={"https://melodic-stardust-45fe11.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/dashBoardDarkMode"}
              img={dashboard} 
            />
            <ProjectCard 
              title={"Auth System"}
              desc={"Modern And Fully Responsive SignIn/SignUp Froms With Auth System"}
              liveURL={"https://rainbow-fox-483366.netlify.app/"} 
              repoURL={"https://github.com/hadi-alnaqash/signInUp-responsive.github.io"}
              img={auth} 
            />
        </div>
    </div>
  )
}

export default Projcts