import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import { appRoutes } from '@/core/domain/domain.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href={'/'}>
        <img src={'/nawy.svg'} alt="Logo" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <Link href={'/' + appRoutes.listAllAppartments.route} className={styles.link}>
          <FontAwesomeIcon icon={faList}/>
          &nbsp;
          {appRoutes.listAllAppartments.label_en}
        </Link>
        <Link href={'/' + appRoutes.addApartment.route} className={styles.link}>
          <FontAwesomeIcon icon={faPlus}/>
          &nbsp;
          {appRoutes.addApartment.label_en}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
