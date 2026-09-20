'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

// ¡Sigue estando duro este Navbar! 😎
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topContainer}>
                {/* Marca / Identidad */}
                <Link href="/" className={styles.brand} onClick={closeMenu}>
                    <img className={styles.brandLogo} src="/images/logo_ti.png" alt="Logo TI" />
                    <div className={styles.titleWrapper}>
                        <h1 className={styles.brandTitle}>
                            Tecnologías de la Información y la Comunicación
                        </h1>
                        <span className={styles.brandBadge}>3MTII2</span>
                    </div>
                </Link>

                {/* Botón Hamburguesa */}
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

            {/* Navegación */}
            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                <ul className={styles.links}>
                    <li>
                        <Link href="#hero" className={styles.link} onClick={closeMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#carrera" className={styles.link} onClick={closeMenu}>
                            La Carrera
                        </Link>
                    </li>
                    <li>
                        <Link href="#grupo" className={styles.link} onClick={closeMenu}>
                            Grupo 3MTII2
                        </Link>
                    </li>
                    <li>
                        <Link href="#blog" className={styles.link} onClick={closeMenu}>
                            Blog / Apuntes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}