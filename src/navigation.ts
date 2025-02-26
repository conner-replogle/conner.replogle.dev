import {  getAsset } from './utils/permalinks';

export const headerData = {
  links:[
    
      { text: 'Home', href: '/' },
      { text: 'Resume', href: '/public/conner-replogle.pdf' },
      { text: 'Blog', href: '#blog' },
      { text: 'Github', href: 'https://github.com/conner-replogle' },
    
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
     
  ],
  secondaryLinks: [
    {
      text: 'Home',
      href:"/"
    },
    {
      text: "Resume",
      href:"/public/conner-replogle.pdf"
    },

    {
      text: "Blog",
      href:"/blog"
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/conner-replogle' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted"> Conner Replogle</a> · All rights reserved.
  `,
};
