/*CMD
  command: /proverkaplat
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
  { title: "🔱 Оформить подписку", command: "/podpis" }]
    ,
  [
  { title: "⬑ Назад", command: "/platvalu" }]
]
Bot.sendInlineKeyboard(buttons, "🚫 Доступ к VIP прогнозам доступен при активной подписки *BULL VIP*")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
