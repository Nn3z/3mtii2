import Link from 'next/link';
import styles from './DetalleApunte.module.css';
import { DETALLES_APUNTES } from '@/content/post/Detalles_apuntes';

export default async function PaginaDetalle({ params }) {
    const { id } = await params;
    const apunte = DETALLES_APUNTES[id];

    if (!apunte) {
        return (
            <div className={styles.notFound}>
                <h2>Artículo no encontrado</h2>
                <Link href="/">Regresar al inicio</Link>
            </div>
        );
    }

    return (
        <main className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
                {/* Botón para regresar */}
                <Link href="/#blog" className={styles.backButton}>
                    ← Volver al inicio
                </Link>

                <span className={styles.badge}>{apunte.categoria}</span>
                <h1 className={styles.title}>{apunte.titulo}</h1>
                
                <div className={styles.metaInfo}>
                    <span>✍️ {apunte.autor}</span>
                    <span>📅 {apunte.fecha}</span>
                </div>

                {/* Texto largo e información extendida */}
                <div className={styles.articleBody}>
                    <p>{apunte.contenidoPrincipal}</p>
                    <p>
                        Este tipo de iniciativas demuestran que el grupo 3MTII2 no solo se concentra en código o redes, 
                        sino en construir un ambiente humano, resiliente y preparado para cualquier reto que se presente en la UPTex.
                    </p>
                </div>

                {/* Sección de galería de imágenes */}
                <h3 className={styles.galleryTitle}>Galería de Imágenes</h3>
                <div className={styles.galleryGrid}>
                    {apunte.galeria.map((img, index) => (
                        <div key={index} className={styles.galleryItem}>
                            <img 
                                src={img} 
                                alt={`Evidencia ${index + 1}`} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}