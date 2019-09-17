const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: false,
  },
];

const siteConfig = {
  title: 'KiraEx', // Title for your website.
  tagline: 'Interchain Exchange',
  url: 'https://kiraex.com', // Your website URL
  baseUrl: '/docs', 

  projectName: 'docs',
  organizationName: 'kira-ex',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/KiraIcon.png',
  footerIcon: 'img/KiraIcon.png',
  favicon: 'img/KiraIcon.png',

  /* Colors for website */
  colors: {
    //f5f5f5
    primaryColor: '#C792DF',
    secondaryColor: '#FFFFFF',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} KiraEx`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/Kira-Exchange/docs',
};

module.exports = siteConfig;
