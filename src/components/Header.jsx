import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="fixed top-0 w-full md:w-auto md:left-64 right-0 bg-white rounded-md shadow-md py-3 h-16 px-6 flex items-center justify-between">
            <div className="flex-1 ml-16 mr-8 md:mx-4">
                <div className="relative mr-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border rounded-md py-2 pl-10 pr-8 text-sm"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute top-2.5 left-3 text-gray-500"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-lg cursor-pointer" />
                <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg cursor-pointer" />
                <div className="relative flex gap-3">
                    <span>Usuario</span>
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="text-gray-600 text-2xl cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                            <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Profile
                            </a>
                            <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Settings
                            </a>
                            <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
