import { InputHTMLAttributes } from 'react';

export type InputProps = {
  isValid?: boolean;
  className?: string;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;