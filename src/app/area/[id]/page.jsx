import { notFound } from 'next/navigation';
import { areasDetalle } from '@/content/post/AreasData';
import styles from './areaDetalle.module.css';
import Link from 'next/link';

export function generateStaticParams() {
    return Object.keys(areasDetalle).map((id) => ({ id }));
}

export default async function AreaDetallePage({ params }) {
    const { id } = await params;
    const data = areasDetalle[id];

    if (!data) {
        notFound();
    }

    return (
        <main className={styles.mainContainer}>
            <div className={styles.wrapper}>
                <Link href="/#carrera" className={styles.backLink}>
                    ← Volver al inicio
                </Link>

                <div className={styles.headerSection}>
                    <span className={styles.iconBadge}>{data.icono}</span>
                    <h1>{data.titulo}</h1>
                    <p className={styles.subtitle}>{data.subtitulo}</p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.textColumn}>
                        <div className={styles.cardBox}>
                            <h3>Acerca del área</h3>
                            <p>{data.descripcionAmplia}</p>
                        </div>

                        <div className={styles.cardBox}>
                            <h3>Opiniones y vivencias del 3MTII2</h3>
                            <ul className={styles.opinionsList}>
                                {data.opinionesAlumnos.map((op, idx) => (
                                    <li key={idx}>"{op}"</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <img src={data.imagen} alt={data.titulo} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}