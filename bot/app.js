const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const prefix = config.prefix;

const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if(err) return console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands to load");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands...`);

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${i + 1}: ${f} initialized.`);
		client.commands.set(props.help.name, props);
	});

	console.log("All commands loaded successfully\n ");
});

client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.channels.get('431545003106369536').send(`The bot node has been started and is now initializing... \nThe Rockford Emergency Services bot has finished intializing and is running on version ${config.version}. \n\nYou can use the command '${config.prefix}help' to view all available commands.`);
	client.user.setActivity(`res_services.exe`);
});
 
client.on("message", async message => {
	if(message.author.bot) return;
	
	if(message.content.indexOf(prefix) !== 0) return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	let cmd = client.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(client, message, args);
});

client.login(config.token);
					 