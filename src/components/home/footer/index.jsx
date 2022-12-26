import { Email } from '../../logos/Email'
import { Facebook } from '../../logos/Facebook'
import { Instagram } from '../../logos/Instagram'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer section__padding'>
        <div className="by">
            <p>@2022 Hadi Mohammed</p>
            <p>Fullstack Developer</p>
            <p>UI Designer</p>
            <p>Data Analyst</p>
        </div>
        <div className="links">
            <Facebook />
            <Instagram />
            <Email />
        </div>
    </div>
  )
}

export default Footer