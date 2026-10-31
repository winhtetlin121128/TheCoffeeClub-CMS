
import Link from 'next/link'

const menu = [
    {
        "title" : "Book",
        "span" : ["Kid", "Teenager", "Guy"]

    },

    {
        "title" : "Pathway",
        "span" : ["Schoolarship", "GED", "English"]
    },

    {
        "title" : "Language",
        "span" : ["General", "Business", "Work"]
    }
]

export default function Dropdown({setModal}) {
    return (
        <div className="h-40 absolute w-full flex justify-center items-center top-18">
            <div className="h-full border border-[#000]/20 bg-[#fff] rounded-xl w-110 flex p-5 pr-7">
                {
                    menu.map((element, index) => {
                        return (
                            <li key={index} className="w-[30%] w-full list-none flex flex-col items-start pl-10">
                                <h3 className="font-[Valley] text-[13px] text-[#000]/80 underline underline-offset-7 underline-[#000]/20">{element.title}</h3>

                                <ul className="flex flex-col font-[Valley] items-start mt-5 text-[#000]/60 text-[13px] gap-1">
                                    {
                                        element.span.map((element, index) => {
                                            return (
                                                <Link key={index} href="/docs" onClick={() => setModal(false)} className="flex cursor-default hover:text-purple-600 transition duration-100">{element}</Link>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}