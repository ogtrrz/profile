import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import Head from "next/head";
// import Image from "next/image";
import { useRouter } from "next/router";

// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import MyAppBar from "@/components/MyAppBar";
// import MediaCard from "@/components/MediaCard";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MyFooter from "@/components/MyFooter";
import SocialShare from "@/components/SocialShare";

import { data } from "@/lib/data";
const sk = data;
import { profile } from "@/lib/profile";
const PROFILE = profile;

//TODO la proteccion de time
//TODO como se redisean las imagens para ser mas responsiva explicar UX en aerchitectura alineacion significado de los colores proteccion de 10 envios de for en 1 hora y webp y el Sanitizers los big O(1) del stream para read y write

const Skill = ({ skill }) => {
	const router = useRouter();
	return (
		<React.Fragment>
			<Head>
				<title>{`Omar Gutierrez | ${skill.profile.substring(0, 48)}`}</title>
				<meta name='robots' content='index, follow' />

				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
				/>
				<meta
					name='description'
					content={`Omar Gutierrez, ${skill.profile.substring(0, 159)}`}
				/>
				<meta name='keywords' content={skill.keywords} />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content={`Omar Gutierrez, ${skill.profile.substring(0, 48)}`}
				/>
				<meta
					property='og:description'
					content={`Omar Gutierrez, ${skill.profile.substring(0, 159)}`}
				/>
				<meta
					property='og:image'
					content={skill.image ? skill.image : "/principal.webp"}
				/>
				<meta
					property='og:url'
					content={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
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

			{/* <Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' color='primary' />}
				aria-label='Home Link'>
				<Typography color='text'>{`Home`}</Typography>
			</Breadcrumbs> */}

			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' color='secondary' />}
				aria-label='home-link'>
				<NextLink href={`/`} shallow={true}>
					<Stack direction='row' alignItems='center' gap={1} sx={{ ml: 3 }}>
						<HomeIcon />
						<Typography variant='body1'>Home</Typography>
						<ArrowForwardIcon />
					</Stack>
				</NextLink>

				<Typography color='text'>{`${skill.skill}`}</Typography>
			</Breadcrumbs>

			<Box sx={{ height: 10 }} />
			<MyHeaderPrincipal imageURL={skill.image} label={skill.skill} />
			<Box sx={{ height: 860 }} />

			<Box sx={{ mr: 3, pl: 3 }}>
				<Typography variant='subtitle1' color='text'>
					Profile:
				</Typography>
				<br />
				<Typography
					variant='body1'
					color='text'
					style={{ whiteSpace: "pre-line" }}>
					{skill.profile}
				</Typography>
				<br />
				<Typography variant='subtitle1' color='text'>
					Technical Expertise:
				</Typography>
				<br />
				<Typography
					variant='body1'
					color='text'
					style={{ whiteSpace: "pre-line" }}>
					{skill.description}
				</Typography>
				<br />

				{skill.certifications.length ? (
					<React.Fragment>
						<Typography variant='subtitle1' color='text'>
							Certification & Achievements :
						</Typography>
						<br />
					</React.Fragment>
				) : (
					""
				)}

				{skill.certifications.map((certification) => {
					return (
						<React.Fragment key={certification.name}>
							<Stack
								direction='row'
								alignItems='center'
								gap={1}
								onClick={(e) =>
									window.open(certification.urlCertification, "_ blank")
								}
								sx={{
									mb: 1,
									"&:hover": {
										cursor: "pointer",
									},
								}}>
								<Typography
									variant='body1'
									color='secondary'
									style={{ whiteSpace: "pre-line" }}>
									<strong>{certification.name}</strong>
								</Typography>
								<ArrowForwardIcon color='secondary' />
							</Stack>
							<Typography
								variant='body2'
								color='text'
								style={{ whiteSpace: "pre-line" }}>
								{`Issued by: ${certification.issuer} at ${certification.date}`}
							</Typography>
							<br />
						</React.Fragment>
					);
				})}

				<br />
				<br />
				<SocialShare skill={skill} mt={8} />
			</Box>
			<MyFooter />
		</React.Fragment>
	);
};

export default Skill;

export async function getStaticProps(context) {
	let data = sk;
	// console.log("data ssr", data);
	const { params } = context;
	const Skill = params.Skill;
	// console.log("Skill ssr", Skill);

	const foundSkill = data.skills.find((skill) => skill.skill === Skill);
	// console.log("foundSkill ssr", foundSkill);
	if (!foundSkill) {
		return {
			notFound: true,
		};
	}
	return {
		props: { skill: foundSkill },
		// revalidate: 86400,
		// notFound: true, //regresa el 404
		// redirect: { //redirecciona a la pagina
		// 	destination: '/no-data'
		// }
	};
}

export async function getStaticPaths() {
	const data = sk;

	const ids = data.skills.map((item) => item.skills + "");
	const pathsWithParams = ids.map((id) => ({ params: { Skill: id + "" } }));

	return {
		paths: pathsWithParams,
		fallback: "blocking",
	};
}
