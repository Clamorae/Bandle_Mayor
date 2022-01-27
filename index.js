const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {
    if (msg.content === "maire") {
        switch(Math.floor(Math.random() * 6)) {
            case 0:
                msg.reply("Ou est passé mon discours?");
              break;
            case 1:
                msg.reply("Ensemble nous sommes unis");
              break;
            case 2:
                msg.reply("De toutes les régions, nous ne faisons qu’un!");
              break;
            case 3:
                msg.reply("Je devrais faire un discours? ou est passé mon discours?");
              break;
            case 4:
                msg.reply("Cela demande mon plus grand chapeau");
              break;
            default:
                msg.reply("Allez y! Attrapez mon chapeau, peignez ma moustache");
          }
    }
});

client.on("message", msg => {
  if (msg.content === "test") {
    msg.reply("https://media.discordapp.net/attachments/936395302158602281/936395315978838036/03SI015.png?width=311&height=468");
  }
});

client.on("message", msg => {
  if (msg.content === "carte") {
    let x = Math.floor(Math.random() * 15)
    switch(x){
      case 0:
        var a = "Dresseur de Squales";
      break;
      case 1:
        var a = "Cavalier prétentieux";
      break;
      case 2:
        var a = "Proto poro";
      break;
      case 3:
        var a = "Fulminace";
      break;
      case 4:
        var a = "Jumeaux artilleurs";
      break;
      case 5:
        var a = "Sbire";
      break;
      case 6:
        var a = "Téléscope ambulant";
      break;
      case 7:
        var a = "Poro blindé(raciste imo)";
      break;
      case 8:
        var a = "Boss de l’arene";
      break;
      case 9:
        var a = "Tenor terrifiant";
      break;
      case 10:
        var a = "Voyageurs désabusés ";
      break;
      case 11:
        var a = "Traineau de poros";
      break;
      case 12:
        var a = "Mécha-commentateur";
      break;
      case 13:
        var a = "Yordle aérien";
      break;
      case 14:
        var a = "Monstre violet furieux";
      break; 
    }
    let y = 0;
    do {
      y = Math.floor(Math.random() * 15);
    }while (y==x);
    let z;
    do {
      z = Math.floor(Math.random() * 15);
    }while (z==x || z==y);
    switch(y){
      case 0:
        var b = "Dresseur de Squales";
      break;
      case 1:
        var b = "Cavalier prétentieux";
      break;
      case 2:
        var b = "Proto poro";
      break;
      case 3:
        var b = "Fulminace";
      break;
      case 4:
        var b = "Jumeaux artilleurs";
      break;
      case 5:
        var b = "Sbire";
      break;
      case 6:
        var b = "Téléscope ambulant";
      break;
      case 7:
        var b = "Poro blindé(raciste imo)";
      break;
      case 8:
        var b = "Boss de l’arene";
      break;
      case 9:
        var b = "Tenor terrifiant";
      break;
      case 10:
        var b = "Voyageurs désabusés ";
      break;
      case 11:
        var b = "Traineau de poros";
      break;
      case 12:
        var b = "Mécha-commentateur";
      break;
      case 13:
        var b = "Yordle aérien";
      break;
      case 14:
        var b = "Monstre violet furieux";
      break; 
    }
    switch(z){
      case 0:
        var c = "Dresseur de Squales";
      break;
      case 1:
        var c = "Cavalier prétentieux";
      break;
      case 2:
        var c = "Proto poro";
      break;
      case 3:
        var c = "Fulminace";
      break;
      case 4:
        var c = "Jumeaux artilleurs";
      break;
      case 5:
        var c = "Sbire";
      break;
      case 6:
        var c = "Téléscope ambulant";
      break;
      case 7:
        var c = "Poro blindé(raciste imo)";
      break;
      case 8:
        var c = "Boss de l’arene";
      break;
      case 9:
        var c = "Tenor terrifiant";
      break;
      case 10:
        var c = "Voyageurs désabusés ";
      break;
      case 11:
        var c = "Traineau de poros";
      break;
      case 12:
        var c = "Mécha-commentateur";
      break;
      case 13:
        var c = "Yordle aérien";
      break;
      case 14:
        var c = "Monstre violet furieux";
      break; 
    }
    msg.reply(`- ${a} \n- ${b} \n- ${c}`);
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