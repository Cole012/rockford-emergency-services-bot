const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
	
	if(!args[0]) {
		const allEmbed = new Discord.RichEmbed()
			.setTitle("This is a list of commands for the Rockford Emergency Services bot.")
			.setDescription("You can use command arguments to display certain command information, or certain categories.")
			.setColor(0x00AE86)
			.setTimestamp()
			.setThumbnail("https://i.imgur.com/OJvey5s.png")
			.setFooter("Any bugs should be reported to the bot developer at their earliest convenience.")

			.addBlankField(true)
			.addField(`-> ${config.prefix}help`, "This command shows you all available commands that you can use.\n")
			.addField(`-> ${config.prefix}ping`, "This command shows your ping to the guild and the APIs latency.\n")
			.addField(`-> ${config.prefix}version`, "This command is strictly for the bot developer and can only be used by said developer.")
			.addField(`-> ${config.prefix}reload`, "This command is only available to Discord Administrators, it refreshes a command's cache upon next use.")
			.addField(`-> ${config.prefix}say`, "This command repeats whatever you say for the arguments.")
			.addField(`-> ${config.prefix}kick`, "This command will kick a user from the guild for the specified reason of the Administrator.")
			.addField(`-> ${config.prefix}ban`, "This command will ban a user from the guild for the specified reason of the Administrator.")
			.addField(`-> ${config.prefix}purge`, "This command allows the Administering person to delete a certain amount of messages in bulk.")
			.addBlankField(true)

  		message.channel.send(allEmbed);
  	} else {
  		var commands = ["purge", "kick", "ban", "reload", "say", "cmd_info"];
  		var test = commands.includes(args[0]);

  		if(!test) {
  		 	message.reply("please enter a valid command.");
  		} else {
  			const Embed = new Discord.RichEmbed()
  		 		.setTitle(`This is an extended help menu for the ${args[0]} command.`)
  		 		.addBlankField(true)

  		 		switch (args[0]) {
  		 			case "ban":
  		 				Embed.setDescription("Ban command")
  		 				Embed.setThumbnail("https://i.imgur.com/ybFB9Tq.png")
  		 				Embed.setColor(0x8c0014)
  		 				Embed.addField("@user", "This is the user you are issuing the punishment to. For example, @Rockford Emergency Services.")
  		 				Embed.addField("reason", "This is the reason as to why the targeted user it being punished. For example, spamming the Discord.")
  		 				break;

  		 			case "kick":
  		 				Embed.setDescription("Kick command")
  		 				Embed.setThumbnail("https://i.imgur.com/uqvwhCe.png")
  		 				Embed.setColor(0x8c0014)
  		 				Embed.addField("@user", "This is the user you are issuing the punishment to. For example, @Rockford Emergency Services.")
  		 				Embed.addField("reason", "This is the reason as to why the targeted user it being punished. For example, spamming the Discord.")
  		 				break;

  		 			case "purge":
  		 				Embed.setDescription("Purge command")
  		 				Embed.setThumbnail("https://i.imgur.com/jk4JbDM.png")
  		 				Embed.setColor(0x8c0014)
  		 				Embed.addField("amount", "This is the amount of messages you want to delete, the minimum is 2 and the maximum is 100.")
  		 				break;

  		 			case "say":
  		 				Embed.setDescription("Say command")
  		 				Embed.setThumbnail("https://i.imgur.com/nX6Owzx.png")
  		 				Embed.setColor(0x009935)
  		 				Embed.addField("", "")
  		 				break;

  		 			case "reload":
  		 				Embed.setDescription("Reload command")
  		 				Embed.setThumbnail("https://i.imgur.com/HFS7VNu.png")
  		 				Embed.setColor(0x2d00a3)
  		 				break;

  		 			case "cmd_info":
  		 				message.reply(" - Purge, Ban, Kick, Say, Reload");
  		 				break;
  		 		}

			message.channel.send(Embed);
  	 	}
  	}

	console.log(`${message.createdTimestamp} - ${message.author.tag} said ?help ${args[0]}.`);
}

module.exports.help = {
	name: "help"
}
