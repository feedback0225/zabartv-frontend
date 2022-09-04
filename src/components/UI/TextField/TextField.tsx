import {forwardRef, InputHTMLAttributes} from 'react'
import classNames from 'classnames'
import styles from './TextField.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'dark';
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({className, variant, ...props}, ref) => {
  return (
    <input
        ref={ref}
        className={classNames(
          styles.textField,
          variant === 'dark' && styles.dark,
          className
        )}
        {...props}
    />
  );
})

TextField.displayName = 'TextField'