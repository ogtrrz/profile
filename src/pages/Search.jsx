import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { spacing } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Head from "next/head";
// import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import MyAppBar from "@/components/MyAppBar";
import MediaCard from "@/components/MediaCard";
// import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MyFooter from "@/components/MyFooter";
// import styled from "@mui/system/styled";
import HomeIcon from "@mui/icons-material/Home";
import { searchSkills } from "../lib/redis";
import { data } from "@/lib/data";
import { profile } from "@/lib/profile";

const sk = data;
const PROFILE = profile;
const Search = ({ ret }) => {
	console.log(ret);

	const router = useRouter();

	return (
		<React.Fragment>
			<Head>
				<title>{`Omar Gutierrez | Apache Kafka, GraphQL, Microservices, SpringBoot, Redis, Reactjs, Nextjs, Java 2...17 & Javascript.`}</title>
				<meta name='robots' content='index, follow' />
				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
				/>
				<meta
					name='description'
					content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
				/>

				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content={`Omar Gutierrez, ${PROFILE.substring(0, 48)}`}
				/>
				<meta
					property='og:description'
					content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
				/>
				<meta
					property='og:image'
					content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
				/>
				<meta
					property='og:url'
					content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
				/>

				<meta
					name='twitter:card'
					content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
				/>
				<meta name='twitter:title' content='Omar Gutierrez, Profile' />
				<meta
					name='twitter:description'
					content={`Omar Gutierrez, ${PROFILE.substring(0, 159)}`}
				/>
				<meta
					name='twitter:image'
					content={`${process.env.NEXT_PUBLIC_URL}/principal.webp`}
				/>
				<meta
					name='twitter:url'
					content={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
				/>
			</Head>
			<MyAppBar />
			<Box sx={{ height: 75 }} />

			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' color='secondary' />}
				aria-label='home-link'>
				<Link href={`/`} shallow={true} passHref={true}>
					<Stack direction='row' alignItems='center' gap={1} sx={{ ml: 3 }}>
						<HomeIcon />
						<Typography variant='body1'>Home</Typography>
						<ArrowForwardIcon />
					</Stack>
				</Link>

				<Typography color='text'>{`Search, documents found ${ret.length}`}</Typography>
			</Breadcrumbs>

			<Box sx={{ mt: 5, mr: 3, pl: 3 }}>
				{ret.length === 0 ? (
					<Typography variant='body1'>No documents found.</Typography>
				) : (
					<Grid
						container
						alignItems='stretch'
						spacing={{ xs: 2, sm: 3, md: 5 }}
						columns={{ xs: 3, sm: 6, md: 9 }}>
						{ret.map((skill) => {
							return (
								// <Grid xs={4} key={skill.skill}>
								<Grid
									xs={3}
									item={true}
									style={{ display: "flex" }}
									key={skill.skill}>
									<MediaCard skill={skill} />
								</Grid>
							);
						})}
					</Grid>
				)}
			</Box>
			<MyFooter />
		</React.Fragment>
	);
};

export default Search;

export async function getServerSideProps(context) {
	const { req, res } = context;
	// bfcache.
	res.setHeader(
		"Cache-Control",
		"public, max-age=604800, stale-while-revalidate=86400"
	);
	// console.log("resolvedUrl", context.resolvedUrl);
	// console.log("context.query", context.query);
	let tag = context.query.search;
	// console.log("context.query.search", tag);
	tag = tag.replaceAll(" ", "|");
	// console.log("query2", tag);
	const skills = await searchSkills(tag);
	// console.log('skills',skills);

	if (!skills) {
		return {
			notFound: true,
		};
	}
	// console.log("props", props);
	const values = JSON.parse(skills);
	// console.log("total", values.total);
	// console.log("documents", values.documents);
	let ret = [];
	values.documents.forEach((item) => {
		// console.log("item", Object.values(item.value)[0]);
		ret.push(
			sk.skills.find((skill) => skill.skill === Object.values(item.value)[0])
		);
	});

	return {
		props: { ret },
		// revalidate: 86400,
		// notFound: true, //regresa el 404
		// redirect: { //redirecciona a la pagina
		// 	destination: '/no-data'
		// }
	};
}
