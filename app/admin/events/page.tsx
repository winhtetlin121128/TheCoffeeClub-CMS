

import Listbottom from '../../../components/admin/footer';
import Link from 'next/link';
import Blankbox from '../../../public/img/box.png';

const eventHeader = ["Event", "Date", "Venue", "Status", "Action"];


const AdminEvents = () => {
    return (
        <div className="flex flex-col overflow-y-auto">
            <div className="">
                <header className="h-15 flex justify-between items-center pl-3 pr-3">
                    <div>
                        
                    </div>

                    <div className='h-full flex justify-center items-center'>
                        <Link href="/admin/events/create-event" className="bg-orange-400 text-[#fff] pl-3 pr-3 h-8 font-[Valley] text-[13px] rounded-md cursor-pointer active:scale-[0.9] transition duration-200 flex justify-center items-center">+ Add Event</Link>
                    </div>
                </header>

                <div className="p-3 pb-20">
                    <div className="border border-[#000]/20 rounded-[10px] overflow-hidden flex flex-col justify-between">
                        <header className="w-full h-13 flex justify-between border-b border-[#000]/20 rounded-t-[10px] items-center pl-3 pr-35 text-[#000]/80 font-[Valley] text-[13px]">
                            {
                                eventHeader.map((element, index) => {
                                    return (
                                        <li key={index}
                                        className="list-none"
                                        >
                                            {element}
                                        </li>
                                    )
                                })
                            }
                        </header>

                        {/* Main List Container */}
                        <div className='flex flex-col border-b border-[#000]/20'>
                            <div className='w-full flex flex-col justify-center items-center pt-10 pb-10 font-[Valley]'>
                                <img src={Blankbox.src} className='w-10'/>

                                <p className='text-[15px] mt-5'>Empty in the event</p>
                                <span className='text-[13px] text-[#000]/60'>Start create a event or draft a event</span>
                            </div>
                        </div>

                        <Listbottom />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEvents