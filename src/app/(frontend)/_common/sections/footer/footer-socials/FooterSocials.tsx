import Image from 'next/image';
import Link from 'next/link';
import styles from './FooterSocials.module.scss';

const FooterSocials = () => {
  return (
    <div className={styles.root}>
      <Link href={'#'}>
        <Image
          src="/images/InstagramLogo.svg"
          alt="instagram"
          width={24}
          height={24}
        />{' '}
        мы в инстаграм
      </Link>
    </div>
  );
};

export default FooterSocials;
