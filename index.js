const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.on("ready", () => {
    console.log("I'm ready !");
});

client.on("message", msg => {
    if (msg.content.includes("maire")) {
      msg.reply(getSentence(Math.floor(Math.random() * 8)))
    }
});

function getSentence(value){
  switch(value){
    case 0:
        var a = "Ou est passé mon discours ?";
      break;
    case 1:
        var a = "Ensemble, nous sommes unis !";
      break;
    case 2:
        var a = "Prenez mon chapeau, peignez ma moustache !";
      break;
    case 3:
        var a = "Je vais faire un discours ! Euhm, où est mon discours ?";
      break;
    case 4:
        var a = "Cela mérite mon plus grand chapeau !";
      break;
    case 5:
        var a = "Avec les autres régions, nous sommes, unis !";
      break;
      case 6:
          var a = "Fuite courageuse !";
      break;
      case 7:
          var a = "Est-ce l'heure de la sieste ?";
      break;
  }
  return (a);
}

client.on('message', function(message) {
  // Now, you can use the message variable inside
  if (message.content === "launch") {
      msg.reply("daily quote launched");
      daytime = 0;
      var interval = setInterval (function () {
        daytime++;
        message.channel
          .send(getSentence(Math.floor(Math.random() * 8))) // increment the variable
          .catch(console.error); // add error handling here
      }, 86400 * 1000); 
      var stopwatch = 0;
      setInterval(() => console.log(`It's been ${++stopwatch} second(s)`), 1000);
  }
});

function addImage(value){
  switch(value){
    case 0:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943092846699896883/dresseur.png";
    break;
    case 1:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943092592818671616/cavalier.png";
    break;
    case 2:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093947952164895/proto.png";
    break;
    case 3:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943092855004622888/fulmi.png";
    break;
    case 4:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093962300850206/jumeaux.png";
    break;
    case 5:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093962560925706/sbire.png";
    break;
    case 6:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093931506270258/telescope.png";
    break;
    case 7:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943092832875470858/cercle.png";
    break;
    case 8:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943092292149985290/boss.png";
    break;
    case 9:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093948140896266/tenor.png";
    break;
    case 10:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093931724402688/voyageurs.png";
    break;
    case 11:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093904201371678/traineau.png";
    break;
    case 12:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093904444645396/mecha.png";
    break;
    case 13:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093948379967548/yordle.png";
    break;
    case 14:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093931288199198/monstre.png";
    break;
    case 15:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093903932932176/semis.png";
    break; 
    case 16:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093931074273330/grand-pere.png";
    break; 
    case 17:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093947671126026/grimpeur.png";
    break; 
    case 18:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943093962774831174/tete.png";
    break;
  }
  return(a);
}

client.on("message", msg => {
  if (msg.content.includes("cartes")) {

    let x = Math.floor(Math.random() * 19)
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
        var a = "Cercle de champignon";
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
      case 15:
        var a = "Semis de pomme de pin explosive";
      break; 
      case 16:
        var a = "Grand-père féérique";
      break; 
      case 17:
        var a = "Grimpeur érudit";
      break; 
      case 18:
        var a = "Tête brulée";
      break; 
    }

    let y = 0;
    do {
      y = Math.floor(Math.random() * 19);
    }while (y==x);

    let z;
    do {
      z = Math.floor(Math.random() * 19);
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
        var b = "Cercle de champignon";
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
      case 15:
        var b = "Semis de pomme de pin explosive";
      break; 
      case 16:
        var b = "Grand-père féérique";
      break; 
      case 17:
        var b = "Grimpeur érudit";
      break; 
      case 18:
        var b = "Tête brulée";
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
        var c = "Cercle de champignon";
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
      case 15:
        var c = "Semis de pomme de pin explosive";
      break; 
      case 16:
        var c = "Grand-père féérique";
      break; 
      case 17:
        var c = "Grimpeur érudit";
      break; 
      case 18:
        var c = "Tête brulée";
      break;  
    }

    msg.reply(`- ${a} \n- ${b} \n- ${c}`);
    msg.channel.send(addImage(x));
    msg.channel.send(addImage(y));
    msg.channel.send(addImage(z));
  }
});

client.login(process.env.BOT_TOKEN);