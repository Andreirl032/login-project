import { ComponentProps } from "react";
import "./HamburgerButton.css";

interface HamburgerButtonProps extends ComponentProps<"button"> {
  isOpen?: boolean;
  className?: string;
}

const HamburgerButton = ({
  isOpen = false,
  className,
  ...rest
}: HamburgerButtonProps) => {
  return (
    <button
      className={`hamburger ${isOpen ? "open" : ""} ${className}`}
      {...rest}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
};

export default HamburgerButton;
