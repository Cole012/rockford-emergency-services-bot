const config = require("../config.json");

module.exports.run = async (client, message, args) => {
		if(message.author.id !== '341277876621934604') 
			return message.reply(`You do not have permission to use this command.`);

		message.delete();
		message.author.send(`The current version of the RES bot is ${config.version}.`);
		console.log(`${message.createdTimestamp} - ${message.author.tag} said ${config.prefix}ver`);
}

module.exports.help = {
	name: "version"
}