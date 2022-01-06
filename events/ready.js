module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

        client.on('interactionCreate', interaction => {
            console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        });

        client.user.setActivity('own action for this', { type: 'WATCHING' });
	},
};