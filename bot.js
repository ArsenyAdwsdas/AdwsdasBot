const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('message_reply.json')
const db = low(adapter)

const Discord = require('discord.js');

const client = new Discord.Client({fetchAllMembers: true, });

var prefix = '[!]\\'
var arseny_id = 347820978111250433
var bot_id = 0
var bot_user_name = "f"
var reply_to
var reply_to_content
var bot_name = "Adwsdas"
var now = new Date().getTime();
var bot_wip = false//"ANGRY"
var help_text = "\n" + prefix + "Add Simple Role = для админов: создать простую роль"+"\n"+prefix +"Rename Role = для админов: переименовать роль"+"\n" + prefix + "Edit Permissions Role = для админов: редактировать права роли (используйте коды прав типо BAN_MEMBERS)"+"\n" + prefix + "Color Role \\ " + prefix + "ColorHEX Role = для админов: поменять цвет, формат типо 00ffff" + "\n" + "/kill \n"+prefix+'Схемы Использования = как использовать некоторые команды\n./me'
var dima_server = 621728738316386344
 function getRandomInt(init, range_end) {
  let range_endq = range_end-init
  let seedq = now
  seedq = Math.pow(range_endq^(seedq^init),1.1)
  let fsaijfan = Math.round(seedq)%range_endq
  return fsaijfan+init
 }
 function close() {
   client.destroy()
 }
 
 String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
 };
 client.on('message', async message => {
  let isArseny = message.author.id == arseny_id
  let isNotArseny = !isArseny
  let arguments = message.content.slice(prefix.length).trim().split(/ +/g)
  let argumentsAndPrefix = message.content.trim().split(/ +/g)
  if(isArseny && message.content.toLowerCase().replaceAll("\,","\ ").replaceAll("\.","\ ").replaceAll("\\s+", " ").startsWith('все бот выключайся')) {
   message.channel.send("Ок.");
   close()
   process.on('SIGTERM', server.close.bind(server))
  }
  if (!message.guild && message.author.id == arseny_id && reply_to && !message.content == "Status Change") {reply_to.channel.send(message.content);let to_add = {}; if (message.content == "ban"){to_add[reply_to_content.toLowerCase()] = 1} else {to_add[reply_to.content.toLowerCase()] = message.content}; /*if (message.content == "ban"){db.get("bans").merge(to_add).write()} else {db.get("messages").merge(to_add).write()}*/}
  if (!message.guild) return;
  /*let role = message.guild.roles.find(r => r.name == 'Создатель '+bot_name)
  if (isNotArseny) {if (role && message.member.roles.get(role.id)) {message.member.removeRole(role.id)}}*/
  if(message.content.startsWith('/kill')) {
   if (message.mentions.users.first()) {
    message.channel.send("\\*" + message.mentions.users.first() + " выпал из мира*");
   } else {message.channel.send("\\*" + message.author + " выпал из мира*")}
  }
  if (message.content.startsWith(bot_user_name) || message.content.replace(/[\\<>@#&!]/g, "").includes(bot_id) || (message.mentions.roles && message.mentions.roles.first() && message.mentions.roles.first().managed && message.mentions.roles.first().name == bot_user_name)) {
   let reply = "nil"
   message.content = message.content.replace(/[\\<>@#&!]/g, "")
   message.content = message.content.replace(/[\\<>@#&!]/g, "")
   message.content = message.content.replaceAll("\\s+", " ");
   if (message.mentions.roles.first()){message.content = message.content.replaceAll(message.mentions.roles.first().id, bot_user_name)}
   if (message.mentions.users.first()){message.content = message.content.replaceAll(bot_id, bot_user_name)}
   let ban = db.get("bans").value()[arguments[0].toLowerCase()]
   if (!ban) {reply = db.get("messages").value()[message.content.toLowerCase()]}
   if (reply == "nil") {} else {if (reply){message.channel.send(reply)} else {reply_to_content = message.content;reply_to = message; client.users.find(user => user.id == arseny_id).send(message.author+": "+argumentsAndPrefix.toString().replaceAll(",", " "))}}
  }
  if(message.content.startsWith('./me')) {
   if (arguments[0]) {
    message.channel.send("\\*"+message.author+"\ "+arguments.toString().replaceAll(",", " ")+"*");
   } else {message.channel.send("\\*"+message.author + " не знает что делать*")}
   message.delete()
  }
  let command2 = arguments.shift()
  let command1 = arguments.shift()
  if(message.content.toLowerCase().startsWith('у бота бомбит') || message.content.toLowerCase().startsWith('бот бомбит')) {
   message.channel.send("ДА НЕ БОМБИТ У МЕНЯ!!!")
  }
  if(message.content.toLowerCase().startsWith('тупой бот')) {
   message.channel.send("Сам такой.")
  }
  if(message.content.toLowerCase().startsWith('мне не нравится этот бот') || message.content.toLowerCase().startsWith('плохой бот')) {
   message.channel.send("((")
  }
  if(message.content.toLowerCase().startsWith('хороший бот') || message.content.toLowerCase().startsWith('мне нравится этот бот')) {
   if (isArseny) {message.channel.send("Спасибо.", {files: ["./thanks2.png"]})} else {message.channel.send("Спасибо.")}
  }
  if(message.content.toLowerCase().startsWith('отличный бот')) {
   message.channel.send("Спасибо.", {files: ["./thanks2.png"]})
  }
  if(message.content.toLowerCase().startsWith('спасибо бот')) {
   if (isArseny) {message.channel.send("Не за что)", {files: ["./thanks2.png"]})} else {message.channel.send("Не за что)")}
  }
  if(message.content.toLowerCase().startsWith('бот лох')) {
   message.channel.send("Сам такой.")
  }
  if(message.content.toLowerCase().startsWith(bot_user_name.toLowerCase()+", мы уходим") && isArseny) {
   message.channel.send("```yaml\nМне все-равно не нравился этот сервер```")
   message.member.kick()
   message.guild.leave()
  }
  if(message.content.startsWith("ААА БЛ\#ТЬ") && isArseny) {
   message.channel.send("```yaml\nУспокойся...```")
  }
 if (message.content.startsWith(prefix)) {
  let bot = message.guild.members.get(bot_id)
  let Admin = message.member.hasPermission(["MANAGE_NICKNAMES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS", "MANAGE_ROLES"], {checkAdmin: true, checkOwner: true}) || message.member.roles.find(r => r.name == 'Set Roles') || message.author.id == arseny_id
  let bot_role_pos = bot.highestRole.position
  console.log(message.author + ': ' + message.content)
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix+"leave-dima") && isArseny) {
   message.channel.send("```diff\n- ТЕСТ...```");
   client.channels.get("621729015014752316").send("```diff\n- Покидаю сервер...```")
   client.guilds.leave()
  }
  if(message.content.startsWith(prefix + 'help')) {
   let send_to
   if (message.content.startsWith(prefix + 'help-g')) {send_to = message.channel} else {send_to = message.author}
   send_to.send("```Как видно так и пишите (\\ с пробелом до и после это другой вариант написания команды, большая часть команд чувствительна к регистру (чувствительно к большим и маленьким буквам), если нет то после команды пишу [Z-z], и да в [] я буду писать некоторые \"теги\" команды ):\n" + prefix + "Russian Roulette \\ " + prefix + "Русская Рулетка [Z-z] \n" + prefix + "кол = воткнуть кол в кого-то \n" + prefix + "Set Role \\ " + prefix + "setrole \\ " + prefix + "SR = для админов: поставить роль \n" + prefix + "Set Role- \\ " + prefix + "setrole- \\ " + prefix + "SR- = для админов: убрать роль" + help_text + "``` ```yaml\n" + "Made by Arseny" + bot_name + " (Arseny, ID:" + arseny_id + ")```");
   if (!message.content.startsWith(prefix + 'help-g')) {message.channel.send("Отправлено в личку")}
  }
  if(message.content.startsWith(prefix + 'Схемы Использования')) {
   let send_to
   if (message.content.startsWith(prefix + 'help-g')) {send_to = message.channel} else {send_to = message.author}
   send_to.send("```yaml\n"+prefix+"Set Roles [упоминание роли] [упоминание человека] (или наоборот)\n"+prefix+"Add Simple Role [название для роли]\n"+prefix+"Color Role [упоминание роли] [цвет в шестнадцатеричной системе счисления]\n"+prefix+"Rename Role [упоминание роли] [новое название]\n"+prefix+"Edit Permissions Role [упоминание роли] [далее коды прав типо BAN_MEMBERS]\n/kill [упоминание человека чтоб убить? если нету такого то суицид]\n"+prefix+"кол [упоминание человека чтоб проткнуть его противо-вампирным колом]\n./me [что делать? если нету то пишет что не знаешь что писать]```");
   if (!message.content.startsWith(prefix + 'Схемы Использования-g')) {message.channel.send("Отправлено в личку")}
  }
  if(message.content.startsWith(prefix + "кто лох")) {
   message.channel.send("```Если ты меня спрашиваешь то отвечу кратко: ТЫ```");
  }
  if(message.content.startsWith(prefix+'о '+bot_user_name)) {
   let send_to
   if (message.content.startsWith(prefix + 'help-g')) {send_to = message.channel} else {send_to = message.author}
   send_to.send("```yaml\n Я написан на JavaScript в Notepad++, прошу не оскорблять меня, перед использованием команд прошу ознакомится с командой на следующей строке \n"+prefix+"Схемы Использования\n А то меня бесит когда кто-то использует команды без какого-то из аргументов...```");
   if (!message.content.startsWith(prefix+'о '+bot_user_name+'-g')) {message.channel.send("Отправлено в личку")}
  } 
  if(message.content.toLowerCase() == prefix+'russian roulette' || message.content.toLowerCase() == prefix+'русская рулетка') {
   if(!getRandomInt(1, 100) == 1) {
    let guil = message.guild;
    let role = guil.roles.find(r => r.name == 'Сдохший');
    message.member.addRole(role);
    message.channel.send("```diff\n- You died...```");
   } else {
    let guil = message.guild;
    let role = guil.roles.find(r => r.name == 'Выживший');
    message.member.addRole(role);
    message.channel.send("ТЫ ВЫЖИЛ \\ ВЫЖИЛА!!!");
   }
  }
  if(message.content.startsWith(prefix + 'кол')) {
   if (message.mentions.users.first()) {
    message.channel.send("\\*" + message.mentions.users.first() + ' был проткнут ' + message.author + " с помощью кол" + "*");
   } else {message.channel.send("А КОГО УБИТЬ ТО?")}
  }
  if(message.content.startsWith(prefix + 'setrole') || message.content.startsWith(prefix + 'Set Role') || message.content.startsWith(prefix + 'SR')) {
   if (Admin) {
    if (message.mentions.users.first()) {
     if (message.mentions.roles.first()) {
      if (!(message.content.startsWith(prefix + 'setrole-') || message.content.startsWith(prefix + 'Set Role-') || message.content.startsWith(prefix + 'SR-'))) {
       if (!message.mentions.members.first().roles.find(r => r.id == message.mentions.roles.first().id)) {
        if (message.mentions.roles.first().equals(message.guild.roles.find(r => r.name == 'Создатель ' + bot_name)) && isNotArseny) {
         message.channel.send("НЕЗЯ БЛ#ТЬ, ЭТА РОЛЬ ЗАРЕЗЕРВИРОВАННА МОЕМУ СОЗДАТЕЛЮ")
        } else {
         message.mentions.members.first().addRole(message.mentions.roles.first());
         if (message.content.startsWith(prefix + 'setrole+s') || message.content.startsWith(prefix + 'Set Role+s') || message.content.startsWith(prefix + 'SR+s')) {
         message.delete()} else {
         message.channel.send("\\*" + message.mentions.roles.first() + ' выдана ' + message.mentions.users.first() + "*");}}
       } else {message.channel.send("У НЕГО ОНА БЛ#ТЬ ЕСТЬ")}
      } else {
       if (message.mentions.members.first().roles.find(r => r.id == message.mentions.roles.first().id)) {
        if (!message.mentions.roles.first().equals(message.guild.roles.find(r => r.name == 'Set Roles') && !(message.mentions.roles.first().equals(message.guild.roles.find(r => r.name == 'Создатель ' + bot_name)) && isNotArseny))) {
         message.mentions.members.first().removeRole(message.mentions.roles.first());
         if ((message.content.startsWith(prefix + 'setrole--s') || message.content.startsWith(prefix + 'Set Role--s') || message.content.startsWith(prefix + 'SR--s'))) {
          message.delete()} else {message.channel.send("\\*" + message.mentions.roles.first() + ' удалена у ' + message.mentions.users.first() + "*")}
        } else {message.channel.send("НЕЗЯ БЛ#ТЬ УБРАТЬ ЭТУ РОЛЬ")}} else {message.channel.send("У НЕГО НЕТУ ЭТОЙ РОЛИ БЛ#ТЬ")}}
     } else {message.channel.send("А ЧТО ДАТЬ\\УБРАТЬ ТО БЛ#ТЬ?")}} else {message.channel.send("КОМУ ДАТЬ БЛ#ТЬ?")}} else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
  if(message.content.startsWith(prefix + 'Add Simple Role')) {
   if (Admin) {
    if ( arguments[1] ) {
     let z = arguments.shift()
     message.guild.createRole({name: arguments.toString().replaceAll(",", " "), position: bot_role_pos, mentionable: true, permissions: 0})
     if (message.content.startsWith(prefix + 'Add Simple Role-s')) {
      message.delete()} else {
      message.channel.send("УдаЛОСЬ")}
    } else {message.channel.send("А НАЗВАНИЕ РОЛИ БЛ#ТЬ?")}
   } else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
  if(message.content.startsWith(prefix + 'ColorHEX Role') || message.content.startsWith(prefix + 'Color Role')) {
   if (Admin) {
    if (message.mentions.roles.first()) {
     if ( arguments[1] ) {
      let role = message.mentions.roles.first()
      role.setColor(arguments[1])
      if (message.content.startsWith(prefix + 'Color Role-s') || message.content.startsWith(prefix + 'ColorHEX Role-s')) {
       message.delete()} else {
       message.channel.send(":heavy_check_mark: цвет изменен")}
     } else {message.channel.send("А ЦВЕТ? (2 аргумент)")}
    } else {message.channel.send("А УПОМИНАНИЕ РОЛИ БЛ#ТЬ?")}
   } else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
  if(message.content.startsWith(prefix + 'DELETE Role')) {
   if (Admin) {
    if (message.mentions.roles.first()) {
     message.mentions.roles.first().delete()
     if (message.content.startsWith(prefix + 'DELETE Role-s')) {
      message.delete()} else {
      message.channel.send(":heavy_check_mark:")
      message.channel.send(":sob: хорошая роль была...")}
    } else {message.channel.send("А УПОМИНАНИЕ РОЛИ БЛ#ТЬ?")}
   } else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
  if(message.content.startsWith(prefix + 'Edit Permissions Role')) {
   if (Admin) {
    if (message.mentions.roles.first()) {
     if (arguments[2]) {
      let m = arguments.shift()
      m = arguments.shift()
      message.mentions.roles.first().setPermissions(arguments)
      if (message.content.startsWith(prefix + 'Edit Permissions Role-s')) {
      message.delete()} else {
      message.channel.send(":heavy_check_mark: права изменены")}
     } else {message.mentions.roles.first().setPermissions([])}
    } else {message.channel.send("А УПОМИНАНИЕ РОЛИ БЛ#ТЬ?")}
   } else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
  if(message.content.startsWith(prefix + 'Rename Role')) {
   if (Admin) {
    if (message.mentions.roles.first()) {
     if (arguments[1]) {
      let m = arguments.shift()
      if ((arguments.toString().replaceAll(",", " ") == "Создатель " + bot_name || message.mentions.roles.first().name == "Создатель " + bot_name) && isNotArseny) {
       message.channel.send("БЛ#ТЬ ЛИБО РОЛЬ С ЗАРЕЗЕРВИРОВАННЫМ НАЗВАНИЕМ ДЛЯ МОЕГО СОЗДАТЕЛЯ ЛИБО НОВОЕ НАЗВАНИЕ ЗАРЕЗЕРВИРОВАННО!")
      } else {
      if ((arguments.toString().replaceAll(",", " ") == "Set Roles" || message.mentions.roles.first().name == "Set Roles") && isNotArseny) {
       message.channel.send("БЛ#ТЬ ЛИБО РОЛЬ С ЗАРЕЗЕРВИРОВАННЫМ НАЗВАНИЕМ ДЛЯ ТОГО ЧТОБ Я СЧИТАЛ ЭТУ РОЛЬ АДМИНСКОЙ ЛИБО НОВОЕ НАЗВАНИЕ ЗАРЕЗЕРВИРОВАННО!")
      } else {
       message.mentions.roles.first().setName(arguments.toString().replaceAll(",", " "))
       if (message.content.startsWith(prefix + 'Rename Role-s')) {
       message.delete()} else {
       message.channel.send(":heavy_check_mark: название изменено")}
      }}
     } else {message.channel.send("А НОВОЕ НАЗВАНИЕ БЛ#ТЬ? (2 аргумент)")}
    } else {message.channel.send("А УПОМИНАНИЕ РОЛИ БЛ#ТЬ?")}
   } else {message.channel.send("ТЫ НЕ АДМИН БЛ#ТЬ")}
  }
     
 }});
 client.on('ready', () => {
    bot_id = client.user.id
    bot_user_name = client.user.username
    help_text = help_text+'\n'+prefix+'о '+bot_user_name
    if (bot_wip == true) {
    client.user.setPresence({status: 'dnd'});
    client.user.setPresence({game: {name: "WIP, " + prefix + "help", type: 2}})} else {
    if (bot_wip) {client.user.setPresence({status: 'dnd'}); client.user.setPresence({game: {name: "Пытается успокоить Арсения, " + prefix + "help", type: 2}})} else {client.user.setPresence({game: {name: "ACTIVE, " + prefix + "help", type: 3}})}}
 })
client.login('Njg2NjgwOTIxOTg1Nzc3NzI3.XmayyA.hWbUa1ZKAQ0hJChEAX6_xp3LEp0');
console.log('...')
