import Layout from "../components/Layout"; // Import the Layout component
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Global navigation bar */}
      {/* <nav className="bg-blue-600 text-white p-4 flex justify-around">
        <Link href="/patient">
          <Link className="hover:underline">Patient</Link>
        </Link>
        <Link href="/doctor">
          <Link className="hover:underline">Doctor</Link>
        </Link>
      </nav> */}

      {/* Page content wrapped inside Layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
