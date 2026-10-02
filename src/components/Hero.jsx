import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroSection} id="hero">
            <div className={styles.container}>
                {/* Columna Izquierda :)))))))*/}
                <div className={styles.textContent}>
                    <div className={styles.badgeGroup}>
                        <span className={styles.pulseDot}></span>
                        <span>Generación 3MTII2</span>
                    </div>

                    <h1 className={styles.title}>
                        Transformando ideas en <span className={styles.highlight}>soluciones tecnológicas</span>
                    </h1>

                    <p className={styles.description}>
                        Somos el grupo <strong>3MTII2</strong>. Te damos la bienvenida a nuestro espacio donde documentamos el viaje, proyectos y aprendizajes dentro de la carrera de <strong>Tecnologías de la Información y la Comunicación</strong>.
                    </p>

                    <div className={styles.actions}>
                        <Link href="#blog" className={styles.primaryBtn}>
                            Explorar Apuntes
                        </Link>
                        <Link href="#carrera" className={styles.secondaryBtn}>
                            Conocer la Carrera
                        </Link>
                    </div>

                    {/* Tags de Tecnologías */}
                    <div className={styles.techStack}>
                        <span className={styles.techLabel}>Enfoque técnico:</span>
                        <div className={styles.tags}>
                            <span className={styles.tag}>Desarrollo</span>
                            <span className={styles.tag}>Redes</span>
                            <span className={styles.tag}>Bases de Datos</span>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha*/}
                <div className={styles.visualContent}>
                    <div className={styles.codeCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.dots}>
                                <span className={styles.dotRed}></span>
                                <span className={styles.dotYellow}></span>
                                <span className={styles.dotGreen}></span>
                            </div>
                            <span className={styles.cardTitle}>grupo_3mtii2.config.js</span>
                        </div>
                        <div className={styles.cardBody}>
              <pre>
                <code>
{`const grupo = {
  nombre: "3MTII2",
  carrera: "Tecnologías de la Información",
  integrantes: 35,
  combustible: ["Café de 20 pesos", "Tortitas", "Ansiedad por proyectos"],
  estadoActual: "Sobreviviendo a Cano / Genesis / Angel"
};`}
                </code>
              </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}