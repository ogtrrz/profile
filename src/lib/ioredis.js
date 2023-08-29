const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);

function flattenArray(arr) {
	return arr.reduce((flat, item) => {
		if (Array.isArray(item)) {
			// If it's an array, recursively flatten it and concatenate
			flat.push(item[1]);
		}
		return flat;
	}, []);
}

export async function createContact(data) {
	const channel = "stream:profile:contact";
	const id = await redis.xadd(channel, "*", JSON.stringify(data), "message");
	return id;
}

export async function searchSkills(data) {
	const result = await redis.call(
		"ft.search",
		"ixprofile1",
		`@skill|profile|description: ${data}`,
		"RETURN",
		1,
		"$.skill"
	);
	return flattenArray(result) //JSON.stringify(result, null, 2);
}
