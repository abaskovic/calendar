import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';

export const Button = ({ onClick, reverse, arrow, children, href, isDisable }) => {
  const buttonClass ='border border-px border-black text-darkMint hover:border-darkMint hover:bg-mint disabled:opacity-30 transition-colors duration-300 rounded-lg p-3'
  if (href) {
    return (
      <a href={href} target="_blank" className={`${buttonClass} text-center `} rel="noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={buttonClass} disabled={isDisable}>
        {arrow && (reverse ? <ChevronLeft /> : <ChevronRight />)}
        {children}
      </button>
    );
  }
};


Button.propTypes = {
  onClick: PropTypes.func,
  reverse: PropTypes.bool, 
  arrow: PropTypes.bool,
  isDisable: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
};