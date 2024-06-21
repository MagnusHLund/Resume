import { useEffect, useState } from 'react'
import Form from '../Content/Form'
import PostCard from '../Content/Postcard'
import TextInput from '../Inputs/TextInput'
import './ContactRoute.scss'
import Paper from '../Content/Paper'
import { useTranslation } from '../../Hooks/useTranslation'

type formType = 'post-card__form' | 'paper__form'

const ContactRoute: React.FC = () => {
  const [formType, setFormType] = useState<formType>('post-card__form')
  const t = useTranslation()

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 1300
        ? setFormType('post-card__form')
        : setFormType('paper__form')

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  })

  const form = (
    <Form
      className="contact__form"
      submitButtonText="contact.send"
      ButtonClassName={formType === 'post-card__form' ? 'card' : 'note'}
    >
      <p className={`contact__form--text ${formType}`}>{t('contact.hello')}</p>
      <TextInput
        placeholder={t('contact.message')}
        className={`contact__form--message ${formType}`}
        multiLine={true}
      />
      <p className={`contact__form--text ${formType}`}>
        {t('contact.sincerely')}
      </p>
      <TextInput
        placeholder={t('contact.your name')}
        className={`contact__form--name ${formType}`}
      />
      <TextInput
        placeholder={t('contact.your email')}
        type="email"
        className={`contact__form--email ${formType}`}
      />
    </Form>
  )

  return (
    <div className="contact route">
      {formType == 'post-card__form' ? (
        <PostCard
          recipientName="Magnus Herringe Lund"
          recipientAddress="Amager, 2300"
          recipientCountry={t('contact.denmark')}
        >
          {form}
        </PostCard>
      ) : (
        <Paper>{form}</Paper>
      )}
    </div>
  )
}

export default ContactRoute
