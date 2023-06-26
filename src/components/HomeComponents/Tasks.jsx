import { IoMdNotifications } from 'react-icons/io';
import Slider from "react-slick";
import { AiOutlineQrcode, AiOutlineSearch } from 'react-icons/ai';
import { LuNfc } from 'react-icons/lu';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaSkyatlas } from 'react-icons/fa';
import { useState } from 'react';
import clsx from 'clsx';
import {ImCross} from 'react-icons/im';
import {MdNotificationImportant} from 'react-icons/md';
import iconLogo from '../../assets/icon-logo.svg';
const icons = [
    {
        id:0,
        icon: <LuNfc />
    },
    {
        id:2,
        icon: <MdNotificationImportant />
    },
    {
        id:1,
        icon: <ImCross />
    },
]
const tabs = [
    { id:0, icon: <LuNfc /> },
    { id:1, icon: <AiOutlineQrcode /> },
    { id:2, icon: <AiOutlineSearch /> },
    { id:3, icon: <BiMessageRoundedDetail /> },
    { id:4, icon: <FaSkyatlas /> }
]
function Tasks() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [activeTab, setActiveTabe] = useState(0)
    return (
        <div className='bg-card rounded-2xl p-3 text-center'>
            <section className='flex justify-between w-[80%] m-auto items-center'>
                <h3>لائحة المهام</h3>
                <article className='flex gap-4 items-center text-2xl'>
                    <IoMdNotifications />
                    <i className='border-2 border-primary border-solid rounded-full h-12 w-12 text-xs flex items-center justify-center'>person</i>
                </article>
            </section>
            <p className='text-center text-primary my-3'>الطبات المقبولة</p>
            <section className='tasks'>
                <Slider {...settings}>
                    {
                        Array(5).fill('')?.map((el) => {
                            return <div key={Math.random()}>
                                <section className='text-white m-3'>
                                    <div className='bg-primary rounded-3xl p-5'>
                                        <article className='flex items-center justify-end gap-4'>
                                            <h2>بطاقة شخصية</h2>
                                            <div className='rounded-full border border-solid border-secondary w-10 h-10 flex items-center justify-center'>
                                                100%
                                            </div>
                                        </article>
                                        <article className='flex justify-between my-2'>
                                            <div>
                                                <p>
                                                    رقم الموبايل
                                                    <br />
                                                    000000000
                                                </p>
                                                <p>
                                                    كود الطلب
                                                    <br />
                                                    000000000
                                                </p>
                                            </div>
                                            <div>
                                                <i className='m-auto border-8 border-primary/30 border-solid rounded-full h-12 w-12 text-xs flex items-center justify-center'>person</i>
                                                <h4>company Name</h4>
                                            </div>

                                        </article>
                                    </div>
                                </section>
                            </div>

                        })
                    }

                </Slider>
            </section>
            <section className='mt-10 text-center bg-gray-200 rounded-[50px] flex gap-3 justify-evenly py-3'>
                {
                    tabs?.map(el => {
                        return <button onClick={()=> setActiveTabe(el?.id)} className={clsx(activeTab === el?.id && 'text-primary', 'cursor-pointer text-3xl flex items-center') } key={Math.random()}> {el?.icon} </button>
                    })
                }
            </section>
           <img className='w-[100px] mt-3' src={iconLogo} />
           <section>
            <table className='w-full border-spacing-y-2'>
                <thead>
                    <tr>
                        <th>تفعيل</th>
                        <th>ابلاغ</th>
                        <th>حذف</th>
                        <th>تفاصيل</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(2)?.fill('')?.map?.(el => {
                            return <tr key={Math.random()}>
                            {
                                icons?.map(el => {
                                    return <td  key={Math.random()}>
                                        <span className={clsx('p-2 mt-1 text-xl bg-gray-200 rounded-full inline-flex items-center justify-center')}>
                                        {el?.icon}
                                        </span>
                                        </td>
                                })
                            }
    
                            <td className='text-end bg-gray-200 rounded-3xl p-2'>
                                <span> رقم الموبايل :</span>
                                <span>0000000</span>
                                <br />
                                <span> كود الطلب  :</span>
                                <span>0000000</span>
                            </td>
                       
                        </tr>
                        })
                    }

                </tbody>
            </table>
           </section>
        </div>
    );
}

export default Tasks;


