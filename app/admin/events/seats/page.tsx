import Listfooter from '../../../../components/admin/footer';
import Yangontour from '../../../../public/img/yangontour.png';


// example data
const ParticipateMember = [

    {
        "no" : "11",
        "id" : "CC0011",
        "name" : "Khin Aye Thu",
        "email" : "khinayethu@example.com",
        "number" : 959123456789,
        "address" : "Sanchaung",
        "type" : "Regular"
    },

    {
        "no" : "04",
        "id" : "CC0004",
        "name" : "Byanyo",
        "email" : "byanyo@example.com",
        "number" : 959123456789,
        "address" : "Botahtaung",
        "type" : "Regular"
    },

    {
        "no" : "01",
        "id" : "CC0001",
        "name" : "Shun Piti Thwin",
        "email" : "shunpitithwin@example.com",
        "number" : 959123456789,
        "address" : "Htauk Kyaunt",
        "type" : "Regular"
    },

    {
        "no" : "03",
        "id" : "CC0003",
        "name" : "Thoon Nay Toe",
        "email" : "thoonnaytoe@example.com",
        "number" : 959123456789,
        "address" : "Thanlyin",
        "type" : "Regular"
    },

    {
        "no" : "02",
        "id" : "CC0002",
        "name" : "Hsu Wint War Htet",
        "email" : "hsuwintwarhtet@example.com",
        "number" : 959123456789,
        "address" : "East Dagon",
        "type" : "Regular"
    } 
]

let registercount = 120;
let participatecount = ParticipateMember.length;
let totalParticipants = [
    {
        "title" : "Total Registered",
        "count" : registercount,
        "line" : true
    },

    {
        "title" : "Checked In",
        "count" : participatecount,
        "line" : true
    },

    {
        "title" : "Remaining",
        "count" : registercount - participatecount,
    }
];

const AdminSeat = () => {
    return (
        <div className="flex flex-col pb-10">
            <section className="flex justify-center items-start list-none gap-3 mt-3 p-3">
                <div className="flex flex-col gap-3">
                    <div className='flex justify-center items-center gap-3 '>
                        {
                            totalParticipants.map((element, index) => {
                                return (
                                    <li key={index} className="w-50 p-3 h-25 flex flex-col justify-center gap-5 rounded-xl border border-[#000]/20 shadow-lg">
                                            <h3 className="font-[Valley] text-[15px]">{element.title}</h3>
                                            <span className="font-[Valley] text-[13px] text-[#000]/60">{element.count}</span>
                                    </li>
                                )
                            })
                        }
                    </div>

                    {/* Selected Event */}
                    <div className='border border-[#000]/20 h-52 rounded-xl shadow-lg'>
                        <h3 className='flex w-full p-3 font-[Valley] text-[15px]'>Selected Event</h3>

                        <div className=' flex w-full p-3 gap-10'>
                            <div 
                            style={{ backgroundImage: `url(${Yangontour.src})`}}
                            className='w-30 h-30 rounded-md bg-center bg-cover'>
                            
                            </div>

                            <div className='flex flex-col pl-3 mt-3'>
                                <h3 className='font-[Valley] text-[15px]'>Halloween Yangon Tour</h3>
                                <span className='text-[13px] font-[Valley] text-[#000]/60 mt-1'>18 Oct 2026 : 01:30 - 05:00</span>
                                <span className='text-[13px] font-[Valley] text-[#000]/60 mt-2'>VENUE</span>
                                <p className='text-[13px] font-[Valley] text-[#000]/60'>M Tower, 4th floor, Kamaryut ( Hleden ), Yangon, Myanmar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border w-100 h-80 rounded-xl border-[#000]/20 flex justify-start p-3 items-start shadow-lg">
                    <header className="flex w-full items-center gap-3">
                        <div className="w-10 h-10 border border-[#000]/20 rounded-md" />
                        <div className="flex flex-col">
                            <h3 className="font-[Valley] text-[15px]">Barcode Scanner</h3>
                            <span className="text-[12px] font-[Valley] text-[#000]/60">Scan participant QR code to mark attendance.</span>
                        </div>
                    </header>

                    <div>

                    </div>
                </div>
            </section>

            <section className='flex p-3'>
                <div className='w-full border border-[#000]/20 rounded-xl overflow-hidden mb-20'>
                    <header className='border-b border-[#000]/20 h-13'></header>

                    <div className='flex flex-col'>
                        {
                            ParticipateMember.slice(0, 30).map((element, index) => {
                                return(
                                    <li key={index} className='flex items-center p-3 text-[13px] text-[#000]  h-15 border-b border-[#000]/20'>
                                        <span className='w-[5%]'>{index < 9 ? `0${index + 1}` : index + 1 }</span>
                                        <span className='w-[10%]'>{element.id}</span>
                                        <span className='w-[15%]'>{element.name}</span>
                                        <span className='w-[25%]'>{element.email}</span>
                                        <span className='w-[13%]'>{element.number}</span>                                
                                        <span className='w-[15%]'>{element.address}</span>
                                        <span className='w-[7.5%]'>{element.type}</span>
                                    </li>
                                )
                            })
                        }
                    </div>

                    <Listfooter />
                </div>
            </section>
        </div>
    )
}

export default AdminSeat