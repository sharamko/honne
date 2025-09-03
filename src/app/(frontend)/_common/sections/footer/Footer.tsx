import { NavItem } from '@/app/(frontend)/layout';
import Container from '../../container/container';
import styles from './Footer.module.scss';
import Logo from '../../components/logo/Logo';
import Nav from '../../components/nav/Nav';
import FooterContacts from './footer-contacts/FooterContacts';
import Link from 'next/link';
import FooterSocials from './footer-socials/FooterSocials';
import FooterPayment from './footer-payment/FooterPayment';

export type ContactType = {
  label: string;
  url?: string;
  text?: string;
};

const contacts: ContactType[] = [
  {
    label: 'получение заказов:',
    url: 'tel:+48731902546',
    text: '+48731902546',
  },
  {
    label: 'пн-чт:',
    text: '11:00 - 22:00',
  },
  {
    label: 'пт-вс:',
    text: '12:00 - 23:00',
  },
];

const Footer = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <Logo variant="inFooter" />
        <Nav variant="inFooter" data={navItems} />
        <FooterContacts data={contacts} />
        <FooterSocials />
        <div className={styles.bottom}>
          <FooterPayment />
          <div className={styles.address}>
            <span>адрес:</span> Ul. Nowogrodzka 8, 00-513 Warszawa
          </div>
          <span className={styles.copyright}>© 2025 Copyright</span>
          <span className={styles.created}>
            site Created by{' '}
            <Link target="_blank" href="https://sinhrone.io/">
              Sinhrone.io
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
