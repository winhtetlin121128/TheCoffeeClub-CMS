"use client";

import { optional } from 'alchemy/Schema';
import Listfooter from '../../../components/admin/footer';
import { filter } from 'alchemy/Output';

const Headertag = [
    {
        "title" : "No",
        "width" : 5
    },

    {
        "title" : "Id",
        "width" : 10
    },

    {
        "title" : "Name",
        "width" : 15
    },

    {
        "title" : "Email",
        "width" : 25
    },

    {
        "title" : "Number",
        "width" : 13
    },

    {
        "title" : "Address",
        "width" : 15
    },

    {
        "title" : "Type",
        "width" : 7.5
    }
]

const SelectOption = [
    {
        "id" : 1,
        "title" : "All Student"
    },

    {
        "id" : 2,
        "title" : "Coffee Club ( Yangon )"
    },

    {
        "id" : 3,
        "title" : "Junior Corner ( Yangon )"
    },

    {
        "id" : 4,
        "title" : "Coffee Club ( Mandalay )"
    },

    {
        "id" : 5,
        "title" : "Coffee Club ( Bangkok )"
    },

    {
        "id" : 6,
        "title" : "Coffee Club ( Bago )"
    },

    {
        "id" : 7,
        "title" : "Coffee Club ( Pathein )"
    },

    {
        "id" : 8,
        "title" : "Coffee Club ( Dubai )"
    },

    {
        "id" : 9,
        "title" : "Coffee Club ( Malaysia )"
    }
]

// example data 
const ExampleData = [
    {
        "no" : "01",
        "id" : "CCY001",
        "name" : "Shun Piti Thwin",
        "email" : "shunpitithwin@example.com",
        "number" : 959123456789,
        "address" : "Htauk Kyaunt",
        "type" : "Regular"
    },

    {
        "no" : "02",
        "id" : "CCY002",
        "name" : "Hsu Wint War Htet",
        "email" : "hsuwintwarhtet@example.com",
        "number" : 959123456789,
        "address" : "East Dagon",
        "type" : "Regular"
    },

    {
        "no" : "03",
        "id" : "CCY003",
        "name" : "Thoon Nay Toe",
        "email" : "thoonnaytoe@example.com",
        "number" : 959123456789,
        "address" : "Thanlyin",
        "type" : "Regular"
    },

    {
        "no" : "04",
        "id" : "CCY004",
        "name" : "Byanyo",
        "email" : "byanyo@example.com",
        "number" : 959123456789,
        "address" : "Botahtaung",
        "type" : "Regular"
    },

    {
        "no" : "05",
        "id" : "CCY005",
        "name" : "Win Htet Lin",
        "email" : "winhtetlin@example.com",
        "number" : 959123456789,
        "address" : "Mayangone",
        "type" : "Regular"
    },

    {
        "no" : "06",
        "id" : "CCY006",
        "name" : "Hein Zin",
        "email" : "heinzin@example.com",
        "number" : 959123456789,
        "address" : "North Okkalapa",
        "type" : "Regular"
    },

    {
        "no" : "07",
        "id" : "CCY007",
        "name" : "Ei",
        "email" : "ei@example.com",
        "number" : 959123456789,
        "address" : "Thaketa",
        "type" : "Regular"
    },

    {
        "no" : "08",
        "id" : "CCY008",
        "name" : "Pyae Phyu Mon",
        "email" : "pyaephyumon@example.com",
        "number" : 959123456789,
        "address" : "South Okkalapa",
        "type" : "Regular"
    },

    {
        "no" : "09",
        "id" : "CCY009",
        "name" : "Aung Aung",
        "email" : "aungaung@example.com",
        "number" : 959123456789,
        "address" : "Dagon",
        "type" : "Regular"
    },

    {
        "no" : "10",
        "id" : "CCY010",
        "name" : "Eaindray",
        "email" : "eaindray@example.com",
        "number" : 959123456789,
        "address" : "Shwepyithar",
        "type" : "Regular"
    },

    {
        "no" : "11",
        "id" : "CCY011",
        "name" : "Khin Aye Thu",
        "email" : "khinayethu@example.com",
        "number" : 959123456789,
        "address" : "Sanchaung",
        "type" : "Regular"
    },

    {
        "no" : "12",
        "id" : "CCY012",
        "name" : "Wai Wai Phyo Thu",
        "email" : "waiwaiphyuthu@example.com",
        "number" : 959123456789,
        "address" : "Sanchaung",
        "type" : "Regular"
    },
]


const AdminStudent = () => {

    const handleSelectCategory = (e) => {
        const value = e.target.value;
        console.log(value)
    }

    return (
        <div className="w-full flex flex-col justify-center items-start p-3 pb-20">

            <div className='flex w-full p-1 justify-between items-center h-13'>
                <h3 className='font-[Recursive] text-[15px] font-bold'>Student List</h3>
                <div className='flex gap-3 h-full items-center'>
                    <select onChange={handleSelectCategory} className='student-option font-[Valley] text-[13px] border-[#000]/20 text-[#000]/60 border p-1 pb-1 rounded-md active:border-[#000]/20'>
                        {
                            SelectOption.map((element, index) => {
                                return (
                                    <option value={element.id} key={index}>{element.title}</option>
                                )
                            })
                        }
                    </select>
                    <span className='font-[Valley] text-[15px] text-[#000]/60'>student : 1300</span>
                </div>
            </div>

            <div className="w-full h-[100%] border border-[#000]/20 rounded-xl">
                <header className='h-13 border-b border-[#000]/20 flex items-center pl-3'>
                    {
                        Headertag.map((element, index) => {
                            return(
                                <li key={index} 
                                style={{ width: `${element.width}%`}}
                                className='list-none text-[13px] font-[Valley] text-[#000]/60'>{element.title}</li>
                            )
                        })
                    }

                    <span className='font-[Valley] text-[13px] w-30 flex justify-center text-[#000]/60'>Record : { ExampleData.length < 10 ? `0${ExampleData.length}` : ExampleData.length}</span>
                </header>

                <div className='h-[100%]'>
                    {
                        ExampleData.slice(0, 30).map((element, index) => {
                            return (
                                <li key={index} className='flex items-center p-3 text-[13px] text-[#000]  h-15 border-b border-[#000]/20'>
                                    <span className='w-[5%]'>{index < 9 ? `0${index + 1}` : index + 1}</span>
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
        </div>
    )
}

export default AdminStudent