'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>Coca-Cola</p>
      </div>
      <nav className={`${styles.menu} ${menuAberto ? styles.aberto : ""}`}>
        <ul className={styles.lista}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/sobre">Produção</Link>
          </li>
        </ul>
      </nav>
      <button className={`${styles.abrirMenu} ${menuAberto ? styles.aberto : ""}`} onClick={alternarMenu}>
        {menuAberto ? "✖" : "☰"}
      </button>
    </header>
  );
}