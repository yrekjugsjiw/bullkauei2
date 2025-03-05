/*CMD
  command: /magaz
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
{ title: "🎫 Оформить BULL VIP", command: "/podpis" }]
,
[
  { title: "🚀 Купить сигналы", command: "/prog" }]
  ,
[
 { title: "<- Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Выберите действие 👇")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
