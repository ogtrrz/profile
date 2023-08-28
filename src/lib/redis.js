import { connection } from "./connection";

export async function createContact(data) {
	const keyName = `stream:profile:contact`;
	const id = await connection.xAdd(keyName, "*", data);
	return id;
}

export async function searchSkills(data) {
	let result = await connection.ft.search(
		"ixprofile1",
		`@skill|profile|description: (${data})`,
		{ RETURN: ["$.skill"] }
	);

	return JSON.stringify(result, null, 2);
}

// export async function rateLimit(data) {
// 	// data='technical'
// 	console.log("data", data);
// 	let result = await connection.incr(data);
