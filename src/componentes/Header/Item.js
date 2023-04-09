import Link from 'next/link';
import styles from '@/styles/Header/Item.module.css'

export default function Item({href, text}){
  return(
    <>
        <li className={styles.lnk}><Link className={styles.lnk} href={href}><span className={styles.span}>{text}</span></Link></li>
    </>
  )
}
