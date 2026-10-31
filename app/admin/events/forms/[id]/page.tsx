
import Listfooter from '../../../../../components/admin/footer';
import Blankbox from '../../../../../public/img/box.png';

const AdminForm = () => {
    return (
        <div className="w-full p-3 pb-20">

            <div className='border border-[#000]/20 rounded-xl overflow-hidden mt-5'>

                <header className='flex justify-between items-center w-full p-3 border-b border-[#000]/20'>
                    <h3 className='text-[#000]/80'>Registration Forms</h3>
                    <input type="search" placeholder="e.g. Studen Id, Name" className="border w-50 h-10 rounded-md pl-3 pr-3 border-[#000]/20 focus:border-[#000]/20 focus:outline-[#000]/20 font-[Valley] text-[13px] shadow-lg"/>
                </header>

                <div className='flex flex-col border-b border-[#000]/20'>
                    <div className='w-full flex flex-col justify-center items-center pt-10 pb-10 font-[Valley]'>
                        <img src={Blankbox.src} className='w-10'/>

                        <p className='text-[15px] mt-5'>Empty in the registeration</p>
                        <span className='text-[13px] text-[#000]/60'>Start open a acees for register a event</span>
                    </div>
                </div>

                <Listfooter />
            </div>
        </div>
    )
}

export default AdminForm