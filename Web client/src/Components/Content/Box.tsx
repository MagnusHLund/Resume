import { ReactNode } from 'react'
import './Box.scss'

interface BoxProps {
  className?: string
  minWidth?: string
  children: ReactNode
  title: string
  thinkingBubble?: boolean
  smallThinkingBubble?: boolean
}

const Box: React.FC<BoxProps> = ({
  className = '',
  minWidth = '50%',
  children,
  title,
}) => {
  return (
    <div className={`box ${className}`} style={{ minWidth: minWidth }}>
      <div className="box--title">
        <p className="box--title__text">{title}</p>
      </div>
      <div className="box__child-container">{children}</div>
    </div>
  )
}

export default Box
