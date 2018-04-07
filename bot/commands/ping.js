module.exports.run = async (client, message, args) => {
	const m = await message.channel.send("Ping?");
	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	console.log(`${message.createdTimestamp} - ${message.author.tag} said ?ping.`);
}

module.exports.help = {
	name: "ping"
}