import Image from 'next/image';
import styles from './Logo.module.scss';
import Link from 'next/link';

const Logo = ({
  variant = 'inHeader',
}: {
  variant?: 'inHeader' | 'inFooter';
}) => {
  return (
    <Link href={'/'} className={`${styles.root} ${styles[variant]}`}>
      <Image src="/images/honne-logo.png" alt="logo" width={78} height={20} />
      <div>
        <span>Asian</span>
        <br />
        <span>street&nbsp;food</span>
      </div>
    </Link>
  );
};

export default Logo;
