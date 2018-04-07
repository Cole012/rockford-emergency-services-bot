module.exports.run = async (client, message, args) => {
	if(!message.member.roles.some(r=>["Discord Admin"].includes(r.name)) )
			return message.reply("you don't have permissions to use this command.");

	const sayMessage = args.join(" ");
	message.delete().catch(O_o=>{}); 
	message.channel.send(sayMessage);
	console.log(`${message.createdTimestamp} - ${message.author.tag} said ${sayMessage}`);
}

module.exports.help = {
	name: "say"
}