import { ChangeEvent, InputHTMLAttributes, ReactHTML } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  placeholder: string,
  value?: string,
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string
}