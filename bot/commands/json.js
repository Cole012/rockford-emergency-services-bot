const config = require("../config.json");
const api = "https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	let generateMsg = await message.channel.send("Fetching JSON Object entries...");

	snekfetch.get(api).then(r => {
		let body = r.body;
		let id = Number(args[0]);

		if(!id) return message.channel.send("Supply an ID!");
		if(isNaN(id)) return message.channel.send("Supply a valid number");

		let entry = body.find(post => post.id === id);
		if(!entry) return message.channel.send("This return does not exist!");

		let embed = new Discord.RichEmbed()
			.setAuthor(entry.title)
			.setDescription(entry.body)
			.addField("Author ID", entry.userId)
			.setFooter("Post ID:" + entry.id)

		message.channel.send({embed: embed});
	});

	generateMsg.delete();

}

module.exports.help = {
	name: "json"
}