'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Image className={styles.logo} src='/Images/coca_png-removebg-preview.png' alt = "logo coca" width={190} height={70}/>

      </div>
      <nav className={`${styles.menu} ${menuAberto ? styles.aberto : ""}`}>
        <ul className={styles.lista}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/sobre">Produção</Link>
          </li>
          <li>
            <Link href="/parceria">Parceria</Link>
          </li>
        </ul>
      </nav>
      <button className={`${styles.abrirMenu} ${menuAberto ? styles.aberto : ""}`} onClick={alternarMenu}>
        {menuAberto ? "✖" : "☰"}
      </button>
    </header>
  );
}