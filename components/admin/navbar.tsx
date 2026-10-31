
const Navbar = () => {
    return (
        <nav className="w-full border-b border-[#000]/20 h-15 flex justify-between items-center pr-5 shrink-0">
            <h3 className="font-[Recursive] h-full flex justify-center items-center w-30"></h3>

            <div className="flex items-center justify-center gap-3">
                <div className="flex flex-col items-end font-[Valley]">
                    <h3 className="text-[15px] font-[Valley]">Win Htet Lin</h3>
                    <span className="text-[13px]">Super Admin</span>
                </div>
                <div className="w-10 h-10 bg-orange-400 shadow-orange-400 shadow-lg rounded-xl flex justify-center items-center text-[#fff]">W</div>
            </div>
        </nav>
    )
}

export default Navbar