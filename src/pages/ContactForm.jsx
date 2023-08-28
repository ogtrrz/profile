import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NextLink from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import MyAppBar from "@/components/MyAppBar";
import MyFooter from "@/components/MyFooter";
import HomeIcon from "@mui/icons-material/Home";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isLength from "validator/lib/isLength";
import escape from "validator/lib/escape";
import { profile } from "@/lib/profile";

const ContactForm = () => {
	const router = useRouter();
	const [name, setName] = React.useState("");
	const [company, setCompany] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [subject, setSubject] = React.useState("");

	const [isNameError, setNameError] = React.useState(false);
	const [isEmailError, setEmailError] = React.useState(false);
	const [isSubjectError, setSubjectError] = React.useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const regex = /[ ()\.]/g;
		//const chars =
		//	"abcdefghijklmnopqrstuvwxyz1234567890_- `+!@#$%^&*()=+'{}[];:?\"";
		// console.log("53", validator.isWhitelisted(name.trim().toLowerCase(), chars));
		let validationFlag = true; // Initialize to true

		if (isLength(name.trim(), { min: 3, max: 50 })) {
			setNameError(false); // Set validationFlag to false if this condition is met
		} else {
			setNameError(true);
			validationFlag = false; // Set validationFlag to false if this condition is met
		}

		if (isLength(subject.trim(), { min: 10, max: 500 })) {
			setSubjectError(false); // Set validationFlag to false if this condition is met
		} else {
			setSubjectError(true);
			validationFlag = false; // Set validationFlag to false if this condition is met
		}

		if (
			isMobilePhone(email.trim().replace(regex, "")) ||
			isEmail(email.trim())
		) {
			setEmailError(false); // Set validationFlag to false if this condition is met
		} else {
			setEmailError(true);
			validationFlag = false; // Set validationFlag to false if this condition is met
		}

		if (!validationFlag) {
			return; // This will return if any of the conditions set validationFlag to false
		}

		const formData = {
			name: escape(name.trim()),
			company: escape(name.trim()),
			email: escape(name.trim()),
			subject: escape(name.trim()),
		};

		// console.log("formData", JSON.stringify(formData));

		const res = await fetch("/api/contact", {
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});
		
		const result = await res.json();
		// console.log(result); //

		setName("");
		setCompany("");
		setEmail("");
		setSubject("");
		router.push("/");
	};

	const PROFILE = profile;

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
				<NextLink href={`/`} shallow={true}>
					<Stack direction='row' alignItems='center' gap={1} sx={{ ml: 3 }}>
						<HomeIcon />
						<Typography variant='body1'>Home</Typography>
						<ArrowForwardIcon />
					</Stack>
				</NextLink>

				<Typography color='text'>Contact Form</Typography>
			</Breadcrumbs>
			<Typography variant='h3' sx={{ m: 3 }}>
				Contact Form
			</Typography>
			<form autoComplete='off' onSubmit={handleSubmit}>
				<Stack>
					<FormControl sx={{ m: 3 }}>
						<InputLabel htmlFor='name' aria-labelledby='name'>
							Name*
						</InputLabel>
						<Input
							id='nameId'
							aria-describedby='my-name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<FormHelperText id='my-input-text-name'>
							Enter your name.
						</FormHelperText>
						{isNameError ? (
							<Alert severity='error'>
								Please ensure your name is between 2 and 50 characters without
								special characters.
							</Alert>
						) : (
							""
						)}
					</FormControl>
					<FormControl sx={{ m: 3 }}>
						<InputLabel htmlFor='company' aria-labelledby='company'>
							Company
						</InputLabel>
						<Input
							id='company'
							aria-describedby='my-input-text-company'
							value={company}
							onChange={(e) => setCompany(e.target.value)}
						/>
						<FormHelperText id='my-helper-text-company'>
							Enter your company name, if apply.
						</FormHelperText>
					</FormControl>
					<FormControl sx={{ m: 3 }}>
						<InputLabel htmlFor='email' aria-labelledby='email'>
							Email address or Telphone Number (with country code)*
						</InputLabel>
						<Input
							id='email'
							aria-describedby='my-input-text-email'
							value={email}
							onInput={(e) => setEmail(e.target.value)}
						/>
						<FormHelperText id='my-helper-text-email'>
							I will never share your email or telephone number, and if it is a
							telephone number, only the digits, without any other characters,
							will be used.
						</FormHelperText>
						{isEmailError ? (
							<Alert severity='error'>
								This is an error alert — check it out!
							</Alert>
						) : (
							""
						)}
					</FormControl>
					<FormControl sx={{ m: 3 }}>
						<InputLabel htmlFor='subject' aria-labelledby='subject'>
							Subject*
						</InputLabel>
						<Input
							id='subject'
							aria-describedby='my-input-text-subject'
							value={subject}
							onInput={(e) => setSubject(e.target.value)}
						/>
						<FormHelperText id='my-helper-text-subject'>
							A brief subject line or topic for the message..
						</FormHelperText>
						{isSubjectError ? (
							<Alert severity='error'>
								Please ensure your name is between 10 and 500 characters without
								special characters.
							</Alert>
						) : (
							""
						)}
					</FormControl>
					<Stack direction='row' spacing={2} sx={{ m: 3 }}>
						<Button variant='contained' type='submit'>
							Submit
							<ArrowForwardIcon />
						</Button>
						<Typography> </Typography>
					</Stack>
				</Stack>
			</form>
			<MyFooter />
		</React.Fragment>
	);
};

export default ContactForm;
