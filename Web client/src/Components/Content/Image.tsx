import './Image.scss'

interface ImageProps {
  alt: string
  src: string
  className?: string
  loading?: 'lazy' | 'eager'
}

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  className = '',
  loading = 'lazy',
}) => {
  return (
    <img
      alt={alt}
      src={src}
      className={`image ${className}`}
      loading={loading}
    />
  )
}

export default Image
