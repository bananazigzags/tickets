import { ChangeEvent, InputHTMLAttributes, ReactHTML } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  placeholder: string,
  value: string,
  onInput?: (event: ChangeEvent<HTMLInputElement>, name?: string, selectedOption?: string) => void;
  name?: string
}

export type Map = {
  [key: string]: string;
}

export type IconMap = {
  [key: string]: SVGElement
}

export interface TextProp {
  text: string;
}

export interface TimeButtonProps {
  start: string;
  finish: string;
  active: boolean;
  onClick: () => void;
}

export type TimePeriod = Omit<TimeButtonProps, "active" | "onClick">