import styles from "./Career.module.css";

export default function Carrera() {
    const pilares = [
        {
            icono: "❤️",
            titulo: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,"
        },
        {
            icono: "❤️",
            titulo: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,"
        },
        {
            icono: "❤️",
            titulo: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,"
        },
        {
            icono: "❤️",
            titulo: "Lorem ipsum ",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,"
        }
    ];

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
                        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,
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
                            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus. Mollis interdum dui quis convallis orci rhoncus per imperdiet sociosqu, est platea augue magnis sed dis senectus faucibus,
                        </p>
                    </div>
                    <div className={styles.tagGroup}>
                        <span className={styles.jobTag}>Lorem ipsum</span>
                        <span className={styles.jobTag}>Lorem ipsum</span>
                        <span className={styles.jobTag}>Lorem ipsum</span>
                        <span className={styles.jobTag}>Lorem ipsum</span>
                    </div>
                </div>
            </div>
        </section>
    );
}