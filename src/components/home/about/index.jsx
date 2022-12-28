import React from 'react'
import SkillBox from '../../global/skillBox'
import { WebDev } from '../../logos/WebDev'
import './style.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Navigation, Zoom } from "swiper";
import { Python } from '../../logos/Python';
import { Js } from '../../logos/Js';
import { ReactLogo } from '../../logos/ReactLogo';


export const About = () => {
  return (
    <div id='about_me' className='about section__padding'>
        <p>About me:</p>
        <p>
            Hi, my name is Hadi Mohammed, I am a Front-end web developer, UI designer and have experience with Back-end development. 
            I have honed my Web Development skills and advanced my understanding of advanced UI design principles. 
            Here are the major skills I have
        </p>
        <div className="experience">
            <p className='years'>1+</p>
            <p className='description'>
                Years of experience. Specialized in building apps, while ensuring a seamless web experience for end users.
            </p>
        </div>
        <div className="cards">
            <SkillBox logo={<ReactLogo />} title={"REACT JS DEVELOPMENT"}/>
            <SkillBox logo={<WebDev />} title={"HTML & CSS DEVELOPMENT"}/>
            <SkillBox logo={<Js />} title={"JAVASCRIPT DEVELOPMENT"}/>
            <SkillBox logo={<Python />} title={"PYTHON DEVELOPMENT"}/>
        </div>
        <div className='cardsSwiper'>
            <Swiper 
                navigation={true}
                modules={[ Navigation, Zoom]}
                zoom={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <SkillBox logo={<WebDev />} title={"UI & UX DESIGNING"} selected={true}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <SkillBox logo={<WebDev />} title={"WEB DEVELOPMENT"} selected={true}/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <SkillBox logo={<Js />} title={"MOBILE DEVELOPMENT"} selected={true}/>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="swiper-zoom-container">
                        <SkillBox logo={<Python />} title={"WEB SCRAPING WITH PYTHON"} selected={true}/> 
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}
