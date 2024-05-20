import React, { ReactNode } from 'react'
import './Postcard.scss'
import Image from './Image'

interface PostcardProps {
  children: ReactNode
  recipientName?: string
  recipientAddress?: string
  recipientCountry?: string
}

const PostCard: React.FC<PostcardProps> = ({
  children,
  recipientName = '',
  recipientAddress = '',
  recipientCountry = '',
}) => {
  return (
    <div className="postcard">
      <div className="postcard--left">{children}</div>
      <div className="postcard--right">
        <Image
          src="/Background/Postmark.png"
          alt="Black postmark saying 'you are hired'"
          className="postcard--right__image"
        />
        <div className="postcard--right__recipient--container">
          <p className="postcard--right__recipient">{recipientName}</p>
          <p className="postcard--right__recipient">{recipientAddress}</p>
          <p className="postcard--right__recipient">{recipientCountry}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
