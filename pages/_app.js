import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

	return (
		<>
			<NextNProgress
				color="#c483e7"
			/>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<Head>
				<link rel="icon" href="/favicon.png" />
			</Head>
		</>

	);

}

export default MyApp
