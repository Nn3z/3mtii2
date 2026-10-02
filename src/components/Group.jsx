import styles from "./Group.module.css";
import { proyectos } from "@/content/post/Group";

export default function Grupo() {
    

    return (
        <section id="grupo" className={styles.grupoSection}>
            <div className={styles.container}>
                {/* Encabezado */}
                <div className={styles.header}>
                    <span className={styles.subtitle}>Comunidad Estudiantil</span>
                    <h2 className={styles.title}>
                        Conoce al Grupo <span className={styles.highlight}>3MTII2</span>
                    </h2>
                    <p className={styles.description}>
                        El grupo 3MTII2 es un grupo donde se destaca la paciencia, perseverancia y aunque esta carrera esta enfocada mas a las tecnologias y no a lo social, el grupo se enfoca en crecer juntos.
                    </p>
                </div>
                {/* Tarjetas de Proyectos / Logros */}
                <div className={styles.projectsSection}>
                    <h3 className={styles.sectionSub}>Lo que hemos construido juntos</h3>
                    <div className={styles.grid}>
                        {proyectos.map((proy, index) => (
                            <div key={index} className={styles.card}>
                                <span className={styles.materiaTag}>{proy.materia}</span>
                                <h4 className={styles.cardTitle}>{proy.titulo}</h4>
                                <p className={styles.cardDesc}>{proy.desc}</p>
                                <div className={styles.tags}>
                                    {proy.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mosaico / Banner de la Vibra del Salón */}
                <div className={styles.cultureBanner}>
                    <div className={styles.cultureText}>
                        <h3>La vida en el 3MTII2</h3>
                        <p>
                            En este salon encontraras ideas y opiniones innovadoras, los estudiantes cuentan con capacidades y habilidades para  afrontar las adversidades que se lleguen  a presentar en las distintas materias que conforman el plan de estudio.
                        </p>
                    </div>
                    <div className={styles.badgesCol}>
                        <div className={styles.pill}>Paciencia</div>
                        <div className={styles.pill}>Perseverancia</div>
                        <div className={styles.pill}>Crecimiento mutuo</div>
                    </div>
                </div>
            </div>
        </section>
    );
}