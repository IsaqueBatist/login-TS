export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  control: any;
  name: string;
  errorMessage?: string;
  placeholder?: string
}