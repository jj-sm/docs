import React from 'react';
import ProjectCard from '../ProjectCard';
import projects from '../../data/projects';
import styles from './styles.module.css';

export default function ProjectsGrid() {
  const visibleProjects = projects.filter((project) => !project.hidden);
  return (
    <div className={styles.projectsGrid}>
      {visibleProjects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
