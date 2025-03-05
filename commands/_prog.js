/*CMD
  command: /prog
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

var buttons = [
[
  { title: "⬑ Назад", command: "/magaz" }]
]
Bot.sendInlineKeyboard(buttons, "Ты не можешь купить прогнозы на режим, не имея VIP-подписки. Минимальная допустимая *подписка* -> BULL VIP")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


