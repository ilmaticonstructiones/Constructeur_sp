const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/pintura-reformas-spain', changefreq: 'weekly', priority: 0.9 },
    { url: '/trasteros-pladur-spain', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog', changefreq: 'daily', priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: 'https://www.trasterosypladur.es' });
  
  return streamToPromise(Readable.from(links).pipe(stream)).then((data: Buffer) =>
    data.toString()
  );
}