/**
 * pages/_app.js
 */
import '@styles/globals.css';
import '@styles/general.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}

export default MyApp;
