"use client";
import { useState } from "react";
import styles from "./Blog.module.css";

export default function BlogApuntes() {
    const [categoria, setCategoria] = useState("Todas");

    const categorias = ["Todas", "Programación", "Redes", "Bases de Datos", "Sistemas"];

    const apuntes = [
        {
            titulo: "Lorem ipsum dolor sit amet",
            categoria: "Lorem ipsum",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus.",
            autor: "Comunidad 3MTII2",
            fecha: "12 Mar",
            tiempo: "Lorem ipsum dolor sit amet"
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            categoria: "Lorem ipsum",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus.",
            autor: "Comunidad 3MTII2",
            fecha: "12 Mar",
            tiempo: "Lorem ipsum dolor sit amet"
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            categoria: "Lorem ipsum",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus.",
            autor: "Comunidad 3MTII2",
            fecha: "12 Mar",
            tiempo: "Lorem ipsum dolor sit amet"
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            categoria: "Lorem ipsum",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales eleifend mus, parturient natoque habitant odio vitae nisl risus.",
            autor: "Comunidad 3MTII2",
            fecha: "12 Mar",
            tiempo: "Lorem ipsum dolor sit amet"
        }
    ];

    const apuntesFiltrados = categoria === "Todas"
        ? apuntes
        : apuntes.filter(a => a.categoria === categoria);

    return (
        <section id="blog" className={styles.blogSection}>
            <div className={styles.container}>
                {/* Encabezado */}
                <div className={styles.header}>
                    <span className={styles.subtitle}>Recursos Académicos</span>
                    <h2 className={styles.title}>
                        Blog & <span className={styles.highlight}>Apuntes</span>
                    </h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit interdum, auctor proin accumsan nibh sodales
                    </p>
                </div>

                {/* Filtros de Categoría */}
                <div className={styles.filterGroup}>
                    {categorias.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`${styles.filterBtn} ${categoria === cat ? styles.activeFilter : ''}`}
                            onClick={() => setCategoria(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid de Apuntes */}
                <div className={styles.grid}>
                    {apuntesFiltrados.map((apunte, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.badge}>{apunte.categoria}</span>
                                <span className={styles.readTime}>{apunte.tiempo}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{apunte.titulo}</h3>
                            <p className={styles.cardDesc}>{apunte.descripcion}</p>

                            <div className={styles.cardFooter}>
                                <span className={styles.author}>✍️ {apunte.autor}</span>
                                <span className={styles.date}>{apunte.fecha}</span>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}