/*CMD
  command: /adminReply
  help: 
  need_reply: true
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

if(user.telegramid!=admin_id){return}

var option = {reply_to_message_id: options.message_id}
Bot.sendMessageToChatWithId(options.userId,"Ответ от администратора:\n" + message, option)

Bot.sendMessage("отправлено " + options.user_link)
