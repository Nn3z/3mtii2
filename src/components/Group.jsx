import styles from "./Group.module.css";

export default function Grupo() {
    const proyectos = [
        {
            titulo: "Lorem ipsum dolor sit",
            materia: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend",
            tags: ["Lorem", "Lorem", "Lorem"]
        },
        {
            titulo: "Lorem ipsum dolor sit",
            materia: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend",
            tags: ["Lorem", "Lorem", "Lorem"]
        },
        {
            titulo: "Lorem ipsum dolor sit",
            materia: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend",
            tags: ["Lorem", "Lorem", "Lorem"]
        }
    ];

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
                        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,
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
                            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,
                        </p>
                    </div>
                    <div className={styles.badgesCol}>
                        <div className={styles.pill}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.pill}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.pill}>Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
        </section>
    );
}