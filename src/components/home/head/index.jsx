import './style.scss'
import { Eye, User } from '../../logos'
import dev from '../../../assets/dev.png'

const Head = () => {
  return (
    <div id='home' className='home section__padding'>
        <div className="left">
            <div className='text'>
            <p>Hello, i'm</p>
            <p>Hadi Mohammed</p>
            <p>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>

            </div>

            <div className="buttons">
                    <button>About Me &nbsp; <User /></button>
                    
                    <button>Projects &nbsp; <Eye /></button>
                
            </div>
        </div>
        <div className="right">
            <div className="circle"> </div>
            <img src={dev} />
        </div>
        <div className="line"></div>
    </div>
  )
}

export default Head