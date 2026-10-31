

import Cover from '../../public/img/Intro.png';

// const { photo1, photo2, photo3, photo4 } = viewers;
// const view = [photo1, photo2, photo3, photo4];

const HomePage = ({HomeRef}) => {
    return (
        <div ref={HomeRef} className="flex justify-center items-center pt-10">
            <div className="w-320 flex justify-center pt-20 border-b border-[#000]/20 pb-20">
                {/* TextSide */}
                <section 
                className="w-[40%] text-[12px] pt-1">
                    <span className="pl-4 pr-4 pt-2 pb-2 rounded-3xl font-[Recursive] text-[#000] border border-[#000]/20 shadow-lg shadow-[#000]/20">EDUCATION COMMUNITY : MYANMAR</span>

                    {/* Main Pargraph */}
                    <div className="flex flex-col mt-10 pl-5 border-l border-orange-400 pt-5 pb-5">
                        <h3 className="font-[Recursive] font-400 text-[25px]">Empowering Students to Learn, Connect, and Grow Beyond Boundaries</h3>
                        <p className="text-[15px] text-[#000]/60 mt-1 font-[Valley]">Access world-class educational resources, join active student communities,
                            and participate in events designed to build your future.
                        </p>

                        <div className="mt-10 gap-2 flex text-[13px] font-[Valley]">
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl hover:bg-[#000] hover:text-[#fff] transition duration-200">Follow on Facebook</button>
                            <button className="border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl hover:bg-[#000] hover:text-[#fff] transition duration-200">Join our Telegram group</button>
                        </div>
                    </div>

                    <div className='flex mt-5 ml-8'>
                        {/* {
                            view.map((element, index) => {
                                return (
                                    <li key={index} className='w-9 h-9 rounded-[50px] list-none border border-[#000]/20 -ml-2 overflow-hidden'>
                                        <img src={element.src} className=''/>
                                    </li>
                                )
                            })
                        } */}

                        <div className='flex flex-col ml-5 font-[Valley]'>
                            <span className='text-[15px] font-bold'>1k +</span>
                            <span>Active Learners</span>
                        </div>
                    </div>
                </section>

                {/* ImageSide */}
                <section 
                className="w-[60%] flex justify-center pl-20 items-start">
                    <img src={Cover.src} className='w-110'/>
                </section>
            </div>
        </div>
    )
}

export default HomePage