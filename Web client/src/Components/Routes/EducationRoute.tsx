import './EducationRoute.scss'
import { useTranslation } from '../../Hooks/useTranslation'
import Book from '../Content/Book'
import Box from '../Content/Box'
import Paragraph from '../Content/Paragraph'
import List from '../Content/List'

const EducationRoute: React.FC = () => {
  const t = useTranslation()

  return (
    <div className="education route">
      <div className="education__books--container">
        <Book
          BookTitle={t('h1.title')}
          PageHeader={t('h1.title')}
          className="education__book"
        >
          <div>
            <h4>{t('h1.grades')}</h4>
            <List
              listOptions={[
                t('h1.client-side'),
                t('h1.OOP'),
                t('h1.Basic'),
                t('h1.database programming'),
                t('h1.database server'),
                t('h1.server admin and security'),
                t('h1.computer technology'),
              ]}
            ></List>
          </div>
          <div>
            <br />
            <h4>{t('h1.teacher')}</h4>
            <p>{t('h1.teachers message')}</p>
          </div>
        </Book>
      </div>
      <div>
        <Box title={t('zbc.current education')}>
          <Paragraph texts={[t('zbc.explanation'), t('zbc.periods')]} />
        </Box>
        <Box title={t('attended schools.attended')}>
          {t('attended schools.boarding school')}
        </Box>
      </div>
    </div>
  )
}

export default EducationRoute
