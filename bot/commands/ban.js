module.exports.run = async (client, message, args) => {
	if(!message.member.roles.some(r=>["Discord Admin"].includes(r.name)) )
			return message.reply("you don't have permissions to use this command.");
		
	let member = message.mentions.members.first();
	
	if(!member)
		return message.reply("please mention a valid member of this server");
	
	if(!member.bannable) 
		return message.reply("this user can not be banned.");

	let reason = args.slice(1).join(' ');
	if(!reason) reason = "No reason provided";
		
	await member.ban(reason)
		.catch(error => message.reply(`sorry ${message.author.username}, I couldn't ban due to: ${error}`));

	message.channel.send(`${member.user.username} has been banned by ${message.author.username} due to: ${reason}`);
	message.user.send(`You have banned ${message.user.username} for ${reason}.`);
	console.log(`${message.createdTimestamp} - ${message.author.tag} banned ${message.user.tag} for ${reason}`);
}

module.exports.help = {
	name: "ban"
}