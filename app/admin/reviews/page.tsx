
import Listbottom from '../../../components/admin/footer';
import Blankbox from '../../../public/img/box.png';
import { prisma } from '../../lib/prisma';
import { revalidatePath } from "next/cache";
import { ListViewType } from '@/app/lib/_type';

async function createTask(formData:FormData) {
    "use server"

    const name = formData.get("name") as string;
    const rating = Number(formData.get("rating"));
    const comment = formData.get("comment") as string;

    await prisma.review.create({
        data: {
        name,
        rating,
        comment,
        },
    });

    revalidatePath("/admin/reviews")
}

export default async function AdminReview() {
    "use cache"
    const myList: ListViewType[] = await prisma.review.findMany( {
        select:{
            id: true,
            name: true,
            comment: true,
            rating: true,
        }
    })

    return (
        <div className="flex justify-center items-start pl-3 pr-3 pt-5 pb-20 w-full gap-3">
            <section className="w-[70%] border border-[#000]/20 rounded-xl overflow-hidden">

                <header className='border-b text-[13px] border-[#000]/20 h-13 flex justify-start items-center pl-3 pr-3 font-[Valley] text-[#000]/60'>
                    <span className='w-[10%]'>Id</span>
                    <span className='w-[15%]'>Name</span>
                    <span className='w-[50%]'>Comment</span>
                    <span className='w-[10%] flex justify-center'>Rating</span>
                    <span></span>
                </header>

                {/* Main List Container */}
                <div className='flex flex-col'>
                    {
                        myList.length === 0 ? (
                            <div className='w-full flex flex-col justify-center items-center pt-10 pb-10 font-[Valley]'>
                                <img src={Blankbox.src} className='w-10'/>

                                <p className='text-[15px] mt-5'>Empty in the review</p>
                                <span className='text-[13px] text-[#000]/60'>Start to take a review from learner or member</span>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {myList.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="p-3 font-[Valley] flex items-start h-20  border-b border-[#000]/20"
                                    >
                                        <span className='text-[13px] font-[Valley] w-[10%] text-[#000]/60'>{index < 10 ? "0" + (index+1) : index}</span>
                                        <h3 className='text-[15px] w-[15%] h-full'>{item.name}</h3>
                                        <p className='text-[13px] text-[#000]/60 w-[50%] h-full'>{item.comment}</p>
                                        <span className='w-[10%] flex justify-center h-ful text-[13px] font-[Valley] text-[#000]/60'>{item.rating}/10</span>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>

                <Listbottom />
            </section>

            <section className="pb-5 w-[30%] border border-[#000]/20 rounded-xl flex flex-col items-center">
                <header className="flex gap-5 border-b h-15 border-[#000]/20 w-full items-center justify-center">
                    <span className="flex justify-center items-center w-10 h-10 rounded-xl text-[#fff] text-[30px] bg-orange-400 shadow-lg shadow-orange-600">+</span>
                    <div className="flex flex-col">
                        <h3 className="text-[15px] font-[Recursive] font-bold">Add a review</h3>
                        <h3 className="text-[12px] font-[Valley]">Share a review from member</h3>
                    </div>
                </header>

                <form action={createTask} className="w-full p-5 font-[Valley]">
                    <h3 className="text-[13px]">Name</h3>
                    <input name='name' type="text" placeholder="Enter a name" className="border border-[#000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Comment</h3>
                    <textarea name='comment' placeholder="Write the review here" className="border resize-none w-full h-40 border-[#000]/20 mt-2 text-[13px] pl-3 pt-3 rounded-md"></textarea>

                    <h3 className="text-[13px] mt-5">Rate</h3>
                    <input name='rating' type="text" placeholder="Rate between 1 - 10" className="border border-[#000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Event <span className="text-[#000]/60">( optional )</span></h3>
                    <input type="text" placeholder="Event name" className="border border-[#000]/20 w-full h-10 mt-2 pl-3 text-[13px] rounded-md"/>

                    <h3 className="text-[13px] mt-5">Status</h3>
                    <div className="flex gap-3 mt-3">
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" />
                            <span>Approved</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" />
                            <span>Pending</span>
                        </li>
                        <li className="list-none text-[13px] flex justify-center items-center gap-1">
                            <input type="checkbox" />
                            <span>Reject</span>
                        </li>
                    </div>

                    <button className="text-[13px] bg-orange-400 pt-1 pb-1 text-[#fff] w-full mt-5 rounded-md cursor-pointer">Create Review</button>
                </form>
            </section>
        </div>
    )
}
