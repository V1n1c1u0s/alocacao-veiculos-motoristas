import Link from 'next/link';
import styles from '@/styles/Header/NavBar.module.css'
import { LogOut } from '@/pages/api/logout/logout'

export default function NavBar({children}){
  return(
    <>
      <nav>
        <ul className={styles.navlist}>
          {children}
        </ul>
      </nav>
      <Link className={styles.lnk} href="/"><button onClick={LogOut}>Logout</button></Link>
    </>
  )
}
