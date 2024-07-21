"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import FormCard from "@/CardComponent/Page"; // Correctly import the FormCard component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from "@/Assets/logo.png";
import ProjectTab from "@/ProjectTabComponent/page";
import projectimg1 from "@/Assets/projectimg1.jpg";
import projectimg2 from "@/Assets/projectimg2.jpg";
import SmallCard from "@/SmallCard/page";
import phone from "@/Assets/phone.png";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import AccordionComponent from "@/Accordion/page";
import hero from "@/Assets/heroimg.jpg";

const categories = [
  { name: "Social Media", icon: "public" },
  { name: "Fitness and Sport", icon: "fitness_center" },
  { name: "Bank", icon: "account_balance" },
  { name: "Construction", icon: "construction" },
  { name: "Game Projects", icon: "videogame_asset" },
  { name: "Education", icon: "school" },
  { name: "Auto, Transport", icon: "directions_car" },
  { name: "Medicine, Health", icon: "local_hospital" },
  { name: "Restaurants, Food Delivery", icon: "restaurant" },
  { name: "Marketplaces", icon: "store" },
  { name: "AR Technology", icon: "camera_alt" },
  { name: "TV Series", icon: "tv" },
  { name: "Startups", icon: "business" },
  { name: "Religion", icon: "church" },
  { name: "Online Courses", icon: "school" },
];

const projects = [
  { title: "Project 1", imageSrc: projectimg1.src },
  { title: "Project 2", imageSrc: projectimg2.src },
  { title: "Project 3", imageSrc: projectimg1.src },
  { title: "Project 4", imageSrc: projectimg2.src },
];

const cardData = [
  {
    icon: "analytics",
    title: "Analysis",
    description:
      "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    icon: "draw",
    title: "Design",
    description:
      "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
  },
  {
    icon: "developer_mode",
    title: "Development",
    description:
      "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
  },
  {
    icon: "bug_report",
    title: "Testing",
    description:
      "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
  },
  {
    icon: "rocket_launch",
    title: "Launching",
    description:
      "We design the application page and publish it in the App Store and Google Play stores.",
  },
  {
    icon: "contact_support",
    title: "Support",
    description:
      "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
  },
];

const accordionItems1 = [
  {
    title: "Accordion 1",
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        maiores deserunt. Obcaecati necessitatibus, omnis ut tempora iure sed
        illo facilis.
      </p>
    ),
  },
  {
    title: "Accordion 2",
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        maiores deserunt. Obcaecati necessitatibus, omnis ut tempora iure sed
        illo facilis.
      </p>
    ),
  },
];

