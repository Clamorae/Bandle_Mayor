const { Client, Intents } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
global.newDay="true";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.on("ready", () => {
    console.log("I'm ready !");
    var newDay=true;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content) return;
  newMessage.reply("Tu vas regretter ce que tu viens de faire...");
});

client.on("messageCreate", msg => {
    if (msg.content.includes("maire")||(msg.content.includes("Maire"))){
      msg.reply(getSentence(Math.floor(Math.random()* 8)));
    }
    if (msg.content.includes("ratio")||msg.content.includes("Ratio")){
      msg.react('👍');
    }
    if (msg.content.includes("ets")){
      msg.reply('https://media.discordapp.net/attachments/936395302158602281/958668956112138240/apps.png?width=827&height=465');
    }
    if (msg.content.includes("la haine")||(msg.content.includes("La haine"))){
      msg.reply('https://cdn.discordapp.com/attachments/936395302158602281/959565986648969256/unknown.png');
    }
    if (msg.content == "inventaire"){
      getInventory(msg.author.id,msg);
    }
});

function getInventory(userId,msg){
  const fs = require('fs');
  let begin = "Vous avez ";

  fs.readFile('./BDD.csv', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }else{
      let index=0;
      for(var i=data.indexOf(userId); i<data.length;i++) {
        if (data[i] === ";"){
          index=i+1;
          i=data.length;
        }
      }

      let value = 0;
      let card =0
      while(card<30){
        value = data.substring(index,index+1);
        if(Number(value)!=0){
          begin = begin.concat(value);
          begin = begin.concat(" ");
          begin = begin.concat(getCardName(Number(card)));
          begin = begin.concat(",");
        }
        card+=1;
        index+=2;
      }
      msg.reply(begin);
    }
  });

  
}

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

client.on('messageCreate', function(message) {
  const currentDate = new Date();
  const hms = currentDate.toLocaleString().substring(11);
  const hour = hms.slice(0, -9);
  /*console.log(currentDate.toLocaleString());
  console.log(newDay);
  console.log(hour);*/
  if (hour==='1' && newDay==='true'){
    message.reply(getSentence(Math.floor(Math.random()* 8)));
    newDay="false";
  }else if (hour==='2' && newDay==='false'){  
    console.log("BBBBBBBBB");
    newDay="true";
  }
});

function replaceAt(index, isAdded, data) {
  let begin = data.substring(0,index);
  let end = data.substring(index+1,data.length);
  data = data.substring(index,index+1);
  if(isAdded){
    var value = Number(data) + 1;
  }else{
    var value = Number(data) - 1;
  }
  data = value.toString();
  console.log(data);
  let newBegin = begin.concat(data);
  let newData = newBegin.concat(end);
  const fs = require('fs');
  fs.writeFile("./BDD.csv", newData, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });
}

function newUser(userId,data,value){
  let newLine = userId.concat(";0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0\n");
  let newText = newLine.concat(data);
  const fs = require('fs');
  console.log(newLine);
  fs.writeFile("./BDD.csv", newText, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
  let index=0;
  for(var i=newText.indexOf(userId); i<data.length;i++) {
      if (newText[i] === ";"){
        index=i;
        i=newText.length;
      }
    }
  replaceAt((index+1+2*value),1, newText);
}

function readFile(userId,value){
  const fs = require('fs');

  fs.readFile('./BDD.csv', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    if(data.indexOf(userId) >= 0){
      let index=0;
      for(var i=data.indexOf(userId); i<data.length;i++) {
          if (data[i] === ";"){
            index=i;
            i=data.length;
          }
      }
      replaceAt((index+1+2*value),1, data);
    }else{
      newUser(userId,data,value);
    }
    //console.log(data);
  });

}

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

client.on("messageCreate", msg => {
  if (msg.content.includes("carte")||(msg.content.includes("Carte"))) {
    const userID = msg.author.id;
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

    msg.channel.send(addImage(x));
    msg.channel.send(addImage(y));
    msg.channel.send(addImage(z));
    
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('one')
					.setLabel(`${a}`)
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('two')
					.setLabel(`${b}`)
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('three')
					.setLabel(`${c}`)
					.setStyle('PRIMARY'),
			);

		msg.reply({ content: `- ${a} \n- ${b} \n- ${c}`, components: [row] });
    const filter = i => i.user.id === userID;
    const collector = msg.channel.createMessageComponentCollector({ filter, time: 15000 });
    const wait = require('node:timers/promises').setTimeout;
    

    collector.on('collect', async i => {
      if (i.customId === 'one') {
        await i.deferUpdate();
        await i.editReply({ content: `Vous avez choisi ${a}`, components: [] });
        readFile(userID,x);
        await wait(4000);
      }else if(i.customId === 'two'){
        await i.deferUpdate();
        await i.editReply({ content: `Vous avez choisi ${b}`, components: [] });
        readFile(userID,y);
        await wait(4000);
      }else if(i.customId === 'three'){
        await i.deferUpdate();
        await i.editReply({ content: `Vous avez choisi ${c}`, components: [] });
        readFile(userID,z);
        await wait(4000);
      }
    });

    collector.on('end', collected => console.log(`Collected ${collected.size} items`));

  }
});

client.login(process.env.BOT_TOKEN);
