import React from 'react'
import { useTranslation } from '../../Hooks/useTranslation'
import TextPanel from '../Content/TextPanel'
import Image from '../Content/Image'
import calculateAge from '../../Utils/CalculateAge'
import './HomeRoute.scss'
import personalDetails from './../../Component data/PersonalDetails.json'
import socialMedia from './../../Component data/SocialMedia.json'
import Paragraph from '../Content/Paragraph'
import VisitorCount from '../Content/VisitorCount'

const HomeRoute: React.FC = () => {
  const t = useTranslation()

  const age = calculateAge(personalDetails[0].Birthday)

  return (
    <div className="home route">
      <div className="home--top">
        <div className="home--top--left">
          <TextPanel title={t('about.about me')}>
            <Paragraph
              texts={[
                t('about.me'),
                t('about.diagnosis'),
                t('about.server'),
                t('about.programming'),
                t('about.dedicated'),
              ]}
            />
          </TextPanel>
        </div>
        <div className="home--top--middle">
          <Image
            src="/Me/Home.jpg"
            alt=""
            className="home--top--middle__image"
          />
        </div>
        <div className="home--top--right">
          <TextPanel title={t('details.details')}>
            <div className="home--top--right__details">
              <b>{t('details.name')}</b>
              <p>{personalDetails[0].name}</p>
            </div>
            <div className="home--top--right__details">
              <b>{t('details.age')}</b>
              <p>{age}</p>
            </div>
            <div className="home--top--right__details">
              <b>{t('details.home')}</b>
              <p>{t('details.location')}</p>
            </div>
            <div className="home--top--right__details">
              <b>{t('details.social media')}</b>
              {socialMedia.map((platform, index) => (
                <div
                  key={index}
                  className="home--top--right__socials--container"
                >
                  {Object.entries(platform).map(([key, value]) => (
                    <div key={key}>
                      <a href={value.Link} target="blank">
                        <Image src={value.ImagePath} alt={value.Name} />
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </TextPanel>
        </div>
      </div>
      <div className="home--bottom">
        <div className="home--bottom--left">
          <TextPanel title={t('what i do.what i do')}>
            <Paragraph
              texts={[
                t('what i do.free time'),
                t('what i do.hardware'),
                t('what i do.designing'),
              ]}
            />
          </TextPanel>
        </div>
        <div className="home--bottom--middle">
          <TextPanel
            title={t('total visitors.total visitors')}
            centerChildren={true}
          >
            <VisitorCount />
            {t('total visitors.based on')}
          </TextPanel>
        </div>
        <div className="home--bottom--right">
          <TextPanel title={t('jobs.jobs')}>
            <Paragraph texts={[t('jobs.current'), t('jobs.swiipe')]} />
          </TextPanel>
        </div>
      </div>
    </div>
  )
}

export default HomeRoute
