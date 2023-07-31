import { MoonOutline } from 'react-ionicons'
import { SunnyOutline } from 'react-ionicons'
import Link from 'next/link'

export interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <header className='bg-element h-16 shadow-sm'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link className='font-semibold text-base text-text' href='/'>
          Where in the world?
        </Link>
        <button className='text-text flex items-center' onClick={toggleTheme}>
          {
            theme === 'darkTheme'
            ? <SunnyOutline
              color='text-text'
              height='16px'
              width='16px'
            />
            : <MoonOutline
                color='text-text'
                height='16px'
                width='16px'
              />
          }
          <span className='ml-2'>
            {theme === 'darkTheme' ? 'Light mode' : 'Dark mode'}
          </span>
        </button>
      </div>
    </header>
  )
}