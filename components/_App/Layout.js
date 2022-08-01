import Head from "next/head";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

function Layout({ children }) {

  return (
    <>
      <html lang="he" dir="rtl">
        <Head>
          <title>Herbalist</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="headline" content="צמחי מרפא" />
          <meta name="page-topic" content="צמחי מרפא" />
          <meta name="page-topic" content="רפואת צמחים" />
          <meta name="page-topic" content="טיפול בצמחים"/>
          <meta name="page-topic" content="טיפול בצמחי מרפא" />
          <meta name="page-topic" content="הרבליסט" />
          <meta name="page-topic" content="נטורופת" />
          <meta name="page-topic" content="חיזוק מערכת החיסון" />
          <meta name="page-topic" content="כורכום" />
          <meta name="page-topic" content="פטריות כח" />
          <meta name="page-topic" content="פטריות מרפא" />
          <meta name="page-topic" content="קורדיספס" />
          <meta name="page-topic" content="אכינציאה" />
          <meta name="page-topic" content="ג'ינסנג" />    
        </Head>

        <div className="wrapper">
          <Container fluid>
            {children}
          </Container>
          <Footer />
        </div>
      </html>
    </>
  );
}

export default Layout;
