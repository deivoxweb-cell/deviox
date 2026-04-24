/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://deivoxbcp.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/_not-found'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://deivoxbcp.com/sitemap.xml',
    ],
  },
}
