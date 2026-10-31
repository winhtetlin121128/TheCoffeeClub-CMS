import Listfooter from '../../../components/admin/footer';
import SearchIcon from '../../../public/img/search.png';

const SelectOption = [
    {
        "id" : 1,
        "title" : "All Partner",
    },

    {
        "id" : 2,
        "title" : "Cafe",
    },

    {
        "id" : 3,
        "title" : "Education"
    },

    {
        "id" : 4,
        "title" : "Community"
    }
]

const ExampleData = [
    {
        "title" : "Tr Moe",
        "type" : "Education",
        "website" : "trmoremilesstone.com.mm"
    },

    {
        "title" : "Uab Pay",
        "type" : "Banking",
        "website" : "uabpay.com.mm"
    },

    {
        "title" : "Gusto College",
        "type" : "Education",
        "website" : "gustoacdemy.com"
    },

    {
        "title" : "Chrono Cafe",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "Here Cafe",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "Capulus Cafe",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "La Bonanza Cafe",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "Castella Bakery & Cafe",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "What's Up Cafe 66A",
        "type" : "Cafe",
        "website" : ""
    },

    {
        "title" : "AIHM",
        "type" : "Education",
        "website" : "aihm.9miles.com.mm"
    },

    {
        "title" : "Practical English Club",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "TWM",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "HYPE THINK Education Academy",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "PRIMEICON",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "MELLISA",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "BurmaX Academy",
        "type" : "Education",
        "website" : "burmaxacademy.app"
    },

    {
        "title" : "CITTA",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "AU MIT College",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "Thymes Education",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "READER PARADISE",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "AMERICAN CENTER YANGON",
        "type" : "Education",
        "website" : "americancenter.com.mm"
    },

    {
        "title" : "DOHEAIN",
        "type" : "Community",
        "website" : ""
    },
    
    {
        "title" : "စကားသံ",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "IELTS In a Nutshell",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "SYK",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "Youth Space",
        "type" : "Community",
        "website" : ""
    },

    {
        "title" : "PH International",
        "type" : "Education",
        "website" : ""
    },

    {
        "title" : "LUXE Cafe",
        "type" : "Cafe",
        "website" : ""
    }
]

const AdminPartner = () => {
    return (
        <div className="w-full flex flex-col pt-5 pb-20">
            <header className="w-full flex items-start justify-between pl-3 pr-3 h-20">
                <div className="w-90 flex flex-col gap-1">
                    <h3 className="font-[Recursive] font-bold text-[20px]">Our <span className="text-orange-400">Partners</span></h3>
                    <p className="font-[Valley] text-[13px] text-[#000]/60">We are greatful for the support of our amazing partners who help make The Coffee Club possible.</p>
                </div>

                <button className="pl-4 pr-4 pt-1 pb-1 bg-orange-400 text-[#fff] font-[Valley] text-[13px] rounded-md flex items-center gap-2 cursor-pointer active:scale-[0.9] transition duration-200"><span className="text-[15px] font-bold">+</span> Connect Partner</button>
            </header>

            <main className='p-3'>
                <div className='rounded-xl overflow-hidden'>
                    <header className='h-13 flex items-center pl-3 gap-3'>
                        <div className='relative flex items-center'>
                            <img src={SearchIcon.src} className='w-4 absolute left-2'/>
                            <input type="search" placeholder='Search partner by name, location...' className='text-[13px] font-[Valley] border border-[#000]/20 w-70 pl-7 pr-3 h-10 rounded-md'/>
                        </div>

                        <select className='border border-[#000]/20 h-10 rounded-md text-[13px] font-[Valley] text-[#000]/60 pl-2 pr-2'>
                            {
                                SelectOption.map((element, index) => {
                                    return (
                                        <option key={index} className=''>{element.title}</option>
                                    )
                                })
                            }
                        </select>
                    </header>
                    <div className='justify-center pt-10 pb-10 flex flex-wrap gap-3'>
                        {
                            ExampleData.slice(0, 20).map((element, index) => {
                                return (
                                    <li key={index} className='list-none shadow-lg border border-[#000]/20 w-130 h-60 rounded-xl flex justify-center items-center p-3'>
                                        <section className='w-[20%] h-full flex justify-center pt-5'>
                                            <div className='w-15 h-15 border border-[#000]/20 rounded-[50%]'></div>
                                        </section>
                                        <section className='w-[80%] items-start h-full flex flex-col pl-10 pt-5'>
                                            <h3 className='font-[Recursive] font-bold w-full text-[#000]/80'>{element.title}</h3>
                                            <span className='text-[12px] font-[Valley] border border-white pl-3 pr-4 pt-0.5 pb-0.5 mt-2 bg-[#fbf1e4] text-[#785e49] rounded-xl'>{element.type}</span>
                                            <div className='h-20'></div>
                                            
                                            <div className='flex gap-1'>
                                                <span className='text-[13px]'>{element.website ? "🌐" : ""}</span>
                                                <span className='text-[#000]/60 font-[Valley] text-[13px] flex items-center gap-2 underline underline-offset-6 underline-[#000]/20 cursor-default hover:text-blue-600 transition duration-100'>{element.website ? element.website : ""}</span>
                                            </div>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </div>
                    
                    <div className='w-full flex justify-center items-center'>
                            <button className='border border-[#000]/20 pt-1 pb-1 pl-3 pr-3 text-[13px] font-[Valley] rounded-3xl hover:bg-[#000] hover:text-[#fff] transition duration-200'>Show More</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminPartner