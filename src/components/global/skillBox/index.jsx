import React from 'react'
import './style.scss'

const SkillBox = ({logo, title, selected}) => {
  return (
    <div className='box' style={selected ?{background: '#7562E0'} : null}>
        <div className="content">
            <div className="logo">{logo}</div>
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillBox