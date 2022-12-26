import { Email } from '../../logos/Email'
import { Facebook } from '../../logos/Facebook'
import { Instagram } from '../../logos/Instagram'
import './style.scss'

const Connect = () => {
  return (
    <div id='contact' className='connect section__padding'>
        <div className="left">
            <p className='sectionTitle'>Connect with me:</p>
            <p className='desc'>Satisfied with me? Please contact me</p>
            <div className="media">
                <Facebook />
                <Instagram />
                <Email />
            </div>
        </div>
        <div className="right">
            <p className='rightTitle'>Contact me, let’s make magic together</p>
            <div className="form">
                <input type="text" placeholder='Name:'/>
                <input type="email" placeholder='Email:' />
                <textarea  placeholder='Message:' />
                <button>Send</button>
            </div>
        </div>
        
    </div>
  )
}

export default Connect