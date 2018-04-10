module.exports.run = async (client, message, args) => {
	if(!message.member.roles.some(r=>["Discord Admin"].includes(r.name)) )
			return message.reply("Sorry, you don't have permissions to use this command.");
		
	if(!args[0] || args.size < 1) 
		return message.reply("you must provide a command name to reload.");
		
	delete require.cache[require.resolve(`./${args[0]}.js`)];
  	message.reply(`has reloaded the ${args[0]} command.`);
}

module.exports.help = {
	name: "reload"
}