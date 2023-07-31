import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FetchProps {
  year?: number;
  limit?: number;
}

export interface HomeProps {
  searchParams: FetchProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomInputProps {
  id: string;
  wrapperClassName?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  onValueChange: (value: string) => void
  [key: string]: any;
}
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
