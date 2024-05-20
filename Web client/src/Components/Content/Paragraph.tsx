import './Paragraph.scss'

interface ParagraphProps {
  texts: string[]
}

const Paragraph: React.FC<ParagraphProps> = ({ texts }) => {
  return (
    <>
      {texts.map((text) => (
        <p key={text} className="paragraph">
          {text}
        </p>
      ))}
    </>
  )
}

export default Paragraph
