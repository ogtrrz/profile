import * as React from "react";
import Box from "@mui/material/Box";
// import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function MyHeaderPrincipal({ imageURL, label }) {
	// const imageURL = "/principal.webp";
	return (
		<React.Fragment>
			<Box
				component='div'
				sx={{
					position: "absolute",
					width: "100%",
					height: "80%",
					backgroundImage: `url(${imageURL ? imageURL : "/principal.webp"})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}>
				<Box
					position='absolute'
					bottom={0}
					left={0}
					right={0}
					p={2}
					boxShadow={3} // Add a shadow (adjust the value as needed)
					bgcolor='rgba(0, 0, 0, 0.8)' // Set background color with transparency
				>
					{label ? (
						<Typography variant='h1' align='left' color={"white"}>
							{label}
						</Typography>
					) : (
						<React.Fragment>
							<Typography variant='h1' align='left' color={"white"}>
								Omar Gutierrez,{" "}
								<small>
									<small>Fullstack Developer.</small>
								</small>
							</Typography>
							<Typography variant='h3' align='left' color={"white"}>
								Apache Kafka, GraphQL, Microservices, SpringBoot, Redis.
							</Typography>
							<Typography variant='h3' align='left' color={"white"}>
								React.js, Next.js, Java 2...17 & Javascript.
							</Typography>
						</React.Fragment>
					)}
				</Box>
			</Box>
		</React.Fragment>
	);
}
