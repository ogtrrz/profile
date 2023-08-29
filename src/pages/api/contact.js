// import { createContact } from "../../lib/redis";
import { createContact } from "@/lib/ioredis";

export default async function handler(req, res) {
	// const forwarded = req.headers["x-forwarded-for"];
	// const ip = forwarded
	// 	? forwarded.split(/, /)[0]
	// 	: req.connection.remoteAddress;
	// console.log("ip", ip);
	if (req.method !== "POST") return response.status(404).end();

	const id = await createContact(req.body);
	res.status(201).json({ id });
}
