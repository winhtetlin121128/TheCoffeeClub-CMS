"use client"

const MenuTags = ["Home", "Process", "Events", "About", "Reviews", "Docs"];
import { useRef, useState } from 'react';
import Link from 'next/link';
import { tag } from 'alchemy/Schema';

import Dropdownmodal from './dropdown/dropdown';
import Dropdown from './dropdown/dropdown';

const Navbar = ({ScrollToSection, HomeRef, ProcessRef, EventRef}) => {

    const [active, setActive] = useState("Home");
    const [modal, setModal] = useState(false);

    const handleFunction = (Tag : string) => {
        setActive(Tag);

        Tag === "Home" ? ScrollToSection(HomeRef) : "";
        Tag === "Process" ? ScrollToSection(ProcessRef) : "";
        Tag === "Events" ? ScrollToSection(EventRef) : "";

        Tag === "Docs" ? setModal(true) : setModal(false)
    }

    return (
        <div className="flex flex-col items-center border-b border-[#000]/20 backdrop-blur-lg sticky z-50 top-0">
            <nav className="w-320 h-17 flex justify-between items-center">
                
                {/* Logo  */}
                <div>
                    <h3 className="font-[Recursive] font-bold text-[20px]">The Coffee <span className="text-orange-400">Club</span></h3>
                </div>

                {/* MenuTags */}
                <div className="flex gap-1">
                    {
                        MenuTags.map((Tag, index) => {
                            return (
                                <li 
                                key={index}
                                onClick={() => handleFunction(Tag)}
                                className={`list-none pl-3 pr-3 pt-1 pb-1 font-[Valley] text-[13px] cursor-pointer rounded-3xl hover:bg-purple-100 hover:text-purple-600 transition duration-200 ${active === Tag ? "bg-purple-100 text-purple-600" : ""}`}>
                                    {Tag}
                                </li>
                            )
                        })
                    }
                </div>

                {/* ActionKeys */}
                <div className="flex justify-center items-center font-[Valley] text-[12px] gap-2">
                    <button className="pl-4 pr-4 pt-1 pb-1 bg-[#000] text-[#fff] rounded-3xl cursor-pointer active:scale-[0.9] transition duration-200">Join Event</button>
                    <Link href="/auth/login" className="pl-4 pr-4 pt-1 pb-1 border border-[#000]/20 text-[#000] rounded-3xl cursor-pointer active:scale-[0.9] transition duration-200">Login</Link>
                </div>
            </nav>

            {
                modal === true && (
                    <Dropdownmodal />
                )
            }
        </div>
    )
}

export default Navbar