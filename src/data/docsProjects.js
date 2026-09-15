// Per-project nav/footer identity, keyed by the plugin-content-docs `id` in
// docusaurus.config.js. Used by src/theme/Navbar/Content and
// src/theme/Footer to render a different navbar/footer per project route
// (see useActivePlugin() in both). The homepage and any non-docs route get
// this same fallback (no project name, generic GitHub profile link).
export const DEFAULT_PROJECT = {
  name: null,
  repo: 'https://github.com/jj-sm',
};

const docsProjects = {
  varistar: {name: 'Varistar', repo: 'https://github.com/jj-sm/varistar', route: '/varistar/intro'},
  'env-maker': {name: 'env-maker', repo: 'https://github.com/jj-sm/env-maker', route: '/env-maker/intro'},
  ogle: {name: 'OGLE', repo: 'https://github.com/jj-sm/ogle', route: '/ogle/intro'},
  html2wikijs: {name: 'HTML2WikiJS', repo: 'https://github.com/jj-sm/html2wikijs', route: 'https://github.com/jj-sm/html2wikijs'},
  'airac-tools': {name: 'AIRAC Tools', repo: 'https://github.com/jj-sm/airac-tools', route: 'https://github.com/jj-sm/airac-tools'},
};

export function getProjectForPlugin(pluginId) {
  if (!pluginId) return DEFAULT_PROJECT;
  return docsProjects[pluginId] ?? DEFAULT_PROJECT;
}

export default docsProjects;
