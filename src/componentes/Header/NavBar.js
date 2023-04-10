import Link from 'next/link';
import styles from '@/styles/Header/NavBar.module.css'

export default function NavBar({children}){
  return(
    <>
      <nav>
        <ul className={styles.navlist}>
          {children}
        </ul>
      </nav>
      <Link className={styles.lnk} href="/"><button>Logout</button></Link>
    </>
  )
}
