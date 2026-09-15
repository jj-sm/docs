import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import GithubIcon from '@site/src/components/GithubIcon';
import LinkedinIcon from '@site/src/components/LinkedinIcon';
import docsProjects, {DEFAULT_PROJECT} from '@site/src/data/docsProjects';
import styles from './styles.module.css';

// Above this many projects, split the Documentation list into two columns
// so it doesn't grow taller than the Contact column next to it.
const DOCS_TWO_COLUMN_THRESHOLD = 4;

const CONTACT_LINKS = [
  {label: 'GitHub', href: DEFAULT_PROJECT.repo, Icon: GithubIcon},
  {label: 'LinkedIn', href: 'https://www.linkedin.com/in/jj-sm/', Icon: LinkedinIcon},
];

// Site-wide footer: a "Documentation" column listing every project (from
// src/data/docsProjects.js) and a "Contact" column with GitHub/LinkedIn.
// Unlike Navbar/Content, this is the same on every route.
function Footer() {
  const {footer} = useThemeConfig();

  if (!footer) {
    return null;
  }
  const {copyright, logo, style} = footer;
  const projectEntries = Object.entries(docsProjects);

  return (
    <FooterLayout
      style={style}
      links={
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <div className={styles.columnTitle}>Documentation</div>
            <ul
              className={clsx(styles.columnList, {
                [styles['columnList--multi']]:
                  projectEntries.length > DOCS_TWO_COLUMN_THRESHOLD,
              })}>
              {projectEntries.map(([id, project]) => (
                <li key={id}>
                  <Link href={project.route} className={styles.columnLink}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.columnTitle}>Contact</div>
            <ul className={styles.columnList}>
              {CONTACT_LINKS.map(({label, href, Icon}) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}>
                    <Icon />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
      logo={logo && <FooterLogo logo={logo} />}
      copyright={
        copyright && (
          <div className={styles.copyright}>
            <FooterCopyright copyright={copyright} />
          </div>
        )
      }
    />
  );
}
export default React.memo(Footer);
