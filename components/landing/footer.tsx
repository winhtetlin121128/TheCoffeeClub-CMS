"use client"

import { useEffect, useState } from 'react';

const QuickLinks = ["Home", "Process", "Events", "About", "Reviews"];
const Others = ["Docs", "Portal", "Careers", "Collab", "Developer"];
const Contact = ["Mandalay, Yangon Myanmar · Subang Jaya Selangor Malaysia · Dubai United Arab Emirates", "+959975562275", "thecoffeeclubsociety@gmail.com"]

const FooterContainer = ({HomeRef, ProcessRef, EventRef, ScrollToSection}) => {

    const [currentYear, setCurrentYear ] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const handleQuickLink = (element) => {
        element === "Home" ? ScrollToSection(HomeRef) : ""
        element === "Process" ? ScrollToSection(ProcessRef) : ""
        element === "Events" ? ScrollToSection(EventRef) : ""

        element === "Portal" ? window.location.href = "/portal/login" : ""
        element === "Docs" ? window.location.href = "/shared/docs" : ""
        element === "Careers" ? window.location.href = "/shared/career" : ""
    }

    return (
        <div className="w-full flex justify-center items-center backdrop-blur-lg bg-[#eeeee5] border-t border-[#000]/20 h-120">
            <footer className="w-320 h-full overflow-hidden">

                {/* Top Container */}
                <div className="w-full h-70 border-b border-[#000]/20 flex">
                    <section className="h-full w-[30%] p-10">
                        <h3 className="font-[Recursive] text-[20px] font-bold">The Coffee <span className="text-orange-400">Club</span></h3>
                        <p className="text-[14px] font-[Valley] text-[#000]/60 mt-5">Bringing people together through meaningful conversations, shared experiences, and opportunities to grow.</p>
                    </section>
                    
                    <section className="w-[70%] flex justify-center items-start pt-10 gap-50">
                        <ul className="flex flex-col gap-2">
                            <h3 className="font-[15px] font-[Recursive] mb-3 font-bold">Quick Links</h3>
                            {
                                QuickLinks.map((element, index) => {
                                    return (
                                        <li onClick={() => handleQuickLink(element)} key={index} className="font-[Valley] text-[#000]/60 text-[13px] cursor-pointer hover:text-orange-400 transition duration-200">
                                            {element}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className="flex flex-col gap-2">
                            <h3 className="font-[15px] font-[Recursive] mb-3 font-bold">Others</h3>
                            {
                                Others.map((element, index) => {
                                    return (
                                        <li onClick={() => handleQuickLink(element)} key={index} className="font-[Valley] text-[#000]/60 text-[13px] hover:text-orange-400 transition duration-200 cursor-pointer">
                                            {element}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className="flex flex-col gap-2 w-60">
                            <h3 className="font-[15px] font-[Recursive] mb-3 font-bold">Connect</h3>
                            {
                                Contact.map((element, index) => {
                                    return (
                                        <li key={index} className={`font-[Valley] text-[#000]/60 text-[13px] hover:text-orange-400 transition duration-200 cursor-pointer ${ element === "+959975562275" || element === "thecoffeeclubsociety@gmail.com" ? "text-orange-400" : "mb-5" }`}>
                                            {element}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>

                {/* Bottom Container */}
                <div className="flex flex-col items-center justify-center h-50 pt-20">
                    <div className="flex justify-center items-center pr-3 w-full">
                        <span className="font-[Valley] text-[13px] w-[30%]">&copy;{currentYear} The Coffee Club. All Rights Reserved.</span>
                        <span className="w-[40%] flex justify-center font-[Valley] text-[13px]">Developed by Win Htet Lin</span>
                        <span 
                        onClick={() => ScrollToSection(HomeRef)}
                        className="text-[13px] font-[Valley] cursor-pointer w-[30%] flex justify-end"><span className="hover:text-[#000]/60 transition duration-200">Scroll To Top</span></span>
                    </div>
                    <h3 className="text-[130px] font-bold">THE COFFEE <span className="text-orange-400">CLUB</span></h3>
                </div>
            </footer>   
        </div>
    )
}

export default FooterContainer