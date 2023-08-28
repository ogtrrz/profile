import "@fontsource/poppins/400.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/styles/createEmotionCache";
// import { FC, useEffect } from "react";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import Script from "next/script";
// import { ReactNode } from "react";
// import { NextPage } from "next";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps: { ...pageProps },
}) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<>
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-VNTMQYCYLR'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-VNTMQYCYLR', {
						page_path: window.location.pathname,
					});
					`,
				}}
			/>

			<CacheProvider value={emotionCache}>
				<Head>
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width, shrink-to-fit=no'
					/>
				</Head>

				<ThemeProvider theme={theme}>
					<CssBaseline />
					{getLayout(<Component {...pageProps} />)}
				</ThemeProvider>
			</CacheProvider>
		</>
	);
}

export default MyApp;
