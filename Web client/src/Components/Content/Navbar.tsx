import { NavLink } from 'react-router-dom'
import Image from './Image'
import './Navbar.scss'
import {
  changeLanguage,
  Language,
  LanguageProps,
} from '../../Redux/Slices/LanguageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import Button from '../Inputs/Button'
import cn from 'classnames'
import { useState } from 'react'

export type navbarLinks = { title: string; route: string; image: string }[]

interface NavbarProps {
  links: navbarLinks
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(location.href)

  const languageState: LanguageProps = useSelector(
    (state: RootState) => state.language
  )

  const currentLanguage = languageState.current
  const languages = languageState.languages

  const languageToShow: Language = languages[currentLanguage]

  return (
    <ul className="navbar">
      {links.map((link) => (
        <NavLink
          to={link.route}
          className={cn('navbar--link', {
            active: currentPage.includes(link.route),
          })}
          onClick={() => setCurrentPage(link.route)}
          key={link.title}
        >
          <Image
            src={link.image}
            alt={`${link.title} icon`}
            className="navbar--link__image"
          />
          <p className="navbar--link__title">{link.title}</p>
        </NavLink>
      ))}

      <Button
        onClick={() => {
          dispatch(changeLanguage())
        }}
        imageSrc={`/Flags/${languageToShow}.png`}
        imageAlt="Change language"
        transparent={true}
      />
    </ul>
  )
}

export default Navbar
