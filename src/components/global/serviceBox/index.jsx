import './style.scss'

const ServiceBox = ({ title, logo, desc, typeTow}) => {
  return (
    <div className='ServiceBox' style={typeTow && {borderColor: '#F5F5F5'}}>
      <div className="content">
        <div className="head">
          <div className="logo">{logo}</div>
          <div className="title" style={typeTow && {color: '#7562E0'}}>{title}</div>
        </div>
        <div className="body">
          <p className='description'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceBox