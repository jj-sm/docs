import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import GithubIcon from '@site/src/components/GithubIcon';
import LinkedinIcon from '@site/src/components/LinkedinIcon';
import {getProjectForPlugin} from '@site/src/data/docsProjects';
import styles from './styles.module.css';

// The homepage (no active docs plugin) keeps the original, richer header:
// full title + LinkedIn + a generic GitHub profile link. Each project's
// docs route instead gets a minimal, project-specific navbar: just that
// project's name and a GitHub icon linking at ITS OWN repo. No
// themeConfig.navbar.items are used here — see src/data/docsProjects.js.
const HOME_TITLE = 'jj-sm • Projects Documentation';
const HOME_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jj-sm/',
    Icon: LinkedinIcon,
  },
];

function NavbarContentLayout({left, right}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const activePlugin = useActivePlugin();
  const isHome = !activePlugin;
  const project = getProjectForPlugin(activePlugin?.pluginId);

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          {isHome ? (
            <span className={styles.projectName}>{HOME_TITLE}</span>
          ) : (
            project.name && (
              <span className={styles.projectName}>{project.name}</span>
            )
          )}
        </>
      }
      right={
        <>
          {isHome &&
            HOME_LINKS.map(({href, label, Icon}) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
                aria-label={label}>
                <Icon />
              </a>
            ))}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub">
            <GithubIcon />
          </a>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
    />
  );
}
