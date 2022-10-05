import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

	return (
		<>
			<NextNProgress
				color="#c483e7"
			/>
			<Component {...pageProps} />
		</>

	);

}

export default MyApp
