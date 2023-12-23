import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between items-center bg-red-40 p-2'>
                <img src="../../../clan.png" alt="not exist" className='h-[30px] xs:h-[36px] max-w-[100%] rounded-full object-cover ' />
                <div className='hidden ss:flex items-center space-x-3 xs:space-x-5 md:space-x-20'>
                    <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? 'text-lightBlue capitalize leading-[22.5px] font-medium' : 'text-[rgb(85,85,85)] font-medium leading-[22.5px] hover:text-lightBlue capitalize'}>home</NavLink>
                    <NavLink to={'/pending'} className={({ isActive }) =>
                        isActive ? 'text-lightBlue capitalize leading-[22.5px] font-medium' : 'text-[rgb(85,85,85)] font-medium leading-[22.5px] hover:text-lightBlue capitalize'}>pending</NavLink>
                    <NavLink to={'/approved'} className={({ isActive }) =>
                        isActive ? 'text-lightBlue capitalize leading-[22.5px] font-medium' : 'text-[rgb(85,85,85)] font-medium leading-[22.5px] hover:text-lightBlue capitalize'}>approved</NavLink>
                </div>
                <Dropdown />
            </nav>
        </>
    )
}
