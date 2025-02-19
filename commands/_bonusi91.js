/*CMD
  command: /bonusi91
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
  { title: "⌛️ Ежедневная рулетка", command: "/rulet9" }]
  ,
[
  { title: "👥 Рефералка", command: "/refsist" }]
  ,
  [
 { title: "💰 Задания", command: "/zadans" }]
 ,
 [
 { title: "<- Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "👇")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


