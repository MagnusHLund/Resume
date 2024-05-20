import React, { ReactNode } from 'react'
import './TextPanel.scss'
import cn from 'classnames'

interface TextPanelProps {
  className?: string
  title: string
  children: ReactNode
  centerChildren?: boolean
}

const TextPanel: React.FC<TextPanelProps> = ({
  className = '',
  title,
  children,
  centerChildren = false,
}) => {
  return (
    <div className={`${className} text-panel`}>
      <h2 className="text-panel__title">{title}</h2>
      <div className={cn('text-panel__children', { centerChildren })}>
        {children}
      </div>
    </div>
  )
}

export default TextPanel
