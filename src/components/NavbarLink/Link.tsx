import React, {ReactNode} from 'react';
import styles from '@site/src/components/NavbarLink/styles.module.css';
import clsx from 'clsx';

export interface NavbarLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavbarLink({
  href,
  children,
}: NavbarLinkProps) {

  return (
    <div className={clsx(styles.root)}>
      <a href={href} target="_blank" className={styles.icon}>
        {children}
      </a>
    </div>
  );
}
