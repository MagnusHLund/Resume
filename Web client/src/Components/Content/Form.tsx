import { ReactNode } from 'react'
import './Form.scss'
import Button from '../Inputs/Button'

interface FormProps {
  className?: string
  children: ReactNode
  submitButtonText?: string
  ButtonClassName?: string
}

const Form: React.FC<FormProps> = ({
  className = '',
  children,
  submitButtonText = '',
  ButtonClassName = '',
}) => {
  return (
    <form className={`form ${className}`}>
      <div className="form__child-container">{children}</div>
      <Button
        type="submit"
        text={submitButtonText}
        className={ButtonClassName}
      />
    </form>
  )
}

export default Form
