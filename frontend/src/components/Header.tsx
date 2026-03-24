import { Search } from 'lucide-react';
import { Link } from 'react-router';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header = () => {
    return (
        <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100'>
            <div className='container mx-auto px-4 lg:px-6'>
                {/* Top Bar */}
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <Link
                        to='/'
                        className='flex items-center gap-2.5 group'>
                        <div className='w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all'>
                            <span className='text-white font-bold text-lg'>
                                F
                            </span>
                        </div>
                        <span className='text-2xl font-bold bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
                            Feastly
                        </span>
                    </Link>

                    {/* Main Navigation */}
                    <MainNav />

                    {/* Mobile Navigation */}
                    <div className='md:hidden'>
                        <MobileNav />
                    </div>
                </div>

                {/* Mobile Search - Visible on mobile */}
                <div className='md:hidden pb-4'>
                    <div className='relative'>
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                        <input
                            type='text'
                            placeholder='Search for food...'
                            className='w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/50 transition-all'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
