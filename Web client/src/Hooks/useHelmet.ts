import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles: { [key: string]: string } = {
  '/home': 'Home',
  '/projects': 'Projects',
  '/education': 'Education',
  '/contact': 'Contact',
}

const useHelmet = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] || 'Home page'
  }, [location])
}

export default useHelmet
