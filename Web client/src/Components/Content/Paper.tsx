import React, { ReactNode } from 'react'
import './Paper.scss'

interface PaperProps {
  children: ReactNode
  title?: string
  className?: string
}

const Paper: React.FC<PaperProps> = ({
  children,
  title = '',
  className = '',
}) => {
  return (
    <div className={`paper ${className}`}>
      <b className="paper--title">{title}</b>
      <div className="paper__children">{children}</div>
    </div>
  )
}

export default Paper
