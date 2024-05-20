import { StandardInputProps } from './StandardInputProps'
import './TextInput.scss'

interface TextInputProps extends StandardInputProps {
  placeholder: string
  required?: boolean
  type?: 'email' | 'text'
  className?: string
  multiLine?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  required = true,
  type = 'text',
  className = '',
  multiLine = false,
}) => {
  return (
    <>
      {multiLine && (
        <textarea
          placeholder={placeholder}
          className={`text-input ${className}`}
          required={required}
        />
      )}

      {!multiLine && (
        <input
          type={type}
          placeholder={placeholder}
          className={`text-input ${className}`}
          required={required}
        />
      )}
    </>
  )
}

export default TextInput
