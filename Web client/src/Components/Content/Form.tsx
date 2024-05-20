import { ReactNode } from 'react'
import './Form.scss'
import Button from '../Inputs/Button'

interface FormProps {
  className?: string
  children: ReactNode
  submitButtonText?: string
}

const Form: React.FC<FormProps> = ({
  className = '',
  children,
  submitButtonText = '',
}) => {
  return (
    <form className={`form ${className}`}>
      <div className="form__child-container">{children}</div>
      <Button type="submit" text={submitButtonText} />
    </form>
  )
}

export default Form
