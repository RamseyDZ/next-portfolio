//import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(<>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/>
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
