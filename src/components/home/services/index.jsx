import ServiceBox from '../../global/serviceBox'
import { Api } from '../../logos/Api'
import { Design } from '../../logos/Design'
import { Git } from '../../logos/Git'
import { Js } from '../../logos/Js'
import { Python } from '../../logos/Python'
import { ReactLogo } from '../../logos/ReactLogo'
import { WebDev } from '../../logos/WebDev'
import './style.scss'

const Services = () => {
  return (
    <div className='services section__padding'>
        <p className='sectionTitle'>The services I offer:</p>
        <div className="boxes">
            <ServiceBox 
                title={'WEB DESIGN'}
                logo={<Design />}
                desc={'I can implement web designs with Figma and Adove XD'}
            />
            <ServiceBox 
                title={'VERSION CONTROL'}
                logo={<Git />}
                desc={'I can use version control systems well, and Git is my go-to tool.'}
                typeTow={true}
            />
            <ServiceBox 
                title={'WEB DEVELOPMENT'}
                logo={<WebDev />}
                desc={'I create beautiful interfaces with simple HTML, CSS, & JavaScript with ReactJS'}
            />
            <ServiceBox 
                title={'NPM AND NODEJS'}
                logo={<Js />}
                desc={'I have a core understanding of NPM. I can also deal with NodeJS'}
                typeTow={true}
            />
            <ServiceBox 
                title={'PYTHON DEVELOPER'}
                logo={<Python />}
                desc={'I am an expert python developer. I have experience using the Django framework.'}
            />
            {/* <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<ReactLogo />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
                typeTow={true}
            /> */}
        </div>

    </div>
  )
}

export default Services