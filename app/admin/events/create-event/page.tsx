"use client"

export default function CreateEvent() {

    const handleAlarm = () => {
        alert("Created Event")
        window.location.href = "/admin/events"  
    }

    return (
        <div className="w-full h-[100%] pb-20">
            <header className="w-full flex justify-start items-center h-15 pl-3">
                <h3 className="font-[Recursive] text-[20px]">Add New Event</h3>
            </header>

            <div className="flex justify-center items-start p-3 gap-3 pb-20">
                <section className="flex flex-col border border-[#000]/20 w-[55%] rounded-xl h-full p-5">
                    <h3 className="w-full flex justify-start font-[Valley] text-[15px]">Event title</h3>
                    <input type="text" placeholder="e.g. Workshop, Meetup" className="border border-[#000]/20 h-13 rounded-xl mt-3 text-[13px] font-[Valley] pl-3"/>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-5">Description</h3>
                    <textarea placeholder="Write a detailed description about the event . . . " className="mt-3 rounded-xl border border-[#000]/20 h-60 resize-none text-[13px] font-[Valley] p-3"></textarea>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-5">Date & Time</h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                        <input type="date" className="border border-[#000]/20 text-[13px] h-13 w-[100%] pl-3 pr-3 rounded-xl text-[#000]/60"/>
                        <div className="w-full flex gap-3">
                            <input type="time" className="border border-[#000]/20 text-[13px] h-13 w-[50%] pl-3 pr-3 rounded-xl text-[#000]/60"/>
                            <input type="time" className="border border-[#000]/20 text-[13px] h-13 w-[50%] pl-3 pr-3 rounded-xl text-[#000]/60"/>
                        </div>
                    </div>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-5">Location</h3>
                    <input type="text" placeholder="e.g. Coffee Club, Yangon" className="border border-[#000]/20 h-13 rounded-xl mt-3 text-[13px] font-[Valley] pl-3"/>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-5">Category</h3>
                    <div className="flex justify-start items-center w-full list-none gap-5 mt-3 font-[Valley] text-[13px]">
                        <li className="flex gap-1">
                            <input type="checkbox"/>
                            <span>Meetup</span>
                        </li>
                        <li className="flex gap-1">
                            <input type="checkbox" />
                            <span>Traning</span>
                        </li>
                        <li className="flex gap-1">
                            <input type="checkbox" />
                            <span>Event</span>
                        </li>
                    </div>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-7">Type of event</h3>
                    <div className="list-none flex justify-start items-center gap-3 mt-5 text-[13px]">
                        <li className="flex gap-1">
                            <input type="checkbox" />
                            <span>Public</span>
                        </li>
                        <li className="flex gap-1">
                            <input type="checkbox" />
                            <span>Private</span>
                        </li>
                    </div>

                    <h3 className="w-full flex justify-start font-[Valley] text-[15px] mt-7 flex gap-2">Capacity <span className="text-[#000]/60 text-[13px]">( optional )</span></h3>
                    <input type="text" placeholder="e.g. 100" className="border border-[#000]/20 h-13 rounded-xl mt-3 text-[13px] font-[Valley] pl-3"/>

                </section>
                <section className="w-[45%] h-full rounded-xl gap-3 flex flex-col">
                    <div className="border border-[#000]/20 pt-5 pb-5 flex flex-col p-3 justify-start rounded-xl">
                        <header>
                            <h3 className="font-[Recursive] text-[15px]">Event Image</h3>
                            <span className="font-[Valley]  text-[13px] text-[#000]/60">Event a cover image for your event. Recommend size 1200 x 630 px</span>
                        </header>

                        <div className="border border-[#000]/20 mt-10 rounded-xl h-40 flex flex-col justify-center items-center">
                            <h3 className="text-[15px] font-[Recursive]"><span className="cursor-pointer hover:text-blue-600 mr-1">Click</span>to upload and drag and drop</h3>
                            <span className="text-[13px] font-[Valley] text-[#000]/60">PNG, JPG, JPEG ( MAX 1MB )</span>
                        </div>
                    </div>

                    <div className="border border-[#000]/20 rounded-xl h-69">
                        <header className="flex flex-col p-3 pt-5">
                            <h3 className="text-[15px] font-[Recursive]">Event Gallery</h3>
                            <span className="font-[Valley] text-[13px] text-[#000]/60">Add multiple images for your event gallery</span>
                        </header>
                    </div>

                    <div className="border border-[#000]/20 rounded-xl h-97.5 p-3 pt-5 flex flex-col justify-between">
                        <header className="flex justify-start items-center">
                            <h3 className="font-[Recursive] text-[15px]">Additional Information <span className="text-[#000]/60 text-[13px]">( optional )</span> </h3>
                        </header>

                        <button onClick={() => handleAlarm()} className="bg-orange-400 text-[#fff] w-full rounded-md pt-2 pb-2 font-[Valley] text-[13px] cursor-pointer">Create Event</button>
                    </div>
                </section>
            </div>
        </div>
    )
}