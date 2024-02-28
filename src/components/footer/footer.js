import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Coded By ♥  
      <Link href="https://github.com/esmanur-uzun" target='_blank'> Esma Nur Uzun</Link>
    </footer>
  )
}
