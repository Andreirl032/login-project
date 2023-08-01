import { ComponentProps } from "react";
import "./HamburgerButton.css";

interface HamburgerButtonProps extends ComponentProps<"button"> {
  isClosed?: boolean;
  className?: string;
}

const HamburgerButton = ({
  isClosed = false,
  className,
  ...rest
}: HamburgerButtonProps) => {
  return (
    <button
      className={`hamburger ${isClosed ? "closed" : ""} ${className}`}
      {...rest}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
};

export default HamburgerButton;
