/*CMD
  command: /refsist8
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "В скором времени будет готово :)")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id


Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
