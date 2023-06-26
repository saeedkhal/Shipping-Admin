
import { AiFillHome } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillChatTextFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import logo from '../../assets/logo.svg';

function Nav() {
    const nav = [
        {
            icon: <AiFillHome />,
            to: '/'
        },
        {
            icon: <BiMessageRoundedDots />,
            to: '/messages'

        },
        {
            icon: <IoMdNotifications />,
            to: '/notifications'
        },
        {
            icon: <BsFillChatTextFill />,
            to: '/test'

        },
    ]
    return (
        <>
            <div className='hidden lg:block left-0 sticky top-0 bg-primary text-white pl-5 text-5xl pt-10 min-h-[100vh]'>
            <img src={logo} className='w-[100px] pr-5' />
                {nav?.map(el => {
                    return <section key={Math.random()}>
                        <NavLink to={el?.to} className='text-white'>

                            {({ isActive }) => (
                                <span className={clsx( 'rounded-bl-[20px] rounded-tl-[20px] pl-5 pr-10 py-1 flex items-center my-5', isActive && 'bg-white text-primary')}>
                                    {el?.icon}
                                </span>
                            )}
                        </NavLink>
                    </section>
                })}
            </div>
            <div className='lg:hidden fixed bottom-0 justify-between flex m-auto bg-primary w-full pb-3 z-50'>
                {nav?.map(el => {
                    return <section key={Math.random()}>
                        <NavLink to={el?.to} className='text-white'>
                            {({ isActive }) => (
                                <span className={clsx(isActive && 'text-primary bg-white rounded-br-[10px] rounded-bl-[10px]', 'flex items-center text-3xl pb-1 px-2 pt-3 mx-2')}>
                                    {el?.icon}
                                </span>
                            )}
                        </NavLink>
                    </section>
                })}
            </div>
        </>
    );
}

export default Nav;