// Mirrors the project cards that used to live in the Astro site's
// src/content/projects/*.mdx. Add an entry here for every project; once a
// project gets a docs section (a top-level <name>/ folder in this repo,
// see README.md), point its `url` at /<name>/intro instead of an external
// subdomain. Set `hidden: true` to keep an entry out of the homepage grid
// (e.g. WIP projects) without deleting it.
const projects = [
  {
    title: 'varistar',
    description: 'A tool for analyzing and visualizing variable star data.',
    url: '/varistar/intro',
    labels: ['Python', 'Astrophysics'],
    packageLabel: 'pip',
    packageUrl: 'https://pypi.org/project/varistar/',
    sourceUrl: 'https://github.com/jj-sm/varistar',
  },
  {
    title: 'env-maker',
    description: 'A tool for managing development environments.',
    url: '/env-maker/intro',
    labels: ['Python', 'Development', 'Tools'],
    packageLabel: 'pip',
    packageUrl: 'https://pypi.org/project/env-maker/',
    sourceUrl: 'https://github.com/jj-sm/env-maker',
  },
  {
    title: 'ogle',
    description:
      'A Python package to interact with the OGLE (Optical Gravitational Lensing Experiment) database, allowing users to query and analyze data related to variable stars and microlensing events.',
    url: '/ogle/intro',
    labels: ['Python', 'Astrophysics', 'Tools'],
    packageLabel: 'pip',
    packageUrl: 'https://pypi.org/project/ogle/',
    sourceUrl: 'https://github.com/jj-sm/ogle',
  },
  {
    title: 'airac-tools',
    description: 'pip package to manage AIRAC cycles dates and related tools.',
    url: 'https://airac-tools.docs.jjsm.science',
    labels: ['Python', 'Aviation', 'Tools'],
    packageLabel: 'pip',
    packageUrl: 'https://pypi.org/project/airac-tools/',
    sourceUrl: 'https://github.com/jj-sm/airac-tools',
  },
  {
    title: 'html2wikijs',
    description: 'A tool to convert HTML content to WikiJS markup.',
    url: 'https://html2wikijs.docs.jjsm.science',
    labels: ['Python', 'JavaScript', 'Tools'],
    sourceUrl: 'https://github.com/jj-sm/html2wikijs',
  },
  {
    title: 'IVAO Aurora Sectorfile',
    description: 'IVAO Colombia Aurora Sectorfile documentation, workflows and tools.',
    url: 'https://aurora.docs.jjsm.science',
    labels: ['Aviation'],
    sourceUrl: 'https://github.com/IVAO-Colombia/co-aurora-sectorfile',
    hidden: true,
  },
  {
    title: 'TemplaTeX',
    description: 'WIP',
    url: 'https://tex.docs.jjsm.science',
    labels: ['Rust', 'TeX', 'CLI', 'Tools'],
    hidden: true,
  },
  {
    title: 'tinto',
    description:
      'Transient Identification and Noise Transformation Operations: TINTO is a Python-based framework designed to simulate, clean, and classify populations of variable stars. By modeling the underlying physics of stellar variability alongside the observational biases of modern surveys (like Gaia, LSST, and ZTF, RUBIN, OGLE)',
    url: 'https://tinto.docs.jjsm.science',
    labels: ['Python', 'Astrophysics'],
    hidden: true,
  },
];

export default projects;
