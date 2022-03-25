const { Client, Intents } = require('discord.js');
global.newDay="true";

/*const sql = require("sqlite");
sql.open("./database.sqlite");
sql.run("CREATE TABLE IF NOT EXISTS userData (userId TEXT, money INTEGER)");*/

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.on("ready", () => {
    console.log("I'm ready !");
    var newDay=true;
});

client.on("message", msg => {
    if (msg.content.includes("maire")){
      msg.reply(getSentence(Math.floor(Math.random()* 8)));
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
  const currentDate = new Date();
  const hms = currentDate.toLocaleString().substring(11);
  const hour = hms.slice(0, -9);
  console.log(currentDate.toLocaleString());
  console.log(newDay);
  console.log(hour);
  if (hour==='1' && newDay==='true'){
    message.reply(getSentence(Math.floor(Math.random()* 8)));
    newDay="false";
  }else if (hour==='2' && newDay==='false'){
    console.log("BBBBBBBBB");
    newDay="true";
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
    case 19:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457217858904064/poropillon.png";
    break;
    case 20:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457218026680330/psinistre.png";
    break;
    case 21:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457218202861598/pagile.png";
    break;
    case 22:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457240122261514/ppilleur.png";
    break;
    case 23:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457240352968734/psolitaire.png";
    break;
    case 24:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457240583643166/pblinde.png";
    break;
    case 25:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457260301090817/ppuissant.png";
    break;
    case 26:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457260514983956/ptemeraire.png";
    break;
    case 27:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457260720488488/pelue.png";
    break;
    case 28:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457291733200947/pmythique.png";
    break;
    case 29:
      var a = "https://cdn.discordapp.com/attachments/936395302158602281/943457291993251860/paffectueux.png";
    break;
  }
  return(a);
}

function getCardName(value){
  switch(value){
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
    case 19:
      var a = "Poropillon";
    break;
    case 20:
      var a = "Poro sinistre";
    break;
    case 21:
      var a = "Poro agile";
    break;
    case 22:
      var a = "Poro pilleur";
    break;
    case 23:
      var a = "Poro solitaire";
    break;
    case 24:
      var a = "Poro blindé";
    break;
    case 25:
      var a = "poro puissant";
    break;
    case 26:
      var a = "Poro téméraire";
    break;
    case 27:
      var a = "Poro élue";
    break;
    case 28:
      var a = "Poro mythique";
    break;
    case 29:
      var a = "Poro affectueux";
    break;
  }
  return(a);
}

client.on("message", msg => {
  if (msg.content.includes("cartes")) {

    let x = Math.floor(Math.random() * 30)
    var a = getCardName(x);

    let y = 0;
    do {
      y = Math.floor(Math.random() * 30);
    }while (y==x);

    let z;
    do {
      z = Math.floor(Math.random() * 30);
    }while (z==x || z==y);

    var b = getCardName(y);
    var c = getCardName(z);

    msg.reply(`- ${a} \n- ${b} \n- ${c}`);
    msg.channel.send(addImage(x));
    msg.channel.send(addImage(y));
    msg.channel.send(addImage(z));
  }
});

client.on("message", msg => {
  if (msg.content.includes("avis")) {

    let x = Math.floor(Math.random() * 8)

    switch(x){
      case 0:
        var a = "idée de merde";
      break;
      case 1:
        var a = "Pas ouf";
      break;
      case 2:
        var a = "Rincé";
      break;
      case 3:
        var a = "De fou !";
      break;
      case 4:
        var a = "C'est carré je stream";
      break;
      case 5:
        var a = "Au top";
      break;
      case 6:
        var a = "Ratio bouffon";
      break;
      case 7:
        var a = "Flemme de répondre :zzz:";
      break;
    }
    msg.reply(`${a}`);
  }
});

client.login(process.env.BOT_TOKEN);
