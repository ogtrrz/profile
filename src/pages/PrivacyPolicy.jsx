import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import MyFooter from "@/components/MyFooter";
import MyAppBar from "@/components/MyAppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Head from "next/head";
import { useRouter } from "next/router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";


const PrivacyPolicy = () => {
	// console.log("privacy", privacyPolicy);
  const router = useRouter();
	return (
		<React.Fragment>
			<Head>
				<title>{`Omar Gutierrez | Privacy Policy`}</title>
				<meta name='robots' content='index, follow' />
				
				<link
					rel='canonical'
					href={`${process.env.NEXT_PUBLIC_URL}${router.asPath}`}
				/>
				<meta
					name='description'
					content={`Omar Gutierrez, Privacy Policy`}
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content={`Omar Gutierrez, Privacy Policy`}
				/>
				<meta
					property='og:description'
					content={`Omar Gutierrez, Privacy Policy`}
				/>
				<meta
					property='og:image'
					content={"/principal.webp"}
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
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' color='secondary' />}
				aria-label='Link al Inicio'>
				<NextLink href={`/`} shallow={true}>
					<Stack direction='row' alignItems='center' gap={1} sx={{ ml: 3 }}>
						<HomeIcon />
						<Typography variant='body1'>Home</Typography>
						<ArrowForwardIcon />
					</Stack>
				</NextLink>

				<Typography color='text'>{`Privacy Policy`}</Typography>
			</Breadcrumbs>
			<Stack sx={{ ml: 3, mt:4}}>
				<Typography variant='subtitle1'>Privacy Policy</Typography>
				<Typography
					variant='body1'
					color='text'
					style={{ whiteSpace: "pre-line" }}>
					{privacyPolicy?.privacy}
				</Typography>
			</Stack>
			<MyFooter />
		</React.Fragment>
	);
};

export default PrivacyPolicy;

const privacyPolicy = {
	privacy: `This privacy policy ("policy") will help you understand how Omar Gutierrez ("us", "we",
"our") uses and protects the data you provide to us when you visit and use omargutierrez.net ("website ", "service").
We reserve the right to change this policy at any given time, of which you will be
promptly updated. If you want to make sure that you are up to date with the latest
changes, we advise you to frequently visit this page.
What User Data We Collect
When you visit the website, we may collect the following data:
• Your IP address.
• Your contact information and email address.
• Other information such as interests and preferences.
• Data profile regarding your online behavior on our website.
Why We Collect Your Data
We are collecting your data for several reasons:
• To better understand your needs.
• To improve our services and products.
• To send you promotional emails containing the information we think you will find
interesting.
• To contact you to fill out surveys and participate in other types of market
research.
• To customize our website according to your online behavior and personal
preferences.
Safeguarding and Securing the Data
omargutierrez.net is committed to securing your data and keeping it confidential.
omargutierrez.net has done all in its power to prevent data theft, unauthorized access,
and disclosure by implementing the latest technologies and software, which help us
safeguard all the information we collect online.
Our Cookie Policy
Once you agree to allow our website to use cookies, you also agree to use the data it
collects regarding your online behavior (analyze web traffic, web pages you visit and
spend the most time on).
The data we collect by using cookies is used to customize our website to your needs.
Website privacy policy template by WebsitePolicies.com
After we use the data for statistical analysis, the data is completely removed from our
systems.
Please note that cookies don't allow us to gain control of your computer in any way.
They are strictly used to monitor which pages you find useful and which you do not so
that we can provide a better experience for you.
If you want to disable cookies, you can do it by accessing the settings of your internet
browser. You can visit https://www.internetcookies.com, which contains comprehensive
information on how to do this on a wide variety of browsers and devices.
Links to Other Websites
Our website contains links that lead to other websites. If you click on these links
omargutierrez.net is not held responsible for your data and privacy protection. Visiting
those websites is not governed by this privacy policy agreement. Make sure to read the
privacy policy documentation of the website you go to from our website.
Restricting the Collection of your Personal Data
At some point, you might wish to restrict the use and collection of your personal data.
You can achieve this by doing the following:
When you are filling the forms on the website, make sure to check if there is a box
which you can leave unchecked, if you don't want to disclose your personal information.
If you have already agreed to share your information with us, feel free to contact us via
email and we will be more than happy to change this for you.
omargutierrez.net will not lease, sell or distribute your personal information to any third
parties, unless we have your permission. We might do so if the law forces us. Your
personal information will be used when we need to send you promotional materials if
you agree to this privacy policy.`,
};
