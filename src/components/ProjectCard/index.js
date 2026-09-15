import React from 'react';
import styles from './styles.module.css';

function seedHash(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export default function ProjectCard({
  title,
  description,
  image,
  url,
  labels,
  packageLabel,
  packageUrl,
  sourceUrl,
}) {
  const seed = seedHash(title);
  const hue1 = seed % 360;
  const hue2 = (seed + 110) % 360;
  const hue3 = (seed + 220) % 360;
  const external = /^https?:\/\//.test(url);

  return (
    <div className={styles.projectCard}>
      {image ? (
        <img src={image} alt={title} className={styles.cardImage} />
      ) : (
        <div
          className={styles.cardGradient}
          style={{
            '--c1': `hsl(${hue1} 95% 62%)`,
            '--c2': `hsl(${hue2} 92% 58%)`,
            '--c3': `hsl(${hue3} 90% 58%)`,
          }}
        >
          <div className={styles.grain} />
        </div>
      )}
      <div className={styles.cardContent}>
        <div>
          <h3 style={{fontFamily: 'monospace'}}>{title}</h3>
          {labels && labels.length > 0 && (
            <div className={styles.labelsContainer}>
              {labels.map((label) => (
                <span className={styles.label} key={label}>
                  {label}
                </span>
              ))}
            </div>
          )}
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonsContainer}>
          <a
            href={url}
            className={`${styles.cardButton} ${styles.cardButtonPrimary}`}
            {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
            <img src="/img/docs.svg" alt="" className={styles.buttonIcon} />
            Docs
          </a>
          {packageLabel && packageUrl && (
            <a
              href={packageUrl}
              className={`${styles.cardButton} ${styles.cardButtonPackage}`}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/img/download.svg" alt="" className={styles.buttonIcon} />
              {packageLabel}
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              className={`${styles.cardButton} ${styles.cardButtonSource}`}
              target="_blank"
              rel="noopener noreferrer">
              <img src="/img/repo.svg" alt="" className={styles.buttonIcon} />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
