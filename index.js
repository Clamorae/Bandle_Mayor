const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.login(process.env.BOT_TOKEN);

/* phrases.Add("Ou est passé mon discours ?");                                 // 0
phrases.Add("Ensemble nous sommes unis");
phrases.Add("De toutes les régions, nous ne faisons qu’un !");
phrases.Add("Je devrais faire un discours ? ou est passé mon discours ?");
phrases.Add("Cela demande mon plus grand chapeau");
phrases.Add("Allez y ! Attrapez mon chapeau, peignez ma moustache");        // 5*/

/* cartes.Add("Dresseur de Squales");          // 0
                        cartes.Add("Cavalier prétentieux");
                        cartes.Add("Proto poro");
                        cartes.Add("Fulminace");
                        cartes.Add("Jumeaux artilleurs");
                        cartes.Add("Sbire");
                        cartes.Add("Téléscope ambulant");
                        cartes.Add("Poro blindé(raciste imo)");
                        cartes.Add("Boss de l’arene");
                        cartes.Add("Tenor terrifiant");
                        cartes.Add("Voyageurs désabusés ");
                        cartes.Add("Traineau de poros");
                        cartes.Add("Mécha-commentateur");
                        cartes.Add("Yordle aérien");
                        cartes.Add("Monstre violet furieux");  // 13*/