import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header/Header.module.css'

export default function Header({children}){
  return(
    <header className={styles.header}>
        <Link className={styles.logo} href="#">
          <Image
            className={styles.imgLogo}
            src="/UFRPE.png"
            alt="UFRPELogo"
            fill
            priority
          />
        </Link>
        {children}
      </header>
  )
}
