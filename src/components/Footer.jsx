import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Columna 1: Identidad del Grupo */}
                <div className={styles.brandCol}>
                    <div className={styles.brandTitle}>
                        <span>Ingeniería en T.I.C.</span>
                        <span className={styles.badge}>3MTII2</span>
                    </div>
                    <p className={styles.description}>
                        Espacio universitario y portal informativo desarrollado por estudiantes de la Universidad Politécnica de Texcoco.
                    </p>
                </div>

                {/* Columna 2: Navegación Rápida */}
                <div className={styles.linksCol}>
                    <h4 className={styles.colTitle}>Secciones</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="#inicio">Inicio</Link></li>
                        <li><Link href="#carrera">La Carrera</Link></li>
                        <li><Link href="#grupo">Grupo 0VIT2</Link></li>
                        <li><Link href="#blog">Blog & Apuntes</Link></li>
                    </ul>
                </div>

                {/* Columna 3: Enlaces Institucionales y Comunidad */}
                <div className={styles.infoCol}>
                    <h4 className={styles.colTitle}>Comunidad</h4>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                GitHub Repositorio
                            </a>
                        </li>
                        <li>
                            <span>Universidad Politécnica de Texcoco</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Línea inferior de Copyright */}
            <div className={styles.bottomBar}>
                <p>© {currentYear} Grupo 3MTII2 — Todos los derechos reservados.</p>
                <p className={styles.tagline}>Diseñado por y para estudiantes</p>
            </div>
        </footer>
    );
}