import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { spacing } from "@mui/system";

import NextLink from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import MyAppBar from "@/components/MyAppBar";
// import MediaCard from "@/components/MediaCard";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MyFooter from "@/components/MyFooter";
// import styled from "@mui/system/styled";
import HomeIcon from "@mui/icons-material/Home";
// import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { profile } from "@/lib/profile";

function Architecture() {
	const PROFILE = profile;
	const imageURL = "/architecture1.webp";
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

				<meta
					name='keywords'
					content='Website Technology Stack Overview, React and Next.js, Cutting-edge technologies, Optimal user experience, Efficient data management, Key components, Benefits, Prerendering, Server-side rendering (SSR), Static site generation (SSG), Faster load times, SEO performance, Prefetching, Node.js, API Development, Redis Search API, In-memory data store, JSON format, Speed, Scalability, Microservices Architecture, Contact form data, Streams, Real-time data transmission, Modularity, Fault Tolerance, Fully Responsive, Reactive Design, Component-based architecture, Media Queries, CSS Flexibility, Seamless User Experience, Network Efficiency, Redis Search for Network Efficiency, Smart Caching, Optimized API calls, Efficiency Meets Excellence, Future Readiness, Technology Stack'
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

				<Typography color='text'>{`Site Architecture`}</Typography>
			</Breadcrumbs>

			<Box sx={{ height: 10 }} />
			<MyHeaderPrincipal imageURL={imageURL} label='Site Architecture' />
			<Box sx={{ height: 860 }} />

			<Stack gap={{ sm: 1, md: 2 }} sx={{ mt: 6, mx: 6 }}>
				<Typography variant='h4' gutterBottom>
					Website Technology Stack Overview
				</Typography>
				<Typography variant='body1' gutterBottom>
					This website was generated using React and Next.js, leveraging a
					combination of cutting-edge technologies to provide an optimal user
					experience and efficient data management. In this document, we will
					explore the key components of this tech stack and the benefits they
					offer.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					React and Next.js
				</Typography>
				<Typography variant='body1' gutterBottom>
					React is a JavaScript library for building user interfaces, known for
					its component-based architecture and declarative syntax. Next.js is a
					framework built on top of React that provides additional features and
					optimizations for building production-ready web applications.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Benefits:</strong>
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Prerendering:</strong> Next.js offers server-side rendering
					(SSR) and static site generation (SSG) capabilities. This means that
					the website can pre-render pages at build time, resulting in faster
					load times and better SEO performance.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Prefetching:</strong> Next.js automatically prefetches linked
					pages, improving the perceived performance of the website. This
					feature reduces the time users spend waiting for pages to load when
					they navigate the site.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Node.js and API Development
				</Typography>
				<Typography variant='body1' gutterBottom>
					Node.js is a server-side runtime for running JavaScript applications.
					It is used here to create an API for Redis search.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Redis Search API:</strong>
				</Typography>
				<Typography variant='body1' gutterBottom>
					The website utilizes Redis, an in-memory data store, to enable fast
					and efficient searching. A custom API, built with Node.js, allows
					users to query Redis for specific data and retrieve results in JSON
					format.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Benefits:</strong>
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Speed:</strong> Redis is exceptionally fast due to its
					in-memory nature, making it ideal for search operations. Queries
					return results almost instantaneously.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Scalability:</strong> Redis is horizontally scalable, allowing
					the website to handle increased search demands as the user base grows.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Microservices Architecture
				</Typography>
				<Typography variant='body1' gutterBottom>
					The website’s contact form data is sent to a microservices
					architecture, providing a scalable and modular approach to handling
					user interactions.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Using Streams:</strong>
				</Typography>
				<Typography variant='body1' gutterBottom>
					Streams are employed to send contact form data to microservices.
					Streams allow for real-time data transmission and enable efficient
					communication between various microservices components.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Benefits:</strong>
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Scalability:</strong> Microservices architecture enables
					scaling individual components as needed, ensuring the website can
					handle high traffic and evolving requirements.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Modularity:</strong> Microservices break down the application
					into smaller, manageable pieces, making it easier to develop, test,
					and maintain.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Real-time Capabilities:</strong> Streams enable real-time data
					processing, allowing for immediate responses to user interactions.
				</Typography>
				<Typography variant='body1' gutterBottom>
					<strong>Fault Tolerance:</strong> Microservices can be designed with
					fault tolerance in mind, ensuring the availability of critical
					services even in the face of failures.
				</Typography>
				<br />

				<Typography variant='h4' gutterBottom>
					Building a Fully Responsive and Reactive Website with React and
					Material-UI
				</Typography>
				<Typography variant='body1' gutterBottom>
					This website is designed to provide an exceptional user experience
					through its fully responsive and reactive design. Below, we’ll explain
					why this technology stack excels in creating such a dynamic and
					adaptable web experience.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					React: A Foundation for Responsiveness
				</Typography>
				<Typography variant='body1' gutterBottom>
					React, a JavaScript library for building user interfaces, forms the
					foundation of our website. Its component-based architecture enables
					the creation of modular, reusable UI elements. These components can
					easily adapt to different screen sizes and device types, making the
					site fully responsive.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Material-UI: Consistent and Adaptive Design
				</Typography>
				<Typography variant='body1' gutterBottom>
					Material-UI provides a set of pre-designed, responsive components with
					a consistent and adaptable design language. This framework ensures
					that our website’s user interface looks and works great on various
					devices, from large desktop screens to small mobile devices.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Reactivity Through State Management
				</Typography>
				<Typography variant='body1' gutterBottom>
					React’s state management enables the website to react dynamically to
					user interactions. When users interact with components or input data,
					the site updates instantly without requiring full page refreshes. This
					reactivity enhances the user experience, making interactions smooth
					and seamless.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Media Queries and CSS Flexibility
				</Typography>
				<Typography variant='body1' gutterBottom>
					We utilize CSS media queries and flexbox for layout flexibility. Media
					queries allow us to apply different styles based on screen sizes,
					ensuring content remains readable and visually appealing across
					devices. Flexbox provides a flexible and efficient way to structure
					page layouts responsively.
				</Typography>
				<br />
				<Typography variant='h5' gutterBottom>
					Seamless User Experience
				</Typography>
				<Typography variant='body1' gutterBottom>
					The combination of React and Material-UI ensures a seamless user
					experience. Users can expect content to adapt to their devices,
					interfaces to be intuitive, and interactions to be smooth and
					reactive. Whether on a desktop, tablet, or smartphone, our website is
					designed to deliver an outstanding experience.
				</Typography>

				<br />
				<Typography variant='h4' gutterBottom>
					Crafting a Responsive, Reactive, and Network-Efficient Website with
					React, Material-UI, and Redis
				</Typography>
				<Typography variant='body1' gutterBottom>
					Our website is meticulously designed to offer an exceptional user
					experience by seamlessly blending responsiveness, reactivity, and
					network efficiency. Below, we delve into how this synergy is achieved,
					particularly through the smart utilization of Redis search for optimal
					performance and minimal network footprint.
				</Typography>
				<br />

				<Typography variant='h5' gutterBottom>
					Redis Search for Network Efficiency
				</Typography>
				<Typography variant='body1' gutterBottom>
					Recognizing that our website operates with a relatively small dataset
					and long-lived information, we employ Redis search judiciously.
					Instead of transmitting entire documents over the network, we utilize
					Redis search to retrieve only document IDs that match specific
					queries. This ingenious approach minimizes network usage, reduces
					latency, and enhances overall performance.
				</Typography>
				<br />

				<Typography variant='h5' gutterBottom>
					Streamlined Network Communication
				</Typography>
				<Typography variant='body1' gutterBottom>
					We prioritize network efficiency by employing streamlined
					communication. Redis search helps us avoid unnecessary data transfer,
					while smart caching and optimized API calls ensure minimal bandwidth
					usage. This efficiency translates into swift page loads and a smooth
					browsing experience.
				</Typography>

				<br />
				<Typography variant='h5' gutterBottom>
					Security
				</Typography>
				<Typography variant='body1' gutterBottom>
					Caring deeply about your online safety, we employ stringent data
					sanitization practices and robust security headers to ensure the
					utmost protection of your information while you browse our website.
				</Typography>

				<br />
				<Typography variant='h3' style={{ color: "primary.main" }}>
					The Importance of Significance in UX
				</Typography>

				<Typography variant='body1' color='primary'>
					Color is a critical element in user experience (UX) design. The
					primary color you‘ve chosen, represented by this text, can evoke
					specific emotions and create a consistent visual identity for your
					website or application.
				</Typography>

				<Typography
					variant='body1'
					color='primary'
					style={{ whiteSpace: "pre-line" }}>
					{`The color "#095D57" is a specific hexadecimal color code. Color significance can be somewhat subjective and context-dependent, but here's a general overview of how "#095D57" might be perceived:

Deep Teal or Turquoise: "#095D57" appears to be a deep teal or turquoise color. In color psychology, this color is associated with various emotions and concepts:

Calmness: Teal and turquoise are often seen as calming colors, reminiscent of the sea or tropical waters. They can evoke a sense of tranquility and relaxation.

Balance: Teal is a blend of green and blue, representing a balance between the calmness of blue and the growth and vitality of green.

Refreshing: This color can be associated with freshness and renewal, much like the feeling of a cool ocean breeze.

Natural and Earthy: The color "#095D57" has a natural and earthy quality, making it suitable for nature-inspired themes or designs.

Sophisticated: Deep teal shades can also convey a sense of sophistication and elegance when used in the right context.

Professional: In some contexts, this color can be seen as professional and business-like, making it suitable for corporate or formal designs.`}
				</Typography>

				<Typography variant='body1' color='secondary'>
					Meanwhile, the secondary color, represented by this text, can be used
					to draw attention to important elements, such as calls to action or
					alerts.
				</Typography>

				<div>
					<ul>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Elegance:</strong> Dark purples are often associated
								with elegance and luxury. They can be used in high-end branding
								or fashion to convey a sense of sophistication.
							</Typography>
						</li>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Mystery:</strong> Dark colors like this can evoke a
								sense of mystery and intrigue. They are often used in mystery
								novels or movie posters to create an air of suspense.
							</Typography>
						</li>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Creativity:</strong> Purple, in general, is associated
								with creativity and imagination. This dark purple could
								represent a deep, introspective creativity.
							</Typography>
						</li>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Royalty:</strong> Historically, purple has been
								associated with royalty and power. This shade might convey a
								sense of regality or importance.
							</Typography>
						</li>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Drama:</strong> Dark purples can be dramatic and
								intense. They can create a sense of depth and intensity in
								design or art.
							</Typography>
						</li>
						<li>
							<Typography variant='body1' color='secondary'>
								<strong>Sensitivity:</strong> Some people might associate dark
								purples with emotional depth and sensitivity.
							</Typography>
						</li>
					</ul>
				</div>
				
				<Typography variant='h5' gutterBottom>
					Conclusion: Efficiency Meets Excellence
				</Typography>
				<Typography variant='body1' gutterBottom>
					The combination of React, Next.js, Node.js, Redis, and a microservices
					architecture empowers the website with exceptional performance,
					scalability, and the ability to provide real-time interactions. These
					technologies work together to enhance user experience, optimize data
					retrieval, and ensure the future readiness of the web application.
				</Typography>
				<Typography variant='body1' gutterBottom>
					This technology stack not only meets the current requirements but also
					positions the website for future growth and innovation.
				</Typography>
				<Typography variant='body1' gutterBottom>
					In summary, our website, built upon React and Material-UI, embodies
					the perfect blend of responsiveness, reactivity, and network
					efficiency. The integration of Redis search serves as a testament to
					our commitment to delivering a top-notch user experience while keeping
					network demands to a minimum. Our design choices prioritize the user,
					ensuring an engaging and efficient journey across all devices.
				</Typography>
				<Typography variant='body1' gutterBottom>
					In summary, our website, built upon React and Material-UI, embodies
					the perfect blend of responsiveness, reactivity, and network
					efficiency. The integration of Redis search serves as a testament to
					our commitment to delivering a top-notch user experience while keeping
					network demands to a minimum. Our design choices prioritize the user,
					ensuring an engaging and efficient journey across all devices.
				</Typography>
				<div
					style={{
						position: "relative",
						width: "100%",
						paddingBottom: "87%",
					}}>
					<Image
						src='/lighthouse.webp'
						layout='fill'
						alt='Lighthouse scores%'
					/>
				</div>
				<Typography variant='body1' gutterBottom>
					By implementing this approach, we have achieved a perfect 100% score
					in all categories of Lighthouse. This demonstrates our unwavering
					commitment to delivering an exceptional online experience. We have
					optimized our website for lightning-fast performance, ensured
					accessibility for all users, fine-tuned our SEO strategy for maximum
					visibility, and adhered to best practices in web development. This
					achievement reflects our dedication to providing the best possible
					user experience on our platform.
				</Typography>
			</Stack>
			<MyFooter />
		</React.Fragment>
	);
}

export default Architecture;
