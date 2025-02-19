/*CMD
  command: /mylink
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let link = RefLib.getLink();
Bot.sendMessage("👤 Твоя реферальная ссылка: [link](" + link + ")");
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


