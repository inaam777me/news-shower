import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = (
        <>
            <li><Link to="/" className='text-white hover:text-gray-300 py-2 block'>Home</Link></li>
            <li><Link to="/favorites" className='text-white hover:text-gray-300 py-2 block'>Favorites</Link></li>
            <li><Link to="#about" className='text-white hover:text-gray-300 py-2 block'>About</Link></li>
        </>
    );

    return (
        <nav className='bg-[#00001a] w-full relative'>
            <div className='flex justify-between items-center px-6 py-4'>
                <div className='flex items-center'>
                    <span className='text-3xl font-bold text-white'>LOGO</span>
                </div>

                <div className='hidden lg:flex items-center'>
                    <ul className='flex gap-8 text-[18px]'>
                        {links}
                    </ul>
                </div>

                <button
                    className='lg:hidden text-white'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                </button>
            </div>

            {isMenuOpen && (
                <div className='lg:hidden bg-[#00001a] w-full px-6 py-4'>
                    <ul className='flex flex-col gap-4'>
                        {links}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
