import { InputHTMLAttributes } from "react";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className }: IButton) => (
  <button className={className}>{children}</button>
);

export default Button;
