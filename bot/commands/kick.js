module.exports.run = async (client, message, args) => {
	if(!message.member.roles.some(r=>["Discord Admin"].includes(r.name)) )
			return message.reply(", you don't have permissions to use this command.");
		
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		if(!member)
			return message.reply("Please mention a valid member of this server");
		if(!member.kickable) 
			return message.reply("this user can not be kicked.");
		
		let reason = args.slice(1).join(' ');
		if(!reason) reason = "No reason provided";
		
		await member.kick(reason)
			.catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		message.channel.send(`${member.user.username} has been kicked by ${message.author.username} because: ${reason}`);

		message.author.send(`You have kicked by ${message.user.tag} for ${reason}.`);
		console.log(`${message.createdTimestamp} - ${message.author.tag} kicked ${message.user.tag} for ${reason}`);
	}

module.exports.help = {
	name: "kick"
}