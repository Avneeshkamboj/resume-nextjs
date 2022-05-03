import '../styles/globals.css'
import Head from 'next/head'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import "../assets/vendor/glightbox/css/glightbox.min.css"
import "../assets/vendor/remixicon/remixicon.css"
import "../assets/vendor/swiper/swiper-bundle.min.css"
import "../assets/css/style.css"
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'

function MyApp({ Component, pageProps }) {

  
  return (
  <>
    <Head>

      </Head>
    <Header />  
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
