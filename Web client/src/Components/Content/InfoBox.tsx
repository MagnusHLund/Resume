import Image from './Image'
import './InfoBox.scss'

export type socialMedia = { link: string; imagePath: string; alt: string }[]
export type AdditionalDetails = {
  text: string
  imagePath: string
  alt: string
}[]
export type personalDetails = {
  imagePath: string
  name: string
  profession: string
}

interface InfoBoxProps {
  personalDetails: personalDetails
  socialMedia: socialMedia
  AdditionalDetails: AdditionalDetails
  className?: string
  minWidth?: string
}

const InfoBox: React.FC<InfoBoxProps> = ({
  personalDetails,
  socialMedia,
  AdditionalDetails,
  className,
  minWidth = '25%',
}) => {
  return (
    <div className={`info-box ${className}`} style={{ minWidth: minWidth }}>
      <div className="info-box--top">
        <Image
          src={personalDetails.imagePath}
          alt={personalDetails.name}
          className="info-box--top__image"
        />
        <div className="info-box--top__text-container">
          <h2 className="info-box--top__name">{personalDetails.name}</h2>
          <h4 className="info-box--top__profession">
            {personalDetails.profession}
          </h4>
          <div className="info-box--top__social-media">
            {socialMedia.map((media) => (
              <a
                key={media.link}
                href={media.link}
                target="blank"
                className="info-box--top__social-media--icon"
              >
                <Image src={media.imagePath} alt={media.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="info-box--bottom">
        {AdditionalDetails.map((detail) => (
          <div key={detail.text} className="info-box--bottom__row">
            <Image
              src={detail.imagePath}
              alt={detail.alt}
              className="info-box--bottom__image"
            />
            <p className="info-box--bottom__text">{detail.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoBox
