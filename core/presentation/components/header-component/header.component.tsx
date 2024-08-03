import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { appRoutes } from '@/core/domain/domain.module';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href={'/'}>
        <img src={'/nawy.svg'} alt="Logo" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <Link href={'/' + appRoutes.listAllAppartments.route} className={styles.link}>
          {appRoutes.listAllAppartments.label_en}
        </Link>
        <Link href={'/' + appRoutes.addApartment.route} className={styles.link}>
          {appRoutes.addApartment.label_en}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
