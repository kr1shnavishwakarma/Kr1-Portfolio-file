// gitprofile.config.ts

const base = '/gitprofile/';

const CONFIG = {
  github: {
    username: 'kr1shnavishwakarma', // Your GitHub org/user name. (This is the only required config)
    // Overrides the avatar fetched from GitHub with a custom local image.
    // Leave empty ('') to use your live GitHub avatar instead.
    avatarOverride: `${base}profile-photo.png`,
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base,
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Krishna Rishikesh Vishwakarma',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '+91 7262979650',
    email: 'kv8900830@gmail.com',
  },
  resume: {
    fileUrl: `${base}resume.pdf`, // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'Java',
    'Pandas',
    'NumPy',
    'Scikit-Learn',
    'Matplotlib',
    'Power BI',
    'Excel',
    'PowerPoint',
    'Tableau',
    'MySQL',
    'SQLite',
    'PyCharm',
    'Jupyter Notebook',
    'Visual Studio Code',
    'IntelliJ IDEA',
  ],
  experiences: [
    {
      company: 'EVERYKART',
      position: 'Business Responsibility',
      from: 'January 2020',
      to: 'March 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Business Ownership of Two Brands',
      body: 'Everykart and Balsscart — worldwide certification for E-commerce brands with 8 lakh+ customers and 15,000+ reviews.',
      year: 'March 2023',
      link: '',
    },
    {
      name: 'E-commerce Brand Collaboration',
      body: 'Data ecosystem fundamentals including the ETL process, data gathering, and cleaning for analysis preparation.',
      year: 'March 2023',
      link: '',
    },
    {
      name: 'Foundations: Data, Data, Everywhere (Google)',
      body: 'Google certification covering foundational data analysis concepts.',
      year: 'March 2021',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Maharashtra Govt. College',
      degree: 'Master of Computer Application',
      from: 'June 2022',
      to: 'August 2024',
    },
    {
      institution: 'G.M.E.H. School & College',
      degree: 'Higher Secondary Education',
      from: 'June 2018',
      to: 'January 2021',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `by Krishna Vishwakarma`,

  enablePWA: true,
};

export default CONFIG;
