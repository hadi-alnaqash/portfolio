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


export const About = () => {
  return (
    <div id='about_me' className='about section__padding'>
        <p>About me:</p>
        <p>
            Hi, my name is Hadi Mohaammed, i am a Fullstack web developer, UI designer, and Mobile developer. I jhave honed my skills in Web Development and advance i have core understanding of advance UI design principles. 
            Here are the major skiills i have. 
        </p>
        <div className="experience">
            <p className='years'>1+</p>
            <p className='description'>
                Years of experience. Specialised in building apps, while ensuring a seamless
                web experience for end users.
            </p>
        </div>
        <div className="cards">
            <SkillBox logo={<WebDev />} title={"UI & UX DESIGNING"} selected={true}/>
            <SkillBox logo={<WebDev />} title={"WEB DEVELOPMENT"}/>
            <SkillBox logo={<Js />} title={"MOBILE DEVELOPMENT"}/>
            <SkillBox logo={<Python />} title={"WEB SCRAPING WITH PYTHON"}/>
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
