import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools, faSignOutAlt, faBars, faClose, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed md:relative z-10">
            <button onClick={toggleMenu} className="text-3xl pl-4 fixed top-4 left-4 z-50 md:hidden">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`fixed sm:relative top-0 left-0 h-screen bg-white text-gray-500 w-64 transition-transform transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="flex items-center justify-between h-16 p-4">
                    <span className="text-2xl font-bold">MarketVista</span>
                    <button onClick={toggleMenu} className="text-2xl md:hidden">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <nav className="mt-4 grid">
                    <div>
                        <Link to="/dashboard" className="block py-2 px-4 ml-2 mr-4 mb-3 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            Dashboard
                        </Link>
                        <Link to="/profile" className="block py-2 px-4 ml-2 mr-4 mb-3 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Profile
                        </Link>
                        <Link to="/repairs" className="block py-2 px-4 ml-2 mr-4 mb-3 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <FontAwesomeIcon icon={faTools} className="mr-2" />
                            Repairs
                        </Link>
                        <Link to="/stock" className="block py-2 px-4 ml-2 mr-4 mb-3 rounded-md hover:bg-gray-700 transition-colors duration-200">
                            <FontAwesomeIcon icon={faTools} className="mr-2" />
                            Stock
                        </Link>
                    </div>
                    <div className='absolute bottom-16 flex flex-col justify-start pl-2 w-full'>
                        <div className='flex mb-12 gap-2'>
                            <button className="py-2 bg-blue-500 rounded-md text-sm text-white px-2 hover:bg-gray-700 transition-colors duration-200 flex items-center">
                                <FontAwesomeIcon icon={faSun} className="mr-2" />
                                Light Mode
                            </button>
                            <button className="py-2 border border-blue-600 rounded-md text-sm px-2 hover:bg-gray-700 transition-colors duration-200 flex items-center">
                                <FontAwesomeIcon icon={faMoon} className="mr-2" />
                                Dark Mode
                            </button>
                        </div>
                       
                        <Link to="/logout" className="py-2 w-3/5 rounded-md px-4 text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                            Logout
                        </Link>
                    </div>
                </nav>
            </div>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </div>
    );
};
