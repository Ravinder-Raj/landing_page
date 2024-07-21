

import appstore from '@/Assets/appstore.png';
import playstore from '@/Assets/playtsore.png';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from 'aos'; // Import AOS


interface ProjectTabProps {
  title: string;
  imageSrc: string;
}

const ProjectTab: React.FC<ProjectTabProps> = ({ title, imageSrc }) => {
  useEffect(() => {
    Aos.init({ duration: 800 }); // Initialize AOS
   
  }, []);


  return (
    <div className="flex justify-between  h-full">
      <div data-aos="slide-right" className="flex flex-col w-1/2">
        {/* Project title */}
        <h1 className="text-4xl font-semibold leading-relaxed">{title}</h1>
        {/* Project description */}
        <p className="text-base mt-8">
          Crafted an innovative rental property management app, seamlessly
          integrating secure login, absence registration, and a tenant notice
          board. Elevating the resident experience with user-friendly design and
          efficient communication channels.
        </p>
        <p className="mt-8 text-gray-400">
          Business analysis <span className="heading-color1">/</span>iOS{" "}
          <span className="heading-color1">/</span>Android{" "}
          <span className="heading-color1">/</span>QA{" "}
          <span className="heading-color1">/</span>UI/UX{" "}
          <span className="heading-color1">/</span>Design
        </p>
        <div className="flex justify-between w-48 mt-8">
          <div className="flex">
            <span className="material-symbols-outlined heading-color1">location_on</span>
            <span>India</span>
          </div>
          <div className="flex">
            <span className="material-symbols-outlined heading-color1">real_estate_agent</span>
            <span>Real Estate</span>
          </div>
        </div>
        <div className="flex justify-between w-64 mt-8 text-gray-400">
          <div className="flex">
            <span>
              <span className="text-3xl font-semibold text-black">400%</span>
              <br />
              User Growth
            </span>
          </div>
          <div className="flex">
            <span>
              <span className="text-3xl font-semibold text-black">+200 000</span>
              <br />
              Active users
            </span>
          </div>
        </div>
        <div className="flex justify-between w-64">
          <img className="w-32 h-24" src={appstore.src} alt="app store" />
          <img className="w-32 h-14 mt-5" src={playstore.src} alt="playstore" />
        </div>
      </div>
      <div data-aos="fade-right" className="col w-1/2 flex justify-center -mt-10  ">
        <img className="w-[30rem] rounded-lg shadow-md  " src={imageSrc} alt="project" />
      </div>
    </div>
  );
};

export default ProjectTab;
