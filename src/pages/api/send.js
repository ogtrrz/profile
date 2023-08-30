import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_KEY;

export default async function handler(req) {
	if (req.method !== "POST") return response.status(404).end();
    let body = await req.json();
    body = JSON.stringify(body)
    // console.log(body);
	const requestBodyJSON = JSON.stringify({
		from: "Omar Gutierre Profile <resend-email@resend.dev>",
		to: ["omar.gutierrez.e@gmail.com"],
		subject: "Profile Web Page Omargutierrez.net",
        html: body
		//html: cleanedRequestBody, // Make sure req.body is the modified object
	});

	// Continue with the rest of your code
	const id = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${RESEND_API_KEY}`,
		},
		body: requestBodyJSON, // Use the serialized JSON
	});

	if (id.ok) {
		const data = await id.json();
		return NextResponse.json(data);
	}
}