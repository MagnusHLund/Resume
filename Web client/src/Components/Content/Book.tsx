import { ReactNode } from 'react'
import './Book.scss'
import Image from './Image'

interface BookProps {
  BookTitle?: string
  PageHeader?: string
  children: ReactNode
  className?: string
}

const Book: React.FC<BookProps> = ({
  BookTitle = '',
  PageHeader = '',
  children,
  className = '',
}) => {
  return (
    <div className={`book ${className}`}>
      <div className="book__cover">
        <h1 className="book__cover--title">{BookTitle}</h1>
        <Image
          src="/School/ZBC.png"
          alt="ZBC logo"
          className="book__cover--image"
        />
        <Image
          src="/School/ZBC.png"
          alt="ZBC logo"
          className="book__cover--backside--image"
        />
      </div>
      <div className="book__content">
        <h1 className="book__content--header">{PageHeader}</h1>
        <div className="book__content--children">{children}</div>
      </div>
    </div>
  )
}

export default Book
