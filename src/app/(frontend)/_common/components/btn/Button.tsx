import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string | null;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  href,
  variant = 'primary',
  ...props
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(styles.root, styles[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles.root, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
