import { ReactNode } from 'react'
import cn from 'classnames'
import './ThinkingBubble.scss'

interface ThinkingBubbleProps {
  className?: string
  children: ReactNode
  title?: string
  isBig?: boolean
  sideSpacing?: boolean
}

const ThinkingBubble: React.FC<ThinkingBubbleProps> = ({
  className = '',
  children,
  title = '',
  isBig = false,
  sideSpacing = true,
}) => {
  return (
    <div
      className={cn(`thinking-bubble ${className}`, {
        big: isBig,
        small: !isBig,
      })}
    >
      {title && <p className="thinking-bubble__title">{title}</p>}
      <div
        className={cn('thinking-bubble__child-container', {
          sideSpacing: sideSpacing,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default ThinkingBubble
