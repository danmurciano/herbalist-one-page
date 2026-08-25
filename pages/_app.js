import Layout from "../components/_App/Layout";
import 'semantic-ui-css/semantic.min.css';
import '../styles/bootstrap.rtl.css';
import '../styles/globals.css';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
