/**
 * includes/layout/master.js
 */
import Head from 'next/head';
import PropTypes from 'prop-types';

import { SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from '@includes/config';

const Seo = (props) => {
  const { title, description, keywords, thumbnail, url } = props;

  let siteTitle = SITE_TITLE;
  if (title && title !== '') {
    siteTitle = `${title} | ${siteTitle}`;
  }

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description || SITE_DESCRIPTION} />
      <meta name="keywords" content={keywords || SITE_KEYWORDS} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={description || SITE_DESCRIPTION} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={thumbnail} />
    </Head>
  );
};

Seo.defaultProps = {
  thumbnail: '',
  url: '',
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;
