const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avis')
        .setDescription("Demandez l'avis du bot sur n'importe quoi !")
        .addStringOption(option => option.setName("sujet")
            .setDescription("Sur quel sujet voulez-vous recevoir un avis ?")
            .setRequired(true)
        ),
    async execute(interaction) {
        let content = interaction.options.getString("sujet");
        let user = interaction.user;
        let response = `${user} a demandé : \`avis ${content}\`\n\n`;
        if (content.toLowerCase().includes("turtle") || content.toLowerCase().includes("tortoise")) {
            response += "un giga banger, peut importe ce que peuvent en dire les autres";
            msg.reply(response);
            return;
        }

        let random_number = Math.floor(Math.random() * 15);

        switch (random_number) {
            case 0:
                response += "idée de merde";
                break;
            case 1:
                response += "Pas ouf";
                break;
            case 2:
                response += "Rincé";
                break;
            case 3:
                response += "De fou !";
                break;
            case 4:
                response += "C'est carré je stream";
                break;
            case 5:
                response += "Au top";
                break;
            case 6:
                response += "Ratio bouffon";
                break;
            case 7:
                response += "Flemme de répondre :zzz:";
                break;
            case 8:
                response += "Fuck Riot";
                break;
            case 9:
                response += "Sayé tu fais trop le cosmonaute lache moi wAllah";
                break;
            case 10:
                response += "Bandle tree rework @pakichu 😬";
                break;
            case 11:
                response += "🙏";
                break;
            case 12:
                response += "😬";
                break;
            case 13:
                response += "10/20 franchement osef";
                break;
            case 14:
                response += "St Sylvestre Filet O Fish";
                break;
            default:
                response += "Rien à déclarer";
        }
        await interaction.reply(`${response}`);
    }
} 