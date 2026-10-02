import styles from "./Career.module.css";
import { pilares } from "@/content/post/Career";

export default function Carrera() {
    
    return (
        <section id="carrera" className={styles.carreraSection}>
            <div className={styles.container}>
                {/* Encabezado de la sección */}
                <div className={styles.header}>
                    <span className={styles.subtitle}>Oferta Académica</span>
                    <h2 className={styles.title}>
                        ¿Qué es <span className={styles.highlight}>T.I.C.</span>?
                    </h2>
                    <p className={styles.description}>
                        
                    </p>
                </div>

                {/* Tarjetas de los 4 Pilares */}
                <div className={styles.grid}>
                    {pilares.map((pilar, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>{pilar.icono}</div>
                            <h3 className={styles.cardTitle}>{pilar.titulo}</h3>
                            <p className={styles.cardDesc}>{pilar.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bloque de Campo Laboral / Futuro */}
                <div className={styles.careerBanner}>
                    <div className={styles.bannerInfo}>
                        <h3>Campo Laboral de Gran Demanda </h3>
                        <p>
                            Como Ingeniero en Tecnologías de la Información egresado de la UPTex, podrás desempeñarte como desarrollador de backend o frontend, administrador de infraestructura de servidores y redes, especialista en seguridad informática, analista de datos o líder de proyectos tecnológicos en empresas públicas y privadas tanto nacionales como internacionales.
                        </p>
                    </div>
                    <div className={styles.tagGroup}>
                        <span className={styles.jobTag}>Python</span>
                        <span className={styles.jobTag}>Mysql</span>
                        <span className={styles.jobTag}>CISCO</span>
                        <span className={styles.jobTag}>JAVA</span>
                    </div>
                </div>
            </div>
        </section>
    );
}