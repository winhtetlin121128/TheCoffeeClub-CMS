
export default function Listbottom() {
    return (
        <footer className="w-full h-13 flex justify-between pl-3 pr-3 ">
            <div className="h-full flex items-center gap-1 text-[13px] font-[Valley]">
                <button className="pl-4 pr-4 pt-0.5 pb-0.5 border border-[#000]/20 rounded-3xl hover:bg-[#000] hover:text-[#fff] transition duration-200">Next</button>
                <button className="pl-4 pr-4 pt-0.5 pb-0.5 border border-[#000]/20 rounded-3xl hover:bg-[#000] hover:text-[#fff] transition duration-200">Previous</button>
            </div>
        </footer>
    )
}