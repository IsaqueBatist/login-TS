export interface IButton {
  title: string,
  onClick?:  React.MouseEventHandler<HTMLButtonElement>,
  type?: string,
  disabled: boolean
}