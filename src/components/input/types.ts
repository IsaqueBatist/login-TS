import { Control } from "react-hook-form";

export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  control: Control<any, any>
  name: string
}