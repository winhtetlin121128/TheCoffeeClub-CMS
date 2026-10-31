"use client";

const Events = ({EventRef}) => {
    return (
        <div ref={EventRef} className="h-[100%] pt-20 flex flex-col items-center">
            <div className="w-320 h-[100vh] border-b border-[#000]/20">
                <header className="flex flex-col justify-center items-start gap-1">
                    <h3 className="font-[Recursive] font-bold text-[17px]">NEXT UP</h3>
                    <span className="font-[Valley] text-[13px]">Our nearest upcoming meetup — save the date.</span>
                </header>

                <main className="flex justify-center items-center h-100">
                    <h3 className="text-[13px]">On Developing</h3>
                </main>
            </div>

            <div className="w-320 h-[100vh] pt-20 border-b border-[#000]/20">
                <header className="flex flex-col justify-center items-start gap-1">
                    <h3 className="font-[Recursive] font-bold text-[17px]">RECENT</h3>
                    <span className="font-[Valley] text-[13px]">Saved events as a memories — check anytime.</span>
                </header>

                <main className="flex justify-center items-center h-100">
                    <h3 className="text-[13px]">On Developing</h3>
                </main>
            </div>
        </div>
    )
}

export default Events