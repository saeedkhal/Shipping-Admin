import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { LuNfc } from 'react-icons/lu';
import { BiSolidLockAlt } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { BsQrCode } from 'react-icons/bs'
import { GiWorld } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Search() {

    const links = [
        {
            icon: <LuNfc />,
            hasBoarder: true
        },
        {
            icon: <BsQrCode />,
        },

        {
            icon: <BiSolidLockAlt />,
        },
        {
            icon: <IoMdNotifications />
        },
        {
            icon: <GiWorld />
        },

    ]
    return (
        <>
            <div className='lg:flex items-center gap-9'>
                <section className='flex justify-center mt-3'>
                    <Input
                        className='w-80'
                        placeholder="Enter your username"
                        prefix={<AiOutlineSearch className='text-primary text-3xl' />}
                    />
                </section>
                <section className='flex justify-between w-80 mt-5 lg:mt-3 lg:gap-5 max-w-sm m-auto lg:m-[0_auto_0_0]'>
                    {
                        links?.map(el => {
                            return <section key={Math.random()}>
                                <Link to='' className={clsx(el?.hasBoarder && 'border-2 border-primary border-solid', 'text-3xl text-primary flex items-center')}>
                                    {el?.icon}
                                </Link>
                            </section>
                        })
                    }
                </section>
            </div>
        </>
    );
}

export default Search;