"use client"

// import { motion } from 'motion/react';

const showCaseImg = [
    {
        "title" : "photo1",
        "rotate" : 170,
        "bg" : "red"
    },

    {
        "title" : "photo2",
        "rotate" : 130,
        "bg" : "white"
    },

    {
        "title" : "photo3",
        "rotate" : 90,
        "bg" : "blue"
    },

    {
        "title" : "photo4",
        "rotate" : 50,
        "bg" : "purple"
    },

    {
        "title" : "photo5",
        "rotate" : 10,
        "bg" : "yellow"
    }
]

import LeaderImport from '../app/connector/view';
import view from '../app/connector/view';
const { ZawYeAung, KaungHlaingHein, PyaePhyuMon } = LeaderImport;
const Cover = [ ZawYeAung, KaungHlaingHein, PyaePhyuMon ];

const Leader = [
    {
        "id" : 1,
        "name" : "Zaw Ye Aung",
        "position" : "Co-Founder & CEO",
        "img" : "ZawYeAung"
    },

    {
        "id" : 2,
        "name" : "Kaung Hlaing Hein",
        "position" : "Young Hub Leader",
        "img" : "KaungHlaingHein"
    },

    {
        "id" : 3,
        "name" : "Pyae Phyu Mon",
        "position" : "Community Educator",
        "img" : "PyaePhyuMon"
    }
]

const AboutSection = ({ AboutRef }) => {
    return (
        <div ref={AboutRef} className="flex flex-col items-center pt-20">
            <div className="w-320">
                <motion.header 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.30, delay: 0.15 }}
                className="flex justify-center flex-col items-center">
                        <span className="border border-[#000]/20 pl-4 pr-4 pt-1 pb-1 rounded-3xl font-[Recursive] text-[11px]">OUR IDENTITY & STORY</span>
                        <h1 className="font-[Recursive] text-[25px] font-bold mt-3">About The Coffee <span className="text-orange-400">Club</span></h1>
                        <p className="text-[13px] font-[Valley] w-150 flex text-center">Empowering English Speakers Across Yangon through warm connections, authentic conversations, and a supportive community.</p>
                </motion.header>

                <div className="mt-20 bg-[#fff] p-10 border-b border-[#000]/20 pb-20 flex justify-center">
                    <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.30, delay: 0.15 }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="w-[50%]">
                        <span className="text-orange-400 font-[Recursive] text-[14px] flex items-center gap-1">Our Mission & Origin</span>
                        <h1 className="text-[30px] font-[Recursive] font-bold w-100 leading-7 mt-10">Building confidence one conversation at a time.</h1>
                        <motion.p 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.30, delay: 0.15 }}
                        className="text-[15px] font-[Valley] text-[#000]/60 mt-5 leading-7 pr-20">The Coffee Club Yangon was founded as a grassroots movement to provide a safe, pressure-free environment for students, young
                            professionals, and enthusiasts to practice English naturally. We believe that true fluency comes from real human interaction
                            over a cup of great coffee.
                        </motion.p>
                        <motion.p 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 1, delay: 0.15 }}
                        className="text-[15px] font-[Valley] text-[#000]/60 mt-5 leading-7 pr-20">
                            From weekly small-group discussions to interactive public speaking workshops, our community helps
                            members break barriers, overcome stage fright, and build lifelong friendships.
                        </motion.p>
                    </motion.section>

                    <section className='w-[50%] flex justify-center items-center relative'>
                        {
                            showCaseImg.map((element, index) => {
                                return (
                                    <motion.li 
                                    initial={{ opacity: 0, rotate: 0 }}
                                    whileInView={{ opacity: 1, rotate: `${element.rotate}deg` }}
                                    transition={{ duration: 1, delay: 0.15 }}
                                    style={{ rotate: `${element.rotate}deg`, background: element.bg }}
                                    key={index} className='w-90 list-none h-60 absolute flex justify-center items-center rounded-xl shadow-lg'></motion.li>
                                )
                            })
                        }
                    </section>
                </div>

                <div className="mt-10 pl-10 pt-20 pb-20 border-b border-[#000]/20 ">
                    <header className="flex flex-col justify-center items-start">
                        <h3 className="font-[Recursive] text-orange-400 text-[14px]">LEADERSHIP</h3>
                        <h1 className="font-[Recursive] font-bold text-[30px]">Behind The Coffee Club Team</h1>
                        <p className="text-[#000]/60 text-[Valley] text-[15px]">Meet the people who are leading the community. Look for how they are.</p>
                    </header>

                    <div className="flex justify-center items-center gap-10 mt-20 pb-20">
                        {
                            Leader.map((people, index) => {
                                return (
                                    <li key={index} className="list-none">
                                        <div 
                                        style={{ backgroundImage: `url(${Cover[index].src})`}}
                                        className={`w-80 h-100 rounded-3xl overflow-hidden bg-cover grayscale hover:grayscale-0 transition duration-200 ${ people.id === 2 ? "mt-20" : " " }`}>                                        </div>

                                        <h3 className="font-[Recursive] text-[20px] font-bold ml-5 mt-5">{people.name}</h3>
                                        <span className="text-orange-400 font-[Valley] text-[13px] ml-5">{people.position}</span>

                                    </li>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="h-[100vh] pl-10 pt-20">
                    <header className="flex flex-col justify-center items-start">
                        <h3 className="font-[Recursive] text-orange-400 text-[14px]">LOCATION</h3>
                        <h1 className="font-[Recursive] font-bold text-[30px]">Meetup Locations</h1>
                        <p className="text-[#000]/60 text-[Valley] text-[15px]">Where we gather across Yangon for our weekly conversation circles.</p>
                    </header>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection