/*CMD
  command: /afto
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin_id = "5868075152"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})


if(user.telegramid != admin_id){return}

if(msg_count-msg_seen < 1){
Bot.sendMessage("вопросов нет :(")
return}

var msg = "Вопросы: \n\n"
for(var i=[msg_seen+1];i<[msg_count+1];i++){

msg += "*User* : [" + msg_details[i].name + " " + msg_details[i].last_name + "](tg://user?id=" + msg_details[i].userId + ")" + "\n*User Id* : " + msg_details[i].userId + "\n*Message* :\n" + msg_details[i].message + "\n\n Reply it : " + i + "\n\n\n"
}

Bot.setProperty("support_msg_seen",msg_count,"integer")
Bot.sendMessage(msg)

