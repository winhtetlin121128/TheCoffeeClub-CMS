"use client"

import { useRouter } from "next/navigation";
import  Link  from 'next/link';
import { useState } from 'react';
import { string } from "@prisma/composer";

const MenuTag = [
    {
        "title" : "Report",
        "tag" : ["Dashboard"]
    },

    {
        "title" : "Management",
        "tag" : ["Event", "Review", "Student", "Partner", "Card"]
    },

    {
        "title" : "Account",
        "tag" : ["Role", "Setting"]
    }
]

const sideBar = () => {
    
    const router = useRouter();

    const handleelement = (tag : string) => {

       activeOrNot(tag)

       const routes: Record<string, string> = {
        Dashboard: "/admin",
        Event: "/admin/events",
        Review: "/admin/reviews",
        Student: "/admin/students",
        Partner: "/admin/partner",
        Card: "/admin/card"
       }


       const path = routes[tag];
       if(path) {
        router.push(path);
       }
    }

    const [active, setActive] = useState("Dashboard");

    const activeOrNot = (tag : string) => {
        setActive(tag)
    }

    return (
        <section className="h-screen w-[20%] bg-[#141d28] flex flex-col">
            <header className="w-full h-16 text-[#fff] flex flex-col items-center justify-center border-b border-[#fff]/20">
                <h3 className="font-[Recursive] text-[15px]">The Coffee <span className="text-orange-400">Club</span></h3>
                <span className="text-[12px] font-[Valley]">C M S</span>
            </header>

            <div className="menu-tag-admin flex w-full h-full flex-col overflow-y-auto pt-4 pb-10">
                {
                    MenuTag.map((element, index) => {
                        return (
                            <div key={index} className="gap-3 flex flex-col pr-3 pl-3">
                                <h3 className="font-[Recursive] text-[14px] text-gray-400 -ml-1">{element.title}</h3>
                                <ul className="flex flex-col mb-5 gap-1">
                                    {
                                        element.tag.map((tag, index) => {
                                            return (
                                                <li 
                                                onClick={() => handleelement(tag)}
                                                key={index} 
                                                className={`font-[Valley] w-full text-[#fff] text-[12px] hover:bg-[#253251] hover:text-[#fff] h-12 rounded-sm transition duration-200 flex items-center pl-3 cursor-pointer ${ active === tag ? "bg-[#253251]" : ""}`}>
                                                    {tag}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }

                <div className="w-full flex justify-end items-center p-3 flex flex-col gap-2">
                    <div className="border border-[#fff]/20 w-full h-20 rounded-xl backdrop-blur-lg p-2 flex flex-col justify-center items-start">
                        <div className="flex justify-start gap-3">
                            <div className="h-10 w-10 rounded-3xl text-[#fff] flex justify-center items-center shadow-lg bg-[#000]/20">W</div>

                            <div className="flex flex-col items-start gap-1">
                                <h3 className="text-[12px] font-[Valley] text-[#fff]">Win Htet Lin</h3>
                                <span className="text-[11px] font-[Valley] text-[#fff]">yaungaung376@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <Link href="/" className="text-[#fff] bg-red-600 w-full pt-2 pb-2 flex justify-center rounded-md text-[13px] font-[Valley]">Signout</Link>
                </div>
            </div>
        </section>
    )
}

export default sideBar