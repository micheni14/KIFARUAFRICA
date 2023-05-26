import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const offsetThreshold = 50;
    
        setIsSticky(scrollTop > offsetThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [sidebar, setsidebar] = useState(false);
    return (
    <div>
    <div className={
        isSticky
        ? "fixed bg-slate-800 h-20 w-full top-0 z-20"
        : " bg-slate-800 h-20 "
    }
    
    >
    <div className="hidden md:flex justify-between items-center w-medium mx-auto  h-16">
        <div>
    <img src="" alt="logo" className="text-white" />
        </div>
            <div className=
                "md:flex justify-between items-center space-x-40 text-white">
        <ul className="flex space-x-10  ">
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="About us"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About us
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Projects
            </Link>
                    </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Contact
            </Link>
            </li>
        </ul>
        <div>
                <div className="mr-10 ">
                <button className="bg-ourGreen px-5 py-3 rounded-full">Get started</button>

        </div>
        </div>
        </div>
    
        </div>
        

        <div className="md:hidden block z-30 text-white"
            onClick={() => setsidebar(!sidebar)} 
            >
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </div>
            </div>
            <div className={
                sidebar
                    ? "bg-slate-800 h-full w-[80%] z-20 fixed top-0 md:hidden " 
                    : "h-full w-full fixed top-0 hidden"
            }
            >   
                
        {/* <div>
    <img src="" alt="logo" className="text-white" />
        </div> */}
            <div className=
                    " w-[85%] mx-auto text-white font-medium text-xl">
                    <div className=' flex justify-between'>
                        <div><img src="" alt="logo" className="text-white" /></div>
                        <div className=''
                            onClick={() => setsidebar(!sidebar)} 
                        >
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>


                        </div>
                    </div>
        <ul className="flex  flex-col space-y-8 text-center ">
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="About us"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About us
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
            >
            projects
            </Link>
                    </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Contact
            </Link>
                        </li>
                        <div className=" ">
                <button className="bg-ourGreen px-6 py-4 rounded-full ">Get started</button>
        </div>
        </ul>
        <div>
            
        </div>
        </div>
    
        </div>
        </div>
    
    
);
};

export default Navbar;