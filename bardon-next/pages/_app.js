// pages/_app.js

import '../styles/globals.css';  // adjust this import based on where your global styles are located

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
