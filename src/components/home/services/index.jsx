import ServiceBox from '../../global/serviceBox'
import { WebDev } from '../../logos/WebDev'
import './style.scss'

const Services = () => {
  return (
    <div className='services section__padding'>
        <p className='sectionTitle'>The services i offer:</p>
        <div className="boxes">
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
            />
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
                typeTow={true}
            />
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
            />
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
                typeTow={true}
            />
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
            />
            <ServiceBox 
                title={'UI & UX DESIGNING'}
                logo={<WebDev />}
                desc={'I design beautiful web iterfaces with Figma and Adove XD'}
                typeTow={true}
            />

        </div>

    </div>
  )
}

export default Services