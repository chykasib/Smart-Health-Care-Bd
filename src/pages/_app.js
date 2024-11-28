import Layout from "../components/Layout";
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
