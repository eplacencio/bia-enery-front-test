import { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

	const [theme, setTheme] = useState<string>('lightTheme');

  const toggleTheme = () => {
		setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme' )
	}

  useEffect(() => {
    if(theme === 'darkTheme') {
      document.documentElement.classList.add('darkTheme')
    } else {
      document.documentElement.classList.remove('darkTheme')
    }
  }, [theme])

  return (
    <main className='bg-background min-h-screen' lang='en'>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      {children}
    </main>
  )
}
