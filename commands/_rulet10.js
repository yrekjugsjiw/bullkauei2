/*CMD
  command: /rulet10
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
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "❗️Ежедневный бонус доступен только тем, кто *пополнил* баланс бота на *общую* сумму 150 RUB за последние *7* дней")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs

