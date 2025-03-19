
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import ASLOGO from '../assets/aslogo.svg';
import { useEffect, useState } from 'react';

interface NavbarProps {
    theme?: 'light' | 'dark';
    style?: 'pinned' | 'floating';
    className?: string;
    isMobile: boolean;
};

function Navbar({ theme = 'dark', style = 'floating', className, isMobile }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className={`col-span-full flex flex-col
            ${style === 'pinned'
                ? 'w-full '
                : 'md:col-start-2 md:w-fit mt-11 border border-white/5'
            }
            ${theme === 'light'
                ? 'bg-white/30 text-black'
                : 'bg-black/30 text-white/70'
            } 
            ${isMobile ? isOpen ? 'rounded-none' : 'rounded-[0px_0px_15px_15px]' : 'rounded-[15px] '} items-center font-neulisneue backdrop-blur-xs ${className}`}
        >
            <div className={`flex ${style === 'pinned' ? 'w-full justify-between p-8' : 'gap-72 pl-8 pr-14 py-8'} items-center `}>
                <Link to='/'>
                    <img src={ASLOGO}></img>
                </Link>
                {isMobile ? (
                    <div
                        className="cursor-pointer flex flex-col gap-1.5 w-10 h-8 justify-center items-center"
                        onClick={handleClick}
                    >
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.25" : ""
                                }`}
                        />
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.25" : ""
                                }`}
                        />
                    </div>
                ) : (
                    <div className="flex gap-10 items-center text-lg font-light">
                        <Link className="" to='/'>Home</Link>
                        <HashLink smooth to="/#work">Work</HashLink>
                        <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink>
                        <HashLink smooth to="/#contact">Reach Out!</HashLink>
                    </div>
                )}
            </div>
            <div className={`${isOpen ? "h-auto opacity-80 py-8" : "h-0 opacity-0 py-0"} flex w-full p-8 rounded-[0px_0px_15px_15px] justify-between items-center text-base bg-black/40 transition-all duration-200 ease-out overflow-hidden`}>
                <Link className="" to='/'>Home</Link>
                <HashLink smooth to="/#work">Work</HashLink>
                <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink>
                <HashLink smooth to="/#contact">Reach Out!</HashLink>
            </div>
        </nav>
    );
}

export default Navbar;