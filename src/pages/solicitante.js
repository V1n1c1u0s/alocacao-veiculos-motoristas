import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/solicitante.module.css'

export default function Solicitante(){
  return(
    <>
      <Head>
        <title>Solicitante</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
        <nav>
          <ul className={styles.navlist}>
            <li className={styles.lnk}><Link className={styles.lnk} href="/solicitante"><span className={styles.span}>Página Inicial</span></Link></li>
            <li className={styles.lnk}><Link className={styles.lnk} href="/agendamentos"><span className={styles.span}>Agendamentos</span></Link></li>
          </ul>
        </nav>
        <Link className={styles.lnk} href="/logout"><button>Logout</button></Link>
      </header>
      <div className={styles.containerr}></div>
    </>
  );
}
