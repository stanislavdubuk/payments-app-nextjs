import * as React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(s.root, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
