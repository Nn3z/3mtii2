"use client";
import { useState } from "react";
import styles from "./Blog.module.css";
import { apuntes } from "@/content/post/post-generales.json.js";

export default function BlogApuntes() {
    const [categoria, setCategoria] = useState("Todas");

    const categorias = ["Todas", "Programación", "Redes", "Humanidades", "Sistemas", "Eventos"];

   
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
                        descubre aprendizajes que llenan de creatividad y conocimiento a nuestro salon
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
                            {/* Contenedor de la Imagen */}
                            <div className={styles.imageContainer}>
                                <img 
                                    src={apunte.imagen} 
                                    alt={apunte.titulo} 
                                    className={styles.cardImage} 
                                    // Imagen por defecto si la ruta falla o aún no agregas el archivo
                                    onError={(e)=>{e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'}}
                                />
                                <span className={styles.badge}>{apunte.categoria}</span>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.readTime}>{apunte.tiempo}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{apunte.titulo}</h3>
                                <p className={styles.cardDesc}>{apunte.descripcion}</p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.author}>✍️ {apunte.autor}</span>
                                    <span className={styles.date}>{apunte.fecha}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}