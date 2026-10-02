'use client';

import { useState } from 'react';
import styles from './VideoCarrusel.module.css';

export default function VideoCarrusel({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVideo = videos[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <h3 className={styles.carouselTitle}>Video Principal y Proyectos 0VIT2</h3>
      
      <div className={styles.mainPlayerCard}>
        <button className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev}>
          &#10094;
        </button>

        <div className={styles.videoWrapper}>
          {currentVideo.type === 'youtube' ? (
            <iframe
              src={`${currentVideo.url}${currentVideo.url.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            /* Agregamos autoPlay y muted para videos locales MP4 */
            <video controls autoPlay muted playsInline preload="auto" key={currentVideo.url}>
              <source src={currentVideo.url} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          )}
        </div>

        <button className={`${styles.navButton} ${styles.next}`} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}