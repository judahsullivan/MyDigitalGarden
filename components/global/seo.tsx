import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const siteTitle = 'Judah Sullivan';
  const siteDescription =
    'Welcome to my Next.js Chakra UI portfolio! I am a passionate developer with expertise in building modern web applications using the latest technologies. Browse my portfolio to see my latest projects and feel free to reach out to me for any inquiries or collaboration opportunities.'; // Replace with your robust description
  const defaultKeywords =
    'Next.js, Chakra UI, portfolio, web development, front-end development, back-end development, full-stack development, TypeScript, React, JavaScript, HTML, CSS, Git, Agile, Scrum, responsive design'; // Add default keywords here
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={`${defaultKeywords}, ${keywords}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Judah Sullivan" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Judah Sullvian" />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image:alt" content={siteTitle} />
      <link rel="shortcut icon" href="/assets/images/memojis/navbar.png" type="images/lion" />
    </Head>
  );
};

export default SEO;
