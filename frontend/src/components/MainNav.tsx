import { Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            {/* Search Bar - Hidden on mobile */}
            <div className='hidden md:flex flex-1 max-w-lg mx-8'>
                <div className='relative w-full'>
                    <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
                    <input
                        type='text'
                        placeholder='Search restaurants, cuisines, or dishes...'
                        className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/50 transition-all text-sm'
                    />
                </div>
            </div>
            <div className='hidden md:flex items-center gap-2'>
                {/* Cart */}
                <Link to='/cart'>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='relative hover:bg-gray-100 rounded-xl'>
                        <ShoppingCart className='w-5 h-5' />
                        <span className='absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-semibold'>
                            3
                        </span>
                    </Button>
                </Link>

                {/* User Account */}
                <Link to='/profile'>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='hover:bg-gray-100 rounded-xl'>
                        <User className='w-5 h-5' />
                    </Button>
                </Link>

                {/* Sign In Button */}
                <Button 
                    className='ml-2 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all'
                    onClick={async () => await loginWithRedirect()}
                    >
                    Sign In
                </Button>
            </div>
        </>
    );
};

export default MainNav;