const accordionItems2 = [
  {
    title: "Accordion 3",
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        maiores deserunt. Obcaecati necessitatibus, omnis ut tempora iure sed
        illo facilis.
      </p>
    ),
  },
  {
    title: "Accordion 4",
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        maiores deserunt. Obcaecati necessitatibus, omnis ut tempora iure sed
        illo facilis.
      </p>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="w-full h-full bg-section1 flex justify-center pt-5">
        <Menubar className="w-11/12 h-16 px-5 bg-navbar text-black flex justify-between items-center fixed border-none shadow-md z-50">
          <div className="flex items-center w-40">
            <img className="w-10" src={logo.src} alt="Logo" />
            <h1 className="ml-2">Company Name</h1>
          </div>
          <div className="flex space-x-4">
            <MenubarMenu>
              <MenubarTrigger>Services</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Media</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Cases</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>FAQ</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact</MenubarTrigger>
            </MenubarMenu>
          </div>
          <div className="flex space-x-10 heading-color2">
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined">phone_iphone</span>
              <h1>+91 58655595559</h1>
            </div>
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined">mail</span>
              <h1>Sample@sample.com</h1>
            </div>
          </div>
        </Menubar>
      </div>
      <div className="h-screen bg-section1 flex justify-between ">
        <div className=" w-1/2 text-5xl">
          <h1 className="float-right  mt-36">
            <span className="text-black heading-color1">
              <b>User-Centric Excellence:</b>
            </span>
            <span className="text-black">Our</span>
            <span className="text-black">
              <br />
              <b>App Development services</b>
            </span>
            <br />
            <span className="text-black">Tackles Your Pain Points</span>
          </h1>
          <h2 className="text-black text-lg  items-center ml-20 mt-80">
            Experience a Seamless Digital Journey with{" "}
            <span className="heading-color2">
              <b>Desun</b>
            </span>{" "}
            - Where Every Line <br /> Desun - of Code Resolves Your Challenges
            and{" "}
            <span className="heading-color1">
              <b>Elevates Your App</b>
            </span>{" "}
            Experience <br /> to Unparalleled Heights.
          </h2>
          <div className="flex justify-center">
            <FormCard
              cardTitle="Leave your contacts and we will call you back within 30 minutes"
              height="20rem"
            />
          </div>
        </div>
        <div className="ml-20 w-1/2 ">
          <img className="" src={hero.src} alt="" />
        </div>
      </div>

      <div className="bg-navbar w-full h-screen pt-10 ">
        <hr />
        <div>
          <ul className="flex justify-around py-10 ">
            <li>
              {" "}
              <img className="w-24" src={logo.src} alt="" />{" "}
            </li>
            <li>
              <img className="w-24" src={logo.src} alt="" />
            </li>
            <li>
              <img className="w-24" src={logo.src} alt="" />
            </li>
            <li>
              <img className="w-24" src={logo.src} alt="" />
            </li>
            <li>
              <img className="w-24" src={logo.src} alt="" />
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex  justify-around mt-10">
          <div className="w-[40rem] h-[30rem] ">
            {" "}
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="border-none">
                <CardTitle className="text-3xl font-bold text-black">
                  Full Development Cycle
                </CardTitle>
              </CardHeader>
              <CardContent className="border-none">
                <div className="text-xl">
                  <p className="mb-4">We use proven technologies</p>
                  <div className="mb-4">
                    <p className="font-semibold text-black">Web</p>
                    <p className="text-gray-600">
                      PHP / Javascript / Node.JS / Web Socket / Socket.io /
                      Vue.js
                    </p>
                    <p className="text-gray-600">
                      Nuxt / MySQL / Laravel / GO lang / Django / Python
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Mobile</p>
                    <p className="text-gray-600">
                      Swift / Kotlin / Alamofire / Firebase / CoreData / Room /
                      Realm
                    </p>
                    <p className="text-gray-600">
                      Coroutine / RxJava / RxSwift / Unit Test / Navigation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-[40rem] h-[30rem] ">
            {" "}
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="border-none">
                {/* <CardTitle className="text-lg font-bold">
            Our Services
          </CardTitle> */}
              </CardHeader>
              <CardContent className="border-none ">
                <div className=" text-lg text-black ">
                  {[
                    "iOS Development",
                    "Android Development",
                    "Web Development",
                    "UI/UX Design",
                    "Testing",
                    "Launch",
                    "IT Consulting",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-48 mb-2 cursor-pointer hover:underline hover:font-bold"
                    >
                      <p>{service}</p>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-[40rem]  flex justify-center bg-section1 text-black">
        <div className="flex flex-col h-[40rem] w-5/6 mt-10 ">
          <div className=" flex  w-full">
            <h1 className="text-4xl  leading-relaxed">
              <b>
                Developed more than <span className="heading-color2">100</span>{" "}
                <br />
                projects in <span className="heading-color2">15</span>{" "}
                industries
              </b>
            </h1>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-5 text-xl font-semibold space-y-5">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center space-x-2 ">
                <span className="material-symbols-outlined icons2 border border-white rounded-full w-10 h-10  p-2 bg-white shadow-md ">
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[48rem]  flex justify-center bg-section1 text-black ">
        <div className="w-11/12">
          <div className=" flex flex-col w-full mt-10">
            <h1 className="text-4xl  leading-relaxed">
              <b>Projects we are proud of</b>
            </h1>
            <h2 className="mt-5">
              Our software development company is truly proud of the wonderful
              clients we have <br /> worked with. We enjoy a long-term
              partnership
            </h2>
          </div>
          <div className="-mt-10">
            <div className="flex space-x-4 mb-4 mt-16 border-gray-300 ">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 text-base ${
                    activeTab === index
                      ? "border-b-2 font-semibold border-customYellow text-customYellow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {project.title}
                </button>
              ))}
            </div>
            <div className="mt-5">
              <ProjectTab
                title={projects[activeTab].title}
                imageSrc={projects[activeTab].imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-72 bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-400">
        <div className="flex justify-between ">
          <div className="w-1/2 h-72  flex flex-col justify-center ">
            <div className=" ml-36 leading-loose space-y-4">
              <h1 className="text-4xl font-semibold">
                Let discuss <br /> Your project
              </h1>
              <p className="text-base">
                Let figure out how to create an effective application,
                <br /> its cost and terms of its development
              </p>
            </div>
          </div>
          <div className="mt-16 mr-10 ">
            <FormCard height="12rem" />
          </div>
        </div>
      </div>
      <div className="h-[50rem] flex justify-center bg-navbar">
        <div className="w-11/12  h-screen">
          <h1 className="text-4xl font-semibold text-black pt-10 pl-5">
            Application Development Stages
          </h1>

          <div className="flex justify-between mt-20">
            <div className="flex flex-col space-y-6">
              {cardData.slice(0, 3).map((card, index) => (
                <SmallCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            <div>
              <img src={phone.src} alt="" />
            </div>
            <div className="flex flex-col space-y-6">
              {cardData.slice(3).map((card, index) => (
                <SmallCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40rem] bg-section1 px-20 flex ">
        <div className="w-1/2 flex flex-col text-black  pt-36 space-y-8 ">
          <h1 className="text-4xl font-bold">Our team</h1>
          <p className="text-base font-normal">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="text-gray-500 flex space-x-10">
            <span className="text-gray-500">
              <span className=" text-black text-4xl font-bold">28</span>
              <br />
              team member
            </span>
            <span className="text-gray-500">
              <span className=" text-black text-4xl font-bold">+100</span>{" "}
              <br />
              projects
            </span>
            <span className="text-gray-500">
              <span className=" text-black text-4xl font-bold">7 years</span>
              <br />
              in IT sphere
            </span>
          </div>
          <p className="text-base font-normal">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It
            expensive but worth it
          </p>
        </div>
        <div className="1/2">
          <img
            className="w-[40rem] mt-24 rounded-lg shadow-lg "
            src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="h-[60rem] bg-navbar ">
        <h1 className=" font-bold text-4xl text-black px-20 pt-20 ml-14 ">FAQ</h1>
        <div className="flex justify-between px-36 pt-16  ">
          <div className="w-[35rem]">
            {" "}
            <AccordionComponent items={accordionItems1} />
          </div>
          <div className="w-[35rem]">
            {" "}
            <AccordionComponent items={accordionItems2} />
          </div>
        </div>
      </div>
      <div className="w-11/12 h-80 bg-footer  flex flex-col m-auto -mt-[22rem] justify-center rounded-xl ">
        <span className="flex justify-center mt-10 ">
          <img className="w-20 h-20 " src={logo.src} alt="" />
          <h1 className="mt-6  text-2xl font-bold">Company logo</h1>
        </span>
        <div className="flex mt-5 justify-between  w-full h-20 px-20">
          <ul>
            <li className="flex space-x-4">
              <span className="material-symbols-outlined flex icon4">
                phone_iphone{" "}
              </span>
              <h1 className="text-sm">Contact number</h1>
            </li>
            <li className="ml-0">
              <h1>65654654654</h1>
            </li>
          </ul>
          <ul>
            <li className="flex space-x-4">
              <span className="material-symbols-outlined flex icon4">
                mail{" "}
              </span>
              <h1 className="text-sm">Gmail</h1>
            </li>
            <li className="ml-0">
              <h1>sample@sample.com</h1>
            </li>
          </ul>
          <ul>
            <li className="flex space-x-4">
              <span className="material-symbols-outlined flex icon4">
                home{" "}
              </span>
              <h1 className="text-sm">Address</h1>
            </li>
            <li className="ml-0">
              <h1>Mumbai , India</h1>
            </li>
          </ul>
          <ul>
            <li className="flex space-x-4">
              <span className="material-symbols-outlined flex icon4">
                request_page{" "}
              </span>
              <h1 className="text-sm">Leave a request</h1>
            </li>
            <li className="ml-0">
              <h1>Leave a request</h1>
            </li>
          </ul>
        </div>
        <div className="text-center">
          {" "}
          <p>We work through the world</p>
        </div>
      </div>
    </>
  );
}
