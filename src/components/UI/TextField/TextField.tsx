import {ChangeEvent, forwardRef, InputHTMLAttributes} from 'react'
import classNames from 'classnames'
import styles from './TextField.module.scss'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'dark';
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({className, value, variant, onChange, ...props}, ref) => {
  return (
    <input
        ref={ref}
        className={classNames(
            styles.textField,
            variant === 'dark' && styles.dark,
            className
        )}
        value={value}
        onChange={onChange}
        {...props}
    />
  );
})

TextField.displayName = 'TextField'