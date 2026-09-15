import React from 'react';
import Layout from '@theme/Layout';
import ProjectsGrid from '../components/ProjectsGrid';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Projects Documentation"
      description="jj-sm public projects documentation index">
      <main className={styles.main}>
        <h1>Projects Documentation</h1>
        <p>
          Welcome to my projects documentation index! Here you'll find a collection of
          all my public projects, each with its own documentation. Feel free to
          explore and learn more about the work I've done. If you have any questions
          or want to collaborate, don't hesitate to reach out!
        </p>
        <p>
          Whether you're a fellow developer, a student, or just curious about my
          projects, I hope you find this documentation helpful and informative. Happy
          exploring!
        </p>
        <hr />
        <ProjectsGrid />
      </main>
    </Layout>
  );
}
