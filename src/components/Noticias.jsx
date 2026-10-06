import styles from "./Noticias.module.css";
import { noticiasYActividades } from "@/content/post/Noticias";

export default function Noticias() {
    return (
        <section id="noticias" className={styles.noticiasSection}>
            <div className={styles.container}>
                {/* Encabezado de Sección */}
                <div className={styles.header}>
                    <span className={styles.subtitle}>Actualidad del 3MTII2</span>
                    <h2 className={styles.title}>
                        Noticias y <span className={styles.highlight}>Próximas Actividades</span>
                    </h2>
                    <p className={styles.description}>
                        Mantente al tanto de los entregables, avisos de laboratorio, proyectos e hitos académicos del grupo.
                    </p>
                </div>

                {/* Grid de Noticias */}
                <div className={styles.grid}>
                    {noticiasYActividades.map((item) => (
                        <article key={item.id} className={`${styles.card} ${item.urgente ? styles.urgenteCard : ''}`}>
                            <div className={styles.cardHeader}>
                                <span className={styles.categoryBadge}>{item.categoria}</span>
                                <span className={styles.dateBadge}>{item.fecha}</span>
                            </div>

                            <h3 className={styles.cardTitle}>{item.titulo}</h3>
                            <p className={styles.cardDesc}>{item.descripcion}</p>

                            <div className={styles.tags}>
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={styles.tag}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}