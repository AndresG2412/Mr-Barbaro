"use client";

import Logo from './Logo'
import { headerData } from '@/app/constants/data'
import Container from './Container'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    return (
        <Container>
            <div className='mt-2 flex justify-between items-center'>
                <Logo />
                <div className='flex items-center justify-center gap-7 font-semibold tracking-wide'>
                    {headerData?.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href} 
                            className={`hover:text-eshop-accent transition-all duration-300 ease-in-out font-semibold tracking-wide relative group ${pathname === item?.href ? 'text-eshop-accent' : ''}`}
                        >
                            {item.title}
                            
                            <span 
                                className={`absolute -bottom-0.5 left-1/2 h-0.5 bg-eshop-accent transition-all duration-300 ease-in-out -translate-x-1/2 
                                group-hover:w-full ${pathname === item?.href ? 'w-full' : 'w-0'}`}
                            />
                        </Link>
                    ))}
                    <Link href={""} className='text-eshop-textDark hover:text-eshop-textPrimary px-4 py-2 bg-eshop-buttonBase hover:bg-eshop-buttonHover transition-all duration-200 ease-in-out rounded-full'>Separar Cita</Link>
                </div>
            </div>
        </Container>
    )
}

export default Header