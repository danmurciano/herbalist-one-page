import Head from "next/head";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <>

        <Head>
          <title>Herbalist</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div class="wrapper">
          <Container fluid>
            {children}
          </Container>
          <Footer />
        </div>

    </>
  );
}

export default Layout;
