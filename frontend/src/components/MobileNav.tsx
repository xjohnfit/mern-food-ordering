import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import {
    ShoppingCart,
    User,
    Menu,
    Home,
    UtensilsCrossed,
    Heart,
    Clock,
    HelpCircle,
    LogIn,
} from 'lucide-react';
import { Link } from 'react-router';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className='hover:bg-gray-100 rounded-xl'>
                    <Menu className='w-6 h-6' />
                </Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col h-full w-full sm:w-100 bg-white'>
                <div className='flex flex-col gap-4 pt-2'>
                    <div className='flex justify-start items-center gap-2.5 px-4'>
                        <div className='w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30'>
                            <span className='text-white font-bold text-lg'>
                                F
                            </span>
                        </div>
                        <SheetTitle className='text-xl font-bold bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
                            Feastly
                        </SheetTitle>
                    </div>

                    <Link
                        to='/cart'
                        className='relative flex items-center justify-between mx-4 px-4 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors group'>
                        <div className='flex items-center gap-3'>
                            <ShoppingCart className='w-5 h-5 text-orange-600' />
                            <span className='font-semibold text-gray-900'>Shopping Cart</span>
                        </div>
                        <span className='bg-linear-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg shadow-orange-500/30'>
                            3
                        </span>
                    </Link>
                </div>

                <Separator className='mt-4' />

                <SheetDescription className='sr-only'>
                    Mobile navigation menu
                </SheetDescription>

                {/* Navigation Links */}
                <nav className='flex flex-col gap-2 flex-1 px-2 mt-4'>
                    <Link
                        to='/'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <Home className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            Home
                        </span>
                    </Link>

                    <Link
                        to='/profile'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <User className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            Profile
                        </span>
                    </Link>

                    <Link
                        to='/orders'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <Clock className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            My Orders
                        </span>
                    </Link>

                    <Link
                        to='/restaurants'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <UtensilsCrossed className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            Restaurants
                        </span>
                    </Link>

                    <Link
                        to='/favorites'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <Heart className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            Favorites
                        </span>
                    </Link>

                    <Link
                        to='/help'
                        className='flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-linear-to-r hover:from-orange-50 hover:to-orange-50/50 transition-all group'>
                        <div className='w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all'>
                            <HelpCircle className='w-5 h-5 text-gray-600 group-hover:text-white' />
                        </div>
                        <span className='font-semibold text-gray-700 group-hover:text-orange-600'>
                            Help
                        </span>
                    </Link>
                </nav>

                <Separator className='my-4' />

                {/* Bottom Action */}
                <div className='space-y-3 p-4'>
                    <Button className='w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all'>
                        <LogIn className='w-5 h-5' />
                        Sign In
                    </Button>
                    <p className='text-center text-sm text-gray-600'>
                        New to Feastly?{' '}
                        <Link
                            to='/register'
                            className='text-orange-600 font-bold hover:text-orange-700'>
                            Create Account
                        </Link>
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
