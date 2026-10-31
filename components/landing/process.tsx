"use client";


const processText = [
    {
        "id" : 1,
        "title" : "Planning",
        "description" : "Curating weekly discussion themes, ice-breaker activities, and interactive public speaking games.",
        "color" : "#000",
        "text" : "#fff",
        "img" : ""
    },

    {
        "id" : 2,
        "title" : "Announcement",
        "description" : "Publishing session details, coffee shop locations, and schedules across our social channels.",
        "color" : "yellow",
        "text" : "#000"
    },

    {
        "id" : 3,
        "title" : "Registration",
        "description" : "Gathering attendee sign-ups and organizing optimal group sizes for active participation.",
        "color" : "#fff",
        "text" : "orange"
    },

    {
        "id" : 4,
        "title" : "Facilitation",
        "description" : "Welcoming members, introducing icebreakers, and splitting into friendly conversation groups.",
        "color" : "red",
        "text" : "#fff"
    }
]

const Process = ({ProcessRef}) => {
    return (
        <div ref={ProcessRef} className="flex justify-center pt-20">
            <div className="w-320 pb-20 border-b border-[#000]/20">
                <header className="w-full items-center flex flex-col gap-1">
                    <h3 className="text-orange-400 text-[15px] font-[Recursive]">How we work</h3>
                    <h1 className="text-[25px] font-[Recursive] font-bold">Our Working Process</h1>
                </header>

                <div className="flex justify-center items-center gap-2 flex-wrap mt-10">
                    {
                        processText.map((element, index) => {
                            return (
                                <li
                                key={index}
                                className={`list-none h-80 w-70 rounded-3xl shadow-lg shadow-gray p-3 pt-5 hover:scale-[1.02] transition duration-200 cursor-default ${element.id === 2 || element.id === 4 ? "mt-20" : ""}`}
                                style={{ backgroundColor: element.color, color: element.text }}
                                >
                                    <span 
                                    style={{ backgroundColor: element.text, color: element.color }}
                                    className="font-[Recursive] pl-3 pr-3 text-[13px] pt-1 pb-1 rounded-3xl shadow-lg">0{element.id}</span>

                                    {/* <img src={Image1}/> */}

                                    <h3 className="w-full font-[Valley] text-[17px] font-bold mt-5">{element.title}</h3>
                                    <p className="opacity-[0.8] font-[Valley] text-[13px] mt-32 pt-3 pl-2 pr-2">{element.description}</p>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Process