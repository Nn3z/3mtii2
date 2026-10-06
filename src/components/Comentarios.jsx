'use client';
import { useState } from 'react';
import styles from './Comentarios.module.css';
import { testimonios } from '@/content/post/Comentarios';

export default function Comentarios() {
    const [indexActivo, setIndexActivo] = useState(0);
    const alumno = testimonios[indexActivo];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>VOCES REALES DE LA COMUNIDAD</span>
                    <h2 className={styles.title}>
                        Experiencias y Opiniones del <span className={styles.highlight}>3MTII2</span>
                    </h2>
                    <p className={styles.description}>
                        Respuestas directas de los alumnos sobre las materias, los retos en redes, el proyecto integrador y la vida estudiantil en la UPTex.
                    </p>
                </div>

                {/* Selector de Perspectivas / Alumnos */}
                <div className={styles.selectorGroup}>
                    {testimonios.map((item, idx) => (
                        <button
                            key={item.id}
                            className={`${styles.tabBtn} ${indexActivo === idx ? styles.activeTab : ''}`}
                            onClick={() => setIndexActivo(idx)}
                        >
                            <span>{item.perfil}</span>
                            <small>{item.area}</small>
                        </button>
                    ))}
                </div>

                {/* Tarjeta con Respuestas Reales */}
                <div className={styles.displayCard}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.studentTitle}>{alumno.perfil}</h3>
                            <span className={styles.studentBadge}>{alumno.area}</span>
                        </div>
                    </div>

                    <div className={styles.gridAnswers}>
                        <div className={styles.answerBox}>
                            <h4>¿Qué es lo que más llama la atención?</h4>
                            <p>"{alumno.respuestas.llamaAtencion}"</p>
                        </div>

                        <div className={styles.answerBox}>
                            <h4>Opinión sobre las materias</h4>
                            <p>"{alumno.respuestas.opiniónMaterias}"</p>
                        </div>

                        <div className={styles.answerBox}>
                            <h4>Lo más difícil de Conmutación de Redes</h4>
                            <p>"{alumno.respuestas.redes}"</p>
                        </div>

                        <div className={styles.answerBox}>
                            <h4>La materia de mayor dificultad</h4>
                            <p>"{alumno.respuestas.dificultad}"</p>
                        </div>

                        <div className={styles.answerBox}>
                            <h4>Visión sobre el Proyecto Integrador</h4>
                            <p>"{alumno.respuestas.proyectoIntegrador}"</p>
                        </div>

                        <div className={styles.answerBox}>
                            <h4>¿La carrera era lo que esperabas?</h4>
                            <p>"{alumno.respuestas.expectativa}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}