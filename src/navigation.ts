import {  getAsset } from './utils/permalinks';

export const headerData = {
  links:[
    { text: 'Home', href: '/' },
    { text: 'Resume', href: '/conner-replogle.pdf' },
    { text: 'Blog', href: '/blog' },
    { text: 'GitHub', href: 'https://github.com/conner-replogle', target: '_blank' },
    { text: 'LinkedIn', href: 'https://linkedin.com/in/conner-replogle', target: '_blank' },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Home', href: '/' },
    { text: 'Resume', href: '/conner-replogle.pdf' },
    { text: 'Blog', href: '/blog' },
    { text: 'Projects', href: '/projects' },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/conner-replogle' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/conner-replogle' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Conner Replogle. All rights reserved.
  `,
};
