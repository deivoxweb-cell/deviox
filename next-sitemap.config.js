/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://www.deivox.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/_not-found'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.deivox.co.in/sitemap.xml',
    ],
  },
}
